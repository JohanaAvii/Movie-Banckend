import { Hono } from "hono";
import { uploadVideo } from "./controllers/uploadVideoController";
import { createRequest } from "./controllers/createRequest";
import { respondRequestController } from "./controllers/respondRequest";

const app = new Hono();

app.post("/movie/upload", uploadVideo);
app.post("/movie/request", createRequest);
app.post("/movie/request/response", respondRequestController);

export default app;
