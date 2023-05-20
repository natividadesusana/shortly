import { db } from "../database/database.connection.js";


export function signUpDB(body, hash) {
  const { name, email } = body;
  return db.query(
    `INSERT INTO users (name, email, password) VALUES ($1, $2, $3)`,
    [name, email, hash]
  );
}


export function getEmailDB(email) {
  return db.query(
    `SELECT * FROM users WHERE email=$1`, 
    [email]
  );
}


export function signInDB(user, token) {
  return db.query(
    `INSERT INTO sessions ("userId", token) VALUES ($1, $2)`,
    [ user[0].id, token ]
  );
}


export function findSession(token) {
  return db.query(
    `SELECT * FROM sessions WHERE token=$1`,
    [token]
  );
}
