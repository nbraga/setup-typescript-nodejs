class LoginModel {
  async checkLoginEmail(email: string) {
    try {
      return true;
    } catch (err) {
      throw new Error(err.message);
    }
  }

  async sendEmailPassword(email: string) {
    try {
      return true;
    } catch (err) {
      throw new Error(err.message);
    }
  }
}

export default new LoginModel();
