import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

export const checkToken = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization;

  if (!token)
    return res.status(401).send({ auth: false, message: "Token inválido" });

  jwt.verify(token, process.env.SECRET, function (err, decoded) {
    if (err)
      return res.status(401).send({ auth: false, message: "Token inválido" });

    next();
  });
};
