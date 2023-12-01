import { z } from "zod";

const requestSchema = z.object({
  nombre: z.string({
    description: "Nombre de la película.",
    required_error: "El nombre de la película es requerido.",
  }),
  sipnosis: z.string({
    description: "Sinopsis de la película",
    required_error: "Se necesita una breve sinopsis de la película.",
  }),
  fecha_distribucion: z
    .string({
      description: "Año de distribución de la película.",
      required_error: "Se necesita el año de distribución",
    })
    .max(4, "Solo debe ser el año"),
  distribuidor: z.string({
    description: "Distribuidora de la película.",
    required_error: "Se necesita la distribuidora.",
  }),
  isan: z.string({
    description:
      "código numérico internacional de identificación de registros audiovisuales.",
    required_error: "Se requiere el ISAN.",
  }),
  url_poster: z
    .string({
      description: "Url de la imagen del poster",
      required_error: "Es necesaria la url del poster.",
    })
    .url("No es una url válida."),
});

export { requestSchema };
