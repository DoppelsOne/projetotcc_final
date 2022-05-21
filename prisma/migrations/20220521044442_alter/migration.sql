/*
  Warnings:

  - You are about to drop the `Imagem` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the column `imagemId` on the `Postagem` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[name]` on the table `Planta` will be added. If there are existing duplicate values, this will fail.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Imagem";
PRAGMA foreign_keys=on;

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Postagem" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "title" TEXT,
    "subtitle" TEXT,
    "troca" BOOLEAN NOT NULL DEFAULT true,
    "image" TEXT,
    "valor" REAL NOT NULL,
    "autorId" INTEGER NOT NULL,
    "plantaId" INTEGER NOT NULL,
    CONSTRAINT "Postagem_plantaId_fkey" FOREIGN KEY ("plantaId") REFERENCES "Planta" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Postagem_autorId_fkey" FOREIGN KEY ("autorId") REFERENCES "Usuario" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Postagem" ("autorId", "createdAt", "id", "image", "plantaId", "subtitle", "title", "troca", "valor") SELECT "autorId", "createdAt", "id", "image", "plantaId", "subtitle", "title", "troca", "valor" FROM "Postagem";
DROP TABLE "Postagem";
ALTER TABLE "new_Postagem" RENAME TO "Postagem";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

-- CreateIndex
CREATE UNIQUE INDEX "Planta_name_key" ON "Planta"("name");
