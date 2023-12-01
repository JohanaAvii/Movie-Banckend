import { z } from "zod";

const respondSchema = z.object({
  request: z.string({
    description: "Id de la solicitud.",
    required_error: "Se necesita el id de la solicitud.",
  }),
  status: z.string({
    description: "Nuevo estado de la solicitud",
    required_error: "Se necesita el estado de la solicitud.",
  }),
});

export { respondSchema };
