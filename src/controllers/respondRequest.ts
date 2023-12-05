import { Context, Env } from "hono";
import { updateRequest } from "../models";
import { Solicitud_estado } from "../generated/client";

const respondRequestController = async (
  context: Context<Env, "/movie/request/response", {}>
) => {
  const body = await context.req.json();

  try {
    const request = await updateRequest(
      Number.parseInt(body.request as string),
      body.status as Solicitud_estado,
      body.observation as string
    );
    return context.json({
      error: false,
      message: "",
      body: request,
    });
  } catch (error) {
    return context.json(
      {
        error: true,
        message: "Error al responder la solicitud.",
        body: error,
      },
      500
    );
  }
};

export { respondRequestController };
