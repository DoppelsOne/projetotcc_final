/*
  Warnings:

  - A unique constraint covering the columns `[cep]` on the table `U_endereco` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "Usuario_EnderecoId_key";

-- CreateIndex
CREATE UNIQUE INDEX "U_endereco_cep_key" ON "U_endereco"("cep");
