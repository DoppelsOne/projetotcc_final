-- CreateTable
CREATE TABLE "Usuário" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "login" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "locale" TEXT NOT NULL,
    "tel" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Postagem" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "subtitle" TEXT NOT NULL,
    "value" REAL NOT NULL,
    "published" BOOLEAN NOT NULL DEFAULT true,
    "image" TEXT NOT NULL,
    "authorId" INTEGER NOT NULL,
    CONSTRAINT "Postagem_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "Usuário" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Planta" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_PlantToPost" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,
    CONSTRAINT "_PlantToPost_A_fkey" FOREIGN KEY ("A") REFERENCES "Planta" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_PlantToPost_B_fkey" FOREIGN KEY ("B") REFERENCES "Postagem" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "_PlantToPost_AB_unique" ON "_PlantToPost"("A", "B");

-- CreateIndex
CREATE INDEX "_PlantToPost_B_index" ON "_PlantToPost"("B");
