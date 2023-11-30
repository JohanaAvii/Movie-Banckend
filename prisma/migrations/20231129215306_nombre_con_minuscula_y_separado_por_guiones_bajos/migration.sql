-- CreateTable
CREATE TABLE `Actores` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `url_imagen` VARCHAR(191) NOT NULL,
    `url_biografia` VARCHAR(191) NOT NULL,
    `pelicula_id` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Pelicula` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(50) NOT NULL,
    `sipnosis` VARCHAR(191) NOT NULL,
    `fecha_distribucion` DATETIME(3) NOT NULL,
    `promocionar` BOOLEAN NULL DEFAULT true,
    `duracion` DOUBLE NOT NULL,
    `distribuidor` VARCHAR(20) NOT NULL,
    `isan` VARCHAR(96) NOT NULL,
    `url_poster` VARCHAR(191) NOT NULL,
    `aws_url` VARCHAR(191) NULL,
    `aws_trailer` VARCHAR(191) NULL,
    `usuario_id` INTEGER NOT NULL,
    `solicitud_id` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Solicitud` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `estado` ENUM('PENDIENTE', 'RECHAZADA', 'APROBADA') NOT NULL,
    `fecha_envio` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `fecha_respuesta` DATETIME(3) NULL,
    `observaciones` VARCHAR(191) NULL,
    `usuario_id` INTEGER NOT NULL,

    INDEX `Solicitud_usuario_id_fkey`(`usuario_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Usuario` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `correo` VARCHAR(50) NOT NULL,
    `genero` CHAR(1) NOT NULL,
    `telefono` VARCHAR(10) NOT NULL,
    `rol` ENUM('USUARIO', 'ADMIN', 'PRODUCTOR') NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `primer_apellido` VARCHAR(20) NOT NULL,
    `primer_nombre` VARCHAR(20) NOT NULL,
    `segundo_apellido` VARCHAR(20) NULL,
    `segundo_nombre` VARCHAR(20) NULL,

    UNIQUE INDEX `Usuario_correo_key`(`correo`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_ActoresToPelicula` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_ActoresToPelicula_AB_unique`(`A`, `B`),
    INDEX `_ActoresToPelicula_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Pelicula` ADD CONSTRAINT `Pelicula_solicitud_id_fkey` FOREIGN KEY (`solicitud_id`) REFERENCES `Solicitud`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Solicitud` ADD CONSTRAINT `Solicitud_usuario_id_fkey` FOREIGN KEY (`usuario_id`) REFERENCES `Usuario`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_ActoresToPelicula` ADD CONSTRAINT `_ActoresToPelicula_A_fkey` FOREIGN KEY (`A`) REFERENCES `Actores`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_ActoresToPelicula` ADD CONSTRAINT `_ActoresToPelicula_B_fkey` FOREIGN KEY (`B`) REFERENCES `Pelicula`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
