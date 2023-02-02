import { compare, hash } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { RegisterProps, SignInProps } from "@interfaces/loginProps";

class LoginService {
  async register({ name, lastName, email, password }: RegisterProps) {
    if (!email) {
      throw new Error("Email obrigatório");
    }

    const passwordHash = await hash(password, 8);

    const user = {
      email,
      passwordHash,
    };

    return { user: user, message: "Usuário cadastrado com sucesso!" };
  }

  async signIn({ email, password }: SignInProps) {
    /*  const token = sign(
      {
        name: user.name,
        email: user.email,
      },
      process.env.JTW_SECRET,
      {
        subject: user.id,
        expiresIn: "1d",
      }
    ); */

    return true;
  }

  async getUser(user_id: string) {
    return true;
  }
}

export default new LoginService();
