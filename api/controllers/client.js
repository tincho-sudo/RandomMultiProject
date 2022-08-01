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
    let validateEmail = await Client.find({email: emailTrim});

    if(validateEmail) throw res.status(500).json({err:"Email duplicado"})
    else{
      await newClient.save();
      res.status(200).json({ newClient });
    }
  } catch (err) {
    res.status(500).json({ err});
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
  const { name, surname, dir, email2 } = req.body;
  const { email } = req.query;
  try {
    const client = await Client.findOne({
      email: new RegExp(email.split("@")[0], "i"),
    });

    if (email2) client.email = email2;
    if (name) client.name = name;
    if (surname) client.surname = surname;
    if (dir) client.dir = dir;
    const editedclient = await client.save();
    return res.status(200).json({ editedclient });
  } catch (err) {
    return res.status(500).json({ err : "Error modificando el cliente"});
  }
};

const getClients = async (_, res) => {
  const clients = await Client.find({});
  return res.status(200).json(clients);
};

//pasar email por query
const getClient = async (req, res) => {
  const { email } = req.query;

  try {
    const client = await Client.find({
      email: new RegExp(email.split("@")[0], "i"),
    });
    return res.status(200).json({ client });
  } catch (err) {
    return res.status(500).json({ err : "No se encontró ese cliente"});
  }
};

module.exports = {
  registerClient,
  editClient,
  getClients,
  getClient,
};
