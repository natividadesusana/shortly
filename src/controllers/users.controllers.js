import { getUserDB } from "../repositories/users.repositories.js";


export default async function getUsers(req, res) {
  const { userId } = res.locals.session;
  try {
    const { rows: userData } = await getUserDB(userId);
    res.status(200).send(userData[0]);
  } catch (error) {
    res.status(500).send(error.message);
  }
}
