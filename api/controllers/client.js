const { Client } = require("../models");
const { validatorRegisterClient } = require("../validations/client");

//todos los parametros se pasan por body (postman, post x-www-form)
const registerClient = async (req, res) => {
  const { email, password, name, surname, dir } = req.body;

  let emailTrim = email.trim().toLowerCase();

  try {
    const newClient = new Client({
      email: emailTrim,
      password,
      name,
      surname,
      dir,
    });
    await newClient.save();
    res.status(200).json({ newClient });
  } catch (err) {
    res.status(500).json({ err });
  }
};

// agrega 10 datos a la tabla
//populate();
async function populate() {
  await Client.deleteMany({});

  for (let i = 0; i < 10; i++) {
    const newClient = new Client({
      email: i + "a@hotmail.com",
      password: i + "passwd",
      name: i + "nombre",
      surname: i + "apellido",
      dir: i + "dir",
    });

    await newClient.save();
  }
}

//todos los parametros se pasan por body (postman, put x-www-form)
const editClient = async (req, res) => {
  const { name, surname, dir } = req.body;
  const client = await Client.findById(req.body._id);
  if (name) client.name = name;
  if (surname) client.surname = surname;
  if (dir) client.dir = dir;
  if (!name && !surname && !dir) return res.status(500).json({ err });
  const editedclient = await client.save();
  return res.status(200).json({ editedclient });
};

const getClients = async (_, res) => {
  const clients = await Client.find({});
  return res.status(200).json(clients);
};

//pasar id por params
const getClient = async (req, res) => {
  const client = await Client.findById(req.params.id);
  if (!req.params.id ) return res.status(500).json({ err });
  return res.status(200).json({ client });
};

module.exports = {
  registerClient,
  editClient,
  getClients,
  getClient,
};
