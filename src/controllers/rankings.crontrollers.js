export default async function getRanking(req, res) {

  try {
    
    res.status(200);
  } catch (error) {
    res.status(500).send(error.message);
  }
}
