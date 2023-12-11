import { Context, Env } from "hono";
import { getRequests } from "../models/getPendingRequests";
import { decode } from "hono/jwt";

const getPendingRequests = async (context: Context<Env, "/request", {}>) => {
  try {
    const { size, page } = context.req.query();
    const token = context.req.header().authorization.split(" ")[1];
    const data = decode(token);

    const request = await getRequests(
      Number.parseInt(page) ?? 0,
      Number.parseInt(size) ?? 10,
      data.payload.rol,
      Number.parseInt(data.payload.id)
    );

    return context.json({
      error: false,
      message: "Listado de solicitudes.",
      body: request,
    });
  } catch (error) {
    console.log(error);

    return context.json({
      error: true,
      message: "Error al consultar las solicitudes.",
      body: error,
    });
  }
};

export { getPendingRequests };
