import {
  uploadVideo,
  createRequest,
  respondRequestController,
  linkMovie,
  movieListing,
} from "./controllers";
import { Hono } from "hono";
import { cors } from "hono/cors";
import { jwt } from "hono/jwt";
import { validateFields } from "./services/validateFields";
import { requestSchema, respondSchema } from "./schemas";
const app = new Hono();

app.use("*", cors());
app.use(
  "/movie/*",
  jwt({
    secret: process.env.SECRET_SEED ?? "",
  })
);
app.post("/lambda/link-movie", linkMovie);

app.post("/movie/upload", uploadVideo);
app.get("/movie/listing", movieListing);
app.post("/movie/request", validateFields(requestSchema), createRequest);
app.post(
  "/movie/request/response",
  validateFields(respondSchema),
  respondRequestController
);

console.log(`Bun run on: ${process.env.PORT}`);

Bun.serve({
  port: process.env.PORT ?? 80,
  fetch: app.fetch,
  maxRequestBodySize: 8000000000,
});
