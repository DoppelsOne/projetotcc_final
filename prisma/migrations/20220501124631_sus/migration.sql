/*
  Warnings:

  - You are about to drop the `Usuário` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_PlantToPost` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the column `authorId` on the `Postagem` table. All the data in the column will be lost.
  - You are about to drop the column `published` on the `Postagem` table. All the data in the column will be lost.
  - Added the required column `autorId` to the `Postagem` table without a default value. This is not possible if the table is not empty.
  - Added the required column `plantaId` to the `Postagem` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Postagem` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "_PlantToPost_B_index";

-- DropIndex
DROP INDEX "_PlantToPost_AB_unique";

-- AlterTable
ALTER TABLE "Planta" ADD COLUMN "descricao" TEXT;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Usuário";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "_PlantToPost";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "Usuario" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "login" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "bairro" TEXT NOT NULL,
    "endereco" TEXT NOT NULL,
    "numero" TEXT NOT NULL,
    "cep" TEXT NOT NULL,
    "tel" TEXT NOT NULL
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Postagem" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "title" TEXT,
    "subtitle" TEXT,
    "value" REAL NOT NULL,
    "troca" BOOLEAN NOT NULL DEFAULT true,
    "image" TEXT,
    "autorId" INTEGER NOT NULL,
    "plantaId" INTEGER NOT NULL,
    CONSTRAINT "Postagem_autorId_fkey" FOREIGN KEY ("autorId") REFERENCES "Usuario" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Postagem_plantaId_fkey" FOREIGN KEY ("plantaId") REFERENCES "Planta" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Postagem" ("id", "image", "subtitle", "title", "value") SELECT "id", "image", "subtitle", "title", "value" FROM "Postagem";
DROP TABLE "Postagem";
ALTER TABLE "new_Postagem" RENAME TO "Postagem";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
