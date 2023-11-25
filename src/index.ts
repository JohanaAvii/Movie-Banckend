import { Hono } from "hono";
import { uploadVideo } from "./controllers/uploadVideoController";

const app = new Hono();

app.post("/upload", uploadVideo);

export default app;
