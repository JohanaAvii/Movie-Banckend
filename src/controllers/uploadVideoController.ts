import { Context, Env } from "hono";
import { uploadToS3 } from "../services/awsService";
const uploadVideo = async (context: Context<Env, "/request/upload", {}>) => {
  const body = await context.req.parseBody();

  if (body.video == null || body.movie == null)
    return context.json(
      {
        error: false,
        message: "Se necesita el video a subir y el id",
      },
      400
    );

  const video = body.video as File;
  // const video = body.video.file as Uint8Array;
  const fileName = `id${body.movie}uuid${crypto.randomUUID()}.mp4`;
  fileName.replace("-", "");

  try {
    const arrayBuffer = await video.arrayBuffer();
    // await uploadToS3(fileName, Buffer.from(video));
    await uploadToS3(fileName, Buffer.from(arrayBuffer));
    return context.json({
      error: false,
      message: "Archivo subido correctamente.",
      body: {
        // name: body.video.fileName,
        name: video.name,
        awsName: fileName,
      },
    });
  } catch (error: any) {
    console.log(error);

    return context.json({
      error: true,
      message: "Error al subir el video.",
      body: error,
    });
  }
};

export { uploadVideo };
