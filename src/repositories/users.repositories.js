import { db } from "../database/database.connection.js";

export function getUserDB(userId) {
  return db.query(
    `SELECT us.id, us.name, SUM(ur.visit) AS "visitCount",
  JSON_AGG(
      JSON_BUILD_OBJECT(
          'id', ur.id,
          'shortUrl', ur."shortUrl",
          'url', ur.url,
          'visitCount', ur.visit
      )) AS "shortenedUrls"
      FROM users us
      JOIN urls ur ON ur."userId" = us.id
      WHERE us.id =$1
      GROUP BY us.id;`,
    [userId]
  );
}
