import { Context, Env } from "hono";
import { uploadToS3 } from "../services/awsService";

const uploadVideo = async (context: Context<Env, "/request/upload", {}>) => {
  // const tempPath = join(import.meta.dir, "../../temp");
  // if (!existsSync(tempPath)) {
  //   mkdirSync(tempPath);
  // }
  const body = await context.req.parseBody();
  const video = body.video as File;
  if (video == null || body.movie == null)
    return context.json(
      {
        error: false,
        message: "Se necesita el video a subir y el id",
      },
      400
    );

  const fileName = `id${body.movie}uuid${crypto.randomUUID()}.mp4`;
  fileName.replace("-", "");

  try {
    const bufferArray = await video.arrayBuffer();
    // writeFileSync(`${tempPath}/${fileName}`, buffer);
    // const fileBuffer = readFileSync(`${tempPath}/${fileName}`);
    await uploadToS3(fileName, Buffer.from(bufferArray));
    // rmSync(`${tempPath}/${fileName}`);
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
