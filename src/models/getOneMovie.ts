import prismaClient from "../helpers/prismaClient";

export const getOneMovie = (id: number) => {
  return new Promise(async (resolve, reject) => {
    try {
      await prismaClient.$connect();
    } catch (error) {
      return reject(error);
    }

    try {
      const movie = await prismaClient.pelicula.findUnique({
        where: {
          id,
        },
      });
      resolve(movie);
    } catch (error) {
      reject(error);
    }
  });
};
