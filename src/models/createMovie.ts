import { Pelicula } from "../generated/client";
import prismaClient from "../helpers/prismaClient";

export const createMovie = async (userId: number, movieData: Pelicula) => {
  return new Promise(async (resolve, reject) => {
    try {
      await prismaClient.$connect();
    } catch (error) {
      return reject(error);
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
    } finally {
      prismaClient.$disconnect();
    }
  });
};
