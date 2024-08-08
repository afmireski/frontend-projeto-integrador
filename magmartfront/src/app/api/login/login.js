import { getIronSession } from "iron-session";
import { sessionOptions } from "../../lib/session";
import { AuthService } from "../../services/auth-service"; // Ajuste o caminho conforme necessário

export default async function handler(req, res) {
  const session = await getIronSession(req, res, sessionOptions);

  if (req.method === "POST") {
    const { email, password } = req.body;

    try {
      const authService = new AuthService(); // Instancie seu AuthService
      const result = await authService.login(email, password);

      session.user = { accessToken: result.accessToken }; // Armazene os dados na sessão
      await session.save();

      res.status(200).json(result);
    } catch (error) {
      res.status(401).json({ message: "Invalid credentials" });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
