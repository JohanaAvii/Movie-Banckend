import { Context, Env } from "hono";
import { getMovieListing } from "../models/getMovieListing";

export const movieListing = async (
  context: Context<Env, "/request/listing", {}>
) => {
  const { size, page } = context.req.query();
  try {
    const movies = await getMovieListing(
      Number.parseInt(page ?? "0"),
      Number.parseInt(size ?? "10")
    );
    return context.json({
      error: false,
      message: "Cartelera",
      body: movies,
    });
  } catch (error) {
    return context.json({
      error: true,
      message: "Error al traer listado de cartelera",
      body: error,
    });
  }
};
