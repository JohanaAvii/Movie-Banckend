import {
  uploadVideo,
  createRequest,
  respondRequestController,
  linkMovie,
  movieListing,
} from "./controllers";
import { Hono } from "hono";
import { jwt } from "hono/jwt";
import { validateFields } from "./services/validateFields";
import { requestSchema, respondSchema } from "./schemas";
import { getPendingRequests } from "./controllers/getPendingRequests";
const app = new Hono();

app.use(
  "/request/*",
  jwt({
    secret: process.env.SECRET_SEED ?? "",
  })
);
app.post("/lambda/link-movie", linkMovie);

app.post(
  "/request/response",
  validateFields(respondSchema),
  respondRequestController
);
app.post("/request/upload", uploadVideo);
app.get("/request/listing", movieListing);
app.post("/request", validateFields(requestSchema), createRequest);
app.get("/request", getPendingRequests);
console.log(`Bun run on: ${process.env.PORT}`);

Bun.serve({
  port: process.env.PORT ?? 80,
  fetch: app.fetch,
  maxRequestBodySize: 8000000000,
});
