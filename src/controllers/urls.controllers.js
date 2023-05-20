import { nanoid } from "nanoid";
import {
  createUrlDB,
  getUrlDB,
  getUrlByIdDB,
  getShortUrlDB,
  updateUrlDB,
  getUserDB,
  deleteUrlDB
} from "../repositories/urls.repositories.js";


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


export async function getUrlById(req, res) {
  const { id } = req.params;
  try {
    const { rows, rowCount } = await getUrlByIdDB(id);
    if (!rowCount) {
      return res.status(404);
    }
    res.status(200).send(rows[0]);
  } catch (error) {
    res.status(500).send(error.message);
  }
}


export async function getShortUrl(req, res) {
  const { shortUrl } = req.params;
  try {
    const redirectToUrl = rows[0].url;
    const countViewsUrl = rows[0].views + 1;
    const { rows, rowCount } = await getShortUrlDB(shortUrl);
    if (!rowCount) {
      return res.status(404);
    }
    await updateUrlDB(countViewsUrl, shortUrl);
    res.redirect(redirectToUrl);
  } catch (error) {
    res.status(500).send(error.message);
  }
}


export async function deleteUrl(req, res) {
  const { id } = req.params;
  const { userId } = res.locals.session;
  try {
    const { rowCount } = await getUserDB(userId, id);
    if (!rowCount) {
      return res.status(401);
    }
    const { rowCount: urlExists } = await getUrlByIdDB(id);
    if (!urlExists) {
      return res.status(404);
    }
    await deleteUrlDB(id);
    res.sendStatus(204);
  } catch (error) {
    res.status(500).send(error.message);
  }
}
