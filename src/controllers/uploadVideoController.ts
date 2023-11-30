import { Context, Env } from "hono";
import { readFileSync, writeFileSync, rmSync, existsSync, mkdirSync } from "fs";
import { join } from "path";
import { uploadToS3 } from "../services/awsService";

const uploadVideo = async (context: Context<Env, "/movie/upload", {}>) => {
  const tempPath = join(import.meta.dir, "../../temp");
  if (!existsSync(tempPath)) {
    mkdirSync(tempPath);
  }
  const body = await context.req.parseBody();
  const video = body.video as File;
  if (video == null)
    return context.json(
      {
        error: false,
        message: "Se necesita el video a subir",
      },
      400
    );

  const fileName = `id${body.request}uuid${crypto.randomUUID()}.mp4`;
  fileName.replace("-", "");

  try {
    const buffer = await video.arrayBuffer();
    writeFileSync(`${tempPath}/${fileName}`, buffer);
    const fileBuffer = readFileSync(`${tempPath}/${fileName}`);
    await uploadToS3(fileName, fileBuffer);
    rmSync(`${tempPath}/${fileName}`);
    return context.json({
      error: false,
      message: "Archivo subido correctamente.",
      body: {
        name: video.name,
        awsName: fileName,
      },
    });
  } catch (error: any) {
    return context.json({
      error: true,
      message: "Error al subir el video.",
      body: error,
    });
  }
};

export { uploadVideo };
