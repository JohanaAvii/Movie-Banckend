import prismaClient from "../helpers/prismaClient";

export const getMovieListing = (page: number, size: number) => {
  return new Promise(async (resolve, reject) => {
    try {
      await prismaClient.$connect();
    } catch (error) {
      return reject(error);
    }

    try {
      const offset = size * page;
      const movies =
        await prismaClient.$queryRaw`select * from Solicitud s join Pelicula P on s.id = P.solicitud_id where estado = 'APROBADA' limit ${offset},${size}`;
      resolve(movies);
    } catch (error) {
      reject(error);
    }
  });
};
