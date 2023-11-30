import { Context, Env } from "hono";
import { linkAWSVideo } from "../models/movie";

const linkMovie = async (context: Context<Env, "/lambda/link-movie", {}>) => {
  try {
    const body = await context.req.json();
    const awsPath = body["s3-path"] as string;
    const pathSplit = awsPath.split("/");
    const fileName = pathSplit[pathSplit.length - 1];
    const id = fileName.substring(2, fileName.indexOf("uuid"));
    linkAWSVideo(`${awsPath}.m3u8`, Number.parseInt(id));
    console.info(
      "Url agregada al la película: ",
      fileName,
      ". Solicitud: ",
      id
    );
  } catch (error) {
    console.error(error);
  }
  return context.text("");
};

export { linkMovie };
