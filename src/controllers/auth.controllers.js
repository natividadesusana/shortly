
import { signUpDB } from "../repositories/auth.repositories.js";

export async function signUp(req, res) {
  const { password } = req.body;
  const hash = bcrypt.hashSync(password, 10);
  try {
    await signUpDB(req.body, hash);

    res.sendStatus(201);
  } catch (error) {
    res.status(500).send(error.message);
  }
}

export async function signIn(req, res) {
  res.sendStatus(201);
  try {
  } catch (error) {
    res.status(500).send(error.message);
  }
}
