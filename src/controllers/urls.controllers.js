export async function createUrl(req, res) {

  try {

    res.status(201);
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
