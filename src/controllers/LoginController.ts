import { RegisterProps, SignInProps } from "@interfaces/loginProps";
import LoginService from "@services/LoginService";
import { Request, Response } from "express";

class LoginController {
  async register(req: Request, res: Response) {
    const { name, lastName, email, password } = req.body as RegisterProps;
    const response = await LoginService.register({
      name,
      lastName,
      email,
      password,
    });
    return res.status(201).json(response);
  }

  async signIn(req: Request, res: Response) {
    const { email, password } = req.body as SignInProps;
    const response = await LoginService.signIn({ email, password });
    return res.status(200).json(response);
  }

  async getUser(req: Request, res: Response) {
    const id_user = req.id_user;

    const response = await LoginService.getUser(id_user);
    return res.status(200).json(response);
  }
}

export default new LoginController();
