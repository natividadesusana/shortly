export default async function getUsers(req, res) {

    try {
      
      res.status(201);
    } catch (error) {
      res.status(500).send(error.message);
    }
  }