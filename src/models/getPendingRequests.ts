import { Solicitud } from "../generated/client";
import prismaClient from "../helpers/prismaClient";

export const getRequests = (page: number, size: number) => {
  return new Promise(async (resolve, reject) => {
    try {
      await prismaClient.$connect();
    } catch (error) {
      return reject(error);
    }
    try {
      const offset = page * size;
      const requests =
        (await prismaClient.$queryRaw`select * from Solicitud join Pelicula P on Solicitud.id = P.solicitud_id limit ${offset}, ${size}`) as Solicitud[];
      const count =
        (await prismaClient.$queryRaw`select count(*) as count from Solicitud join Pelicula P on Solicitud.id = P.solicitud_id `) as [
          { count: string }
        ];

      resolve({
        count: Number.parseInt(count[0].count),
        next: requests.length == size ? page + 1 : null,
        previous: page > 0 ? page - 1 : null,
        results: requests,
      });
    } catch (error) {
      reject(error);
    } finally {
      prismaClient.$disconnect();
    }
  });
};
