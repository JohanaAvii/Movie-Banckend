import { Solicitud } from "../generated/client";
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

      // const movies =
      //   (await prismaClient.$queryRaw`select * from Solicitud s join Pelicula P on s.id = P.solicitud_id where estado = 'APROBADA' and aws_url is not null  limit ${offset},${size}`) as Solicitud[];
      const movies = await prismaClient.solicitud.findMany({
        where: {
          estado: "APROBADA",
          AND: {
            Pelicula: {
              aws_url: {
                not: null,
              },
            },
          },
        },
        include: {
          Pelicula: true,
        },
      });
      const count =
        (await prismaClient.$queryRaw`select count(*) as count from Solicitud s join Pelicula P on s.id = P.solicitud_id where estado = 'APROBADA' and aws_url is not null`) as [
          { count: string }
        ];

      resolve({
        count: Number.parseInt(count[0].count),
        next: movies.length == size ? page + 1 : null,
        previous: page > 0 ? page - 1 : null,
        results: movies,
      });
    } catch (error) {
      reject(error);
    }
  });
};
