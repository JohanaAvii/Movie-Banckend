import { Hono } from "hono";
import { uploadVideo } from "./controllers/uploadVideoController";
import { createRequest } from "./controllers/createRequest";

const app = new Hono();

app.post("/movie/upload", uploadVideo);
app.post("/movie/request", createRequest);

export default app;
