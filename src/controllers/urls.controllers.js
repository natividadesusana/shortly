import { nanoid } from "nanoid";
import { createUrlDB, getUrlDB } from "../repositories/urls.repositories.js";

export async function createUrl(req, res) {
  const { url } = req.body;
  const { userId } = res.locals.session;
  const shortUrl = nanoid();

  try {
      await createUrlDB(url, userId, shortUrl);
      const createdUrl = await getUrlDB(shortUrl);
      const urlId = createdUrl.rows[0].id;
      res.status(201).send({ urlId, shortUrl });
  } catch (error) {
    res.status(500).send(error.message);
  }
}

export async function getUrl(req, res) {

  try {

    res.status(201);
  } catch (error) {
    res.status(500).send(error.message);
  }
}

export async function getShortUrl(req, res) {

  try {

    res.status(201);
  } catch (error) {
    res.status(500).send(error.message);
  }
}

export async function deleteUrl(req, res) {

  try {
    
    res.status(201);
  } catch (error) {
    res.status(500).send(error.message);
  }
}
