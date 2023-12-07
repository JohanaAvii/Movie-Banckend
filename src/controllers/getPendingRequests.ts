import { Context, Env } from "hono";
import { getRequests } from "../models/getPendingRequests";

const getPendingRequests = async (context: Context<Env, "/request", {}>) => {
  try {
    const { size, page } = context.req.query();
    const request = await getRequests(
      Number.parseInt(page) ?? 0,
      Number.parseInt(size) ?? 10
    );

    return context.json({
      error: false,
      message: "Listado de solicitudes.",
      body: request,
    });
  } catch (error) {
    return context.json({
      error: true,
      message: "Error al consultar las solicitudes.",
      body: error,
    });
  }
};

export { getPendingRequests };
