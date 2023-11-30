import { Pelicula } from "@prisma/client";
import prismaClient from "../helpers/prismaClient";

const createMovie = async (userId: number, movieData: Pelicula) => {
  return new Promise(async (resolve, reject) => {
    try {
      await prismaClient.$connect();
    } catch (error) {
      reject(error);
    }

    try {
      const request = await prismaClient.solicitud.create({
        data: {
          Usuario: {
            connect: await prismaClient.usuario.findUniqueOrThrow({
              where: { id: userId },
            }),
          },
          Pelicula: {
            create: {
              ...movieData,
              Actores: {
                create: [],
              },
            },
          },
        },
      });
      resolve(request);
    } catch (error) {
      reject(error);
    }
  });
};

export { createMovie };
