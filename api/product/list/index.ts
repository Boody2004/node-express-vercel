import { Request, Response } from "express";

export default async (req: Request, res: Response) => {
  const { page, limit } = req.query;
  res.json({ message: "Product api has working", data: [page, limit] });
};
