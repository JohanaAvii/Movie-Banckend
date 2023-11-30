import { Context, Env } from "hono";
import { createMovie } from "../models/movie";
import { decode } from "hono/jwt";

const createRequest = async (context: Context<Env, "/movie/request", {}>) => {
  const body = await context.req.json();
  const token = context.req.header().authorization.split(" ")[1];
  const data = decode(token);

  try {
    const movie = await createMovie(data.payload.id, body);
    return context.json(
      {
        error: false,
        message: "",
        body: movie,
      },
      201
    );
  } catch (error) {
    return context.json(
      {
        error: true,
        message: "Error al crear la solicitud.",
        body: error,
      },
      201
    );
  }
};

export { createRequest };
