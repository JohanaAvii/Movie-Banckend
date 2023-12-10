import { Context, Env } from "hono";
import { getOneMovie } from "../models/getOneMovie";

export const getMovie = async (
  context: Context<Env, "/request/movie/:id", {}>
) => {
  const { id } = context.req.param();
  try {
    const movie = await getOneMovie(Number.parseInt(id));
    return context.json(
      {
        error: false,
        message:
          movie == null ? "Película no encontrada" : "Película encontrada.",
        body: movie,
      },
      movie == null ? 204 : 200
    );
  } catch (error) {
    return context.json({
      error: true,
      message: "error al buscar la película",
      body: error,
    });
  }
};
