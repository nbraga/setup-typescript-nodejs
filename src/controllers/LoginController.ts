import { RegisterProps, SignInProps } from "@interfaces/loginProps";
import LoginService from "@services/LoginService";
import { Request, Response } from "express";

class LoginController {
  async register(req: Request, res: Response) {
    try {
      const { name, email, password } = req.body as RegisterProps;
      const response = await LoginService.register({
        name,
        email,
        password,
      });

      return res.status(201).json(response);
    } catch (error) {
      console.log("Error Login Controller - register", error.message);
      res.status(500).send(error.message);
    }
  }

  async signIn(req: Request, res: Response) {
    try {
      const { email, password } = req.body as SignInProps;
      const response = await LoginService.signIn({ email, password });

      return res.status(200).json(response);
    } catch (error) {
      console.log("Error Login Controller - signIn", error.message);
      res.status(500).send(error.message);
    }
  }

  async getUser(req: Request, res: Response) {
    try {
      const id_user = req.id_user;
      const response = await LoginService.getUser(id_user);

      return res.status(200).json(response);
    } catch (error) {
      console.log("Error Login Controller - getUser", error.message);
      res.status(500).send(error.message);
    }
  }
}

export default new LoginController();
