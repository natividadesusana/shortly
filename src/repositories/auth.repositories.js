import { db } from "../database/database.connection.js";

export function signUpDB(body, hash) {
  const { name, email } = body;
  return db.query(
    `INSERT INTO users (name, email, password) VALUES ($1, $2, $3)`,
    [name, email, hash]
  );
}

export function getEmail(email) {
  return db.query(
    `SELECT * FROM users WHERE email=$1`,
    [email]
  );
}
