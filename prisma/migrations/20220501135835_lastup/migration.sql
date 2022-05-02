/*
  Warnings:

  - You are about to drop the column `bairro` on the `Usuario` table. All the data in the column will be lost.
  - You are about to drop the column `cep` on the `Usuario` table. All the data in the column will be lost.
  - You are about to drop the column `endereco` on the `Usuario` table. All the data in the column will be lost.
  - You are about to drop the column `numero` on the `Usuario` table. All the data in the column will be lost.
  - You are about to drop the column `tel` on the `Usuario` table. All the data in the column will be lost.
  - Added the required column `imagemId` to the `Postagem` table without a default value. This is not possible if the table is not empty.

*/
-- CreateTable
CREATE TABLE "U_endereco" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "bairro" TEXT NOT NULL,
    "endereco" TEXT NOT NULL,
    "numero" TEXT NOT NULL,
    "cep" TEXT NOT NULL,
    "tel" TEXT NOT NULL,
    "usuarioId" INTEGER NOT NULL,
    CONSTRAINT "U_endereco_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuario" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Imagem" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "uri" TEXT NOT NULL,
    "postagemId" INTEGER NOT NULL,
    CONSTRAINT "Imagem_postagemId_fkey" FOREIGN KEY ("postagemId") REFERENCES "Postagem" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Usuario" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT,
    "email" TEXT NOT NULL,
    "login" TEXT NOT NULL,
    "password" TEXT NOT NULL
);
INSERT INTO "new_Usuario" ("email", "id", "login", "name", "password") SELECT "email", "id", "login", "name", "password" FROM "Usuario";
DROP TABLE "Usuario";
ALTER TABLE "new_Usuario" RENAME TO "Usuario";
CREATE UNIQUE INDEX "Usuario_email_key" ON "Usuario"("email");
CREATE TABLE "new_Postagem" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "title" TEXT,
    "subtitle" TEXT,
    "value" REAL NOT NULL,
    "troca" BOOLEAN NOT NULL DEFAULT true,
    "image" TEXT,
    "autorId" INTEGER NOT NULL,
    "plantaId" INTEGER NOT NULL,
    "imagemId" INTEGER NOT NULL,
    CONSTRAINT "Postagem_plantaId_fkey" FOREIGN KEY ("plantaId") REFERENCES "Planta" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Postagem_autorId_fkey" FOREIGN KEY ("autorId") REFERENCES "Usuario" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Postagem" ("autorId", "createdAt", "id", "image", "plantaId", "subtitle", "title", "troca", "value") SELECT "autorId", "createdAt", "id", "image", "plantaId", "subtitle", "title", "troca", "value" FROM "Postagem";
DROP TABLE "Postagem";
ALTER TABLE "new_Postagem" RENAME TO "Postagem";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

-- CreateIndex
CREATE UNIQUE INDEX "U_endereco_usuarioId_key" ON "U_endereco"("usuarioId");
