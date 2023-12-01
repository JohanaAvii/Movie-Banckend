import prismaClient from "../helpers/prismaClient";

export const linkAWSVideo = async (awsUrl: string, movieId: number) => {
  return new Promise(async (resolve, reject) => {
    try {
      await prismaClient.$connect();
    } catch (error) {
      return reject(error);
    }

    try {
      const movie = await prismaClient.pelicula.update({
        where: {
          id: movieId,
        },
        data: {
          aws_url: awsUrl,
        },
      });

      resolve(movie);
    } catch (error) {
      reject(error);
    }
  });
};
