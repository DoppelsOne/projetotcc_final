/*
  Warnings:

  - You are about to drop the column `valor` on the `Planta` table. All the data in the column will be lost.
  - Added the required column `valor` to the `Postagem` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Planta" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "descricao" TEXT
);
INSERT INTO "new_Planta" ("descricao", "id", "name") SELECT "descricao", "id", "name" FROM "Planta";
DROP TABLE "Planta";
ALTER TABLE "new_Planta" RENAME TO "Planta";
CREATE TABLE "new_Postagem" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "title" TEXT,
    "subtitle" TEXT,
    "value" REAL NOT NULL,
    "troca" BOOLEAN NOT NULL DEFAULT true,
    "image" TEXT,
    "valor" REAL NOT NULL,
    "autorId" INTEGER NOT NULL,
    "plantaId" INTEGER NOT NULL,
    "imagemId" INTEGER NOT NULL,
    CONSTRAINT "Postagem_plantaId_fkey" FOREIGN KEY ("plantaId") REFERENCES "Planta" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Postagem_autorId_fkey" FOREIGN KEY ("autorId") REFERENCES "Usuario" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Postagem" ("autorId", "createdAt", "id", "image", "imagemId", "plantaId", "subtitle", "title", "troca", "value") SELECT "autorId", "createdAt", "id", "image", "imagemId", "plantaId", "subtitle", "title", "troca", "value" FROM "Postagem";
DROP TABLE "Postagem";
ALTER TABLE "new_Postagem" RENAME TO "Postagem";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
