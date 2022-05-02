-- CreateTable
CREATE TABLE "Categorias" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "categoria" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "CategoriaController" (
    "plantaId" INTEGER NOT NULL,
    "categoryId" INTEGER NOT NULL,

    PRIMARY KEY ("plantaId", "categoryId"),
    CONSTRAINT "CategoriaController_plantaId_fkey" FOREIGN KEY ("plantaId") REFERENCES "Planta" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "CategoriaController_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Categorias" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Categorias_categoria_key" ON "Categorias"("categoria");
