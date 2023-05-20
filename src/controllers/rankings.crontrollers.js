import { getRankingDB } from "../repositories/rankings.repositories.js";


export default async function getRanking(req, res) {
  try {
    const { rows: ranking } = await getRankingDB();
    res.status(200).send(ranking);
  } catch (error) {
    res.status(500).send(error.message);
  }
}
