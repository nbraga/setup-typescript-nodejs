import jwt from "jsonwebtoken";

export const createToken = (email: string) => {
  return jwt.sign({ email }, process.env.JWT_SECRET, {
    subject: email,
    expiresIn: "1d",
  });
};
