import { Hono } from "hono";
import { cors } from "hono/cors";
import { uploadVideo } from "./controllers/uploadVideoController";
import { createRequest } from "./controllers/createRequest";
import { respondRequestController } from "./controllers/respondRequest";
import { linkMovie } from "./controllers/linkMovie";
import { jwt } from "hono/jwt";
import { validateFields } from "./services/validateFields";
import { requestSchema, respondSchema } from "./schemas";

const app = new Hono();

app.use(
  "/movie/*",
  jwt({
    secret: process.env.SECRET_SEED ?? "",
  })
);
app.use(cors());

app.post("/movie/upload", uploadVideo);
app.post("/movie/request", validateFields(requestSchema), createRequest);
app.post(
  "/movie/request/response",
  validateFields(respondSchema),
  respondRequestController
);
app.post("/lambda/link-movie", linkMovie);

console.log(`Bun run on: ${process.env.PORT}`);

Bun.serve({
  fetch: app.fetch,
  maxRequestBodySize: 8000000000,
});
