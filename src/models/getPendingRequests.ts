import prismaClient from "../helpers/prismaClient";

export const getRequests = (page: number, size: number) => {
  return new Promise(async (resolve, reject) => {
    try {
      await prismaClient.$connect();
    } catch (error) {
      return reject(error);
    }
    try {
      const requests =
        await prismaClient.$queryRaw`select * from Solicitud join Pelicula P on Solicitud.id = P.solicitud_id limit ${page}, ${size}`;
      resolve(requests);
    } catch (error) {
      reject(error);
    } finally {
      prismaClient.$disconnect();
    }
  });
};
