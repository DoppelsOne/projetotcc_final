/*
  Warnings:

  - You are about to drop the column `usuarioId` on the `U_endereco` table. All the data in the column will be lost.
  - Added the required column `EnderecoId` to the `Usuario` table without a default value. This is not possible if the table is not empty.
  - Added the required column `avatar` to the `Usuario` table without a default value. This is not possible if the table is not empty.

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
    "tel" TEXT NOT NULL
);
INSERT INTO "new_U_endereco" ("bairro", "cep", "cidade", "endereco", "id", "tel", "uf") SELECT "bairro", "cep", "cidade", "endereco", "id", "tel", "uf" FROM "U_endereco";
DROP TABLE "U_endereco";
ALTER TABLE "new_U_endereco" RENAME TO "U_endereco";
CREATE TABLE "new_Usuario" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "email" TEXT NOT NULL,
    "login" TEXT NOT NULL,
    "senha" TEXT NOT NULL,
    "avatar" TEXT NOT NULL,
    "EnderecoId" INTEGER NOT NULL,
    CONSTRAINT "Usuario_EnderecoId_fkey" FOREIGN KEY ("EnderecoId") REFERENCES "U_endereco" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Usuario" ("email", "id", "login", "senha") SELECT "email", "id", "login", "senha" FROM "Usuario";
DROP TABLE "Usuario";
ALTER TABLE "new_Usuario" RENAME TO "Usuario";
CREATE UNIQUE INDEX "Usuario_email_key" ON "Usuario"("email");
CREATE UNIQUE INDEX "Usuario_EnderecoId_key" ON "Usuario"("EnderecoId");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
