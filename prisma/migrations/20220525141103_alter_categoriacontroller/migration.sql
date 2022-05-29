/*
  Warnings:

  - The primary key for the `CategoriaController` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_CategoriaController" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "plantaId" INTEGER,
    "categoryId" INTEGER,
    CONSTRAINT "CategoriaController_plantaId_fkey" FOREIGN KEY ("plantaId") REFERENCES "Planta" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "CategoriaController_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Categorias" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_CategoriaController" ("categoryId", "plantaId") SELECT "categoryId", "plantaId" FROM "CategoriaController";
DROP TABLE "CategoriaController";
ALTER TABLE "new_CategoriaController" RENAME TO "CategoriaController";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
