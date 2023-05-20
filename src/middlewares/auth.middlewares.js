import bcrypt from "bcrypt";
import { getEmailDB } from "../repositories/auth.repositories.js";


export async function validateSignUp(req, res, next) {
  const { email } = req.body;
  try {
    const { rowCount: userExists } = await getEmailDB(email);
    if (userExists) {
      return res.status(409);
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
      return res.status(401);
    }
    const isPasswordValid = bcrypt.compareSync(password, user[0].password);
    if (!isPasswordValid) {
      return res.status(401);
    }
    res.locals.user = user;
    next();
  } catch (error) {
    res.status(500).send(error.message);
  }
}
