import { compare, hash } from "bcryptjs";
import { RegisterProps, SignInProps } from "@interfaces/loginProps";
import { createToken } from "src/utils/CreateToken";

class LoginService {
  async register({ name, email, password }: RegisterProps) {
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
    const token = createToken(email);

    const passwordMatch = await compare(password, password);

    if (!passwordMatch) {
      throw new Error("Usuário ou senha incorreto!");
    }

    return true;
  }

  async getUser(user_id: string) {
    return true;
  }
}

export default new LoginService();
