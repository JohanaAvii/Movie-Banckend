import { Solicitud_estado } from "@prisma/client";
import prismaClient from "../helpers/prismaClient";

const updateRequest = async (
  requestId: number,
  status: Solicitud_estado,
  observation: string
) => {
  return new Promise(async (resolve, reject) => {
    try {
      await prismaClient.$connect();
    } catch (error) {
      return reject(error);
    }

    try {
      const today = new Date(Date.now());
      const request = await prismaClient.solicitud.update({
        where: {
          id: requestId,
          AND: {
            estado: Solicitud_estado.PENDIENTE,
          },
        },
        data: {
          estado: status,
          fecha_respuesta: today.toISOString(),
          observaciones: observation,
        },
      });

      resolve(request);
    } catch (error) {
      reject(error);
    } finally {
      prismaClient.$disconnect();
    }
  });
};

export { updateRequest };
