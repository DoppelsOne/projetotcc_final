import { Request, Response } from "express";
import { prisma } from "../../../prisma/prisma";

export async function getPlant(req: any, res: any) {
  try {
    const plantMany = await prisma.planta.findMany({
        include:{
            Categoria:{},
            Postagem:{}
        }
    });
    console.log(plantMany)
    res.json(plantMany)
  } catch (error) {}
}
