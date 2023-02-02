import jwt from "jsonwebtoken";

export const createToken = ({ id_user, email }) => {
  return jwt.sign({ id_user, email }, process.env.JWT_SECRET, {
    subject: id_user,
    expiresIn: "1d",
  });
};
