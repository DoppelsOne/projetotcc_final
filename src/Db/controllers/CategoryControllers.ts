import { Request, Response } from "express";
import { prisma } from "../../../prisma/prisma";
import { map } from "lodash";
import { useEffect } from "react";

export async function getCat(req: any, res: any) {
  try {
    const Categories = await prisma.categorias.findMany({
      orderBy: { categoria: "desc" },
      select: { id: true, categoria: true },
    });
    return res.json(Categories);
  } catch (error) {
    error;
  }
}
