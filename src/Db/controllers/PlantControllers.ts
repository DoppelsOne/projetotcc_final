import { Request, Response } from "express";
import { prisma } from "../../../prisma/prisma";

export async function getPlants(req: any, res: any) {
  try {
    const plantMany = await prisma.planta.findMany({
      include: {
        Categoria: {},
        // Postagem: {},
      },
    });
    console.log(plantMany);
    res.json(plantMany);
  } catch (error) {}
}

export async function getPlant(req: any, res: any) {
  const { id } = req.params;
  try {
    const plant = await prisma.planta.findFirst({
      where: {
        id: Number(id),
      },
      include: {
        Categoria: {include:{category:{}}},
      },
    });
    res.json(plant);
  } catch (error) {console.log(error)}
}
