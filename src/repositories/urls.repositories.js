import { db } from "../database/database.connection.js";

export function createUrlDB(url, userId, shortUrl) {
  return db.query(
    `INSERT INTO urls (url, "userId", "shortUrl") VALUES ($1, $2, $3)`,
    [url, userId, shortUrl]
  );
}

export function getUrlDB(shortUrl) {
  return db.query(
    `SELECT * FROM urls WHERE "shortUrl"=$1`, 
    [shortUrl]
  );
}

export function getUrlByIdDB(id) {
  return db.query(
    `SELECT id, "shortUrl", url FROM urls WHERE id=$1`, 
    [id]
  );
}

export function getShortUrlDB(shortUrl){
  return db.query(
    `SELECT * FROM urls WHERE "shortUrl"=$1`, 
    [shortUrl]
  );
}

export function updateUrlDB(views, shortUrl){
  return db.query(
    `UPDATE urls views SET views=$1 WHERE "shortUrl"=$2`, 
    [views, shortUrl]
  );
}

export function getUserDB(idUser, id){
  return db.query(
    `SELECT * FROM urls WHERE "idUser"=$1 AND id=$2`, 
    [idUser, id]
  );
}

export function deleteUrlDB(id){
  return db.query(
    `DELETE FROM urls WHERE id=$1`, 
    [id]
  );
}