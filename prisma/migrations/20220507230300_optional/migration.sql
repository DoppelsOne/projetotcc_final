-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Usuario" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "email" TEXT NOT NULL,
    "login" TEXT NOT NULL,
    "senha" TEXT NOT NULL,
    "avatar" TEXT,
    "EnderecoId" INTEGER NOT NULL,
    CONSTRAINT "Usuario_EnderecoId_fkey" FOREIGN KEY ("EnderecoId") REFERENCES "U_endereco" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Usuario" ("EnderecoId", "avatar", "email", "id", "login", "senha") SELECT "EnderecoId", "avatar", "email", "id", "login", "senha" FROM "Usuario";
DROP TABLE "Usuario";
ALTER TABLE "new_Usuario" RENAME TO "Usuario";
CREATE UNIQUE INDEX "Usuario_email_key" ON "Usuario"("email");
CREATE UNIQUE INDEX "Usuario_EnderecoId_key" ON "Usuario"("EnderecoId");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
