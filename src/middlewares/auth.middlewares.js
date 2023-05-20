import { getEmail } from "../repositories/auth.repositories.js";

export async function validateSignUp(req, res, next) {
  const { email } = req.body;

  try {
    const { rowCount: userExists } = await getEmail(email);
    if (userExists) return res.status(409);

    next();
  } catch (error) {
    res.status(500).send(error.message);
  }
}

export async function validateSignIn(req, res, next) {
  try {
  } catch (error) {
    res.status(500).send(error.message);
  }
}
