import bcrypt from "bcrypt";
import { getEmailDB } from "../repositories/auth.repositories.js";


export async function validateSignUp(req, res, next) {
  const { email } = req.body;
  try {
    const { rowCount: userExists } = await getEmailDB(email);
    if (userExists) {
      return res.sendStatus(409);
    }
    next();
  } catch (error) {
    res.status(500).send(error.message);
  }
}


export async function validateSignIn(req, res, next) {
  const { email, password } = req.body;
  try {
    const { rows: user, rowCount: userExists } = await getEmailDB(email);
    if (!userExists) {
      return res.sendStatus(401);
    }
    const isPasswordValid = bcrypt.compareSync(password, user[0].password);
    if (!isPasswordValid) {
      return res.sendStatus(401);
    }
    res.locals.user = user;
    next();
  } catch (error) {
    res.status(500).send(error.message);
  }
}
