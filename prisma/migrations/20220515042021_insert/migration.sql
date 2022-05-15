/*
  Warnings:

  - Added the required column `valor` to the `Planta` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Planta" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "descricao" TEXT,
    "valor" REAL NOT NULL
);
INSERT INTO "new_Planta" ("descricao", "id", "name") SELECT "descricao", "id", "name" FROM "Planta";
DROP TABLE "Planta";
ALTER TABLE "new_Planta" RENAME TO "Planta";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
