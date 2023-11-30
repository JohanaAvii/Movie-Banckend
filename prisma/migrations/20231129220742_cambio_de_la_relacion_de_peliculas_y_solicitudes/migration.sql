/*
  Warnings:

  - A unique constraint covering the columns `[solicitud_id]` on the table `Pelicula` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE `Solicitud` MODIFY `estado` ENUM('PENDIENTE', 'RECHAZADA', 'APROBADA') NULL DEFAULT 'PENDIENTE',
    MODIFY `fecha_envio` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3);

-- CreateIndex
CREATE UNIQUE INDEX `Pelicula_solicitud_id_key` ON `Pelicula`(`solicitud_id`);
