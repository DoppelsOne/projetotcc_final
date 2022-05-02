/*
  Warnings:

  - You are about to drop the column `updatedAt` on the `Postagem` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
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
    CONSTRAINT "Postagem_autorId_fkey" FOREIGN KEY ("autorId") REFERENCES "Usuario" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Postagem_plantaId_fkey" FOREIGN KEY ("plantaId") REFERENCES "Planta" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Postagem" ("autorId", "createdAt", "id", "image", "plantaId", "subtitle", "title", "troca", "value") SELECT "autorId", "createdAt", "id", "image", "plantaId", "subtitle", "title", "troca", "value" FROM "Postagem";
DROP TABLE "Postagem";
ALTER TABLE "new_Postagem" RENAME TO "Postagem";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
