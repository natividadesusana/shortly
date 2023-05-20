import { db } from "../database/database.connection.js";

export function createUrlDB(url, userId, shortUrl) {
  return db.query(
    `INSERT INTO urls (url, "userId", "shortUrl") VALUES ($1, $2, $3)`,
    [url, userId, shortUrl]
  );
}

export function getUrlDB(shortUrl) {
  return db.query(`SELECT * FROM urls WHERE "shortUrl"=$1`, 
  [shortUrl]
);
}
