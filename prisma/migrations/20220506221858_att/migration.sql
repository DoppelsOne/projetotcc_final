/*
  Warnings:

  - You are about to drop the column `numero` on the `U_endereco` table. All the data in the column will be lost.
  - You are about to drop the column `nome` on the `Usuario` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_U_endereco" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "bairro" TEXT,
    "endereco" TEXT,
    "cidade" TEXT,
    "uf" TEXT,
    "cep" TEXT NOT NULL,
    "tel" TEXT NOT NULL,
    "usuarioId" INTEGER NOT NULL,
    CONSTRAINT "U_endereco_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuario" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_U_endereco" ("bairro", "cep", "endereco", "id", "tel", "usuarioId") SELECT "bairro", "cep", "endereco", "id", "tel", "usuarioId" FROM "U_endereco";
DROP TABLE "U_endereco";
ALTER TABLE "new_U_endereco" RENAME TO "U_endereco";
CREATE UNIQUE INDEX "U_endereco_usuarioId_key" ON "U_endereco"("usuarioId");
CREATE TABLE "new_Usuario" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "email" TEXT NOT NULL,
    "login" TEXT NOT NULL,
    "senha" TEXT NOT NULL
);
INSERT INTO "new_Usuario" ("email", "id", "login", "senha") SELECT "email", "id", "login", "senha" FROM "Usuario";
DROP TABLE "Usuario";
ALTER TABLE "new_Usuario" RENAME TO "Usuario";
CREATE UNIQUE INDEX "Usuario_email_key" ON "Usuario"("email");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
