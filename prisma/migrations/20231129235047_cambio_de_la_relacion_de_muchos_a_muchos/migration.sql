/*
  Warnings:

  - You are about to drop the `_ActoresToPelicula` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `_ActoresToPelicula` DROP FOREIGN KEY `_ActoresToPelicula_A_fkey`;

-- DropForeignKey
ALTER TABLE `_ActoresToPelicula` DROP FOREIGN KEY `_ActoresToPelicula_B_fkey`;

-- DropTable
DROP TABLE `_ActoresToPelicula`;

-- CreateTable
CREATE TABLE `ActoresOnPeliculas` (
    `actor_id` INTEGER NOT NULL,
    `pelicula_id` INTEGER NOT NULL,

    PRIMARY KEY (`actor_id`, `pelicula_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `ActoresOnPeliculas` ADD CONSTRAINT `ActoresOnPeliculas_actor_id_fkey` FOREIGN KEY (`actor_id`) REFERENCES `Actores`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ActoresOnPeliculas` ADD CONSTRAINT `ActoresOnPeliculas_pelicula_id_fkey` FOREIGN KEY (`pelicula_id`) REFERENCES `Pelicula`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
