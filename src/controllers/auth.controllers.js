
import bcrypt from "bcrypt";
import { v4 as uuid } from "uuid";
import { signUpDB, signInDB } from "../repositories/auth.repositories.js";

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
  const { user } = res.locals;
  try {
    const token = uuid();
    await signInDB(user, token);
    res.status(200).send({ token });
  } catch (error) {
    res.status(500).send(error.message);
  }
}
