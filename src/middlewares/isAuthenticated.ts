import { NextFunction, Request, Response } from "express";

import { verify } from "jsonwebtoken";

interface Payload {
  sub: string;
}

export const isAuthenticated = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).send({ auth: false, message: "Token inválido" });
  }

  try {
    const { sub } = verify(token, process.env.JTW_SECRET) as Payload;

    req.id_user = sub;

    return next();
  } catch (err) {
    return res.status(401).send({ auth: false, message: "Token inválido" });
  }
};
