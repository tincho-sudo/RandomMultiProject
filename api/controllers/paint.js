const { Paint } = require("../models");
const moment = require("moment");

//todos los parametros se pasan por body (postman, post x-www-form)
const registerPaint = async (req, res) => {
  const { name, color, price, stock, sku, nxtShipping } = req.body;

  try {
    const newPaint = new Paint({ name, color, price, stock, sku, nxtShipping });
    await newPaint.save();
    res.status(200).json({ newPaint });
  } catch (err) {
    res.status(500).json({ err });
  }
};

// agrega 10 datos a la tabla
populate();
async function populate() {
  try {
    await Paint.deleteMany({});

    for (let i = 0; i < 10; i++) {
      const newPaint = new Paint({
        name: i + "nombre",
        color: i + "color",
        price: i,
        stock: i,
        sku: i + "sku",
        nxtShipping: moment()
          .locale("es")
          .add(Math.floor(Math.random() * i), "d")
          .format("MMM DD, YYYY HH:MM"),
      });
      await newPaint.save();
    }
  } catch (error) {
    console.log(error);
  }
}

async function getRandomInt(max) {
  if (max > 0) return Math.floor(Math.random() * max);
  else return Math.floor(Math.random() * max) + 1;
}

//todos los parametros se pasan por body (postman, put x-www-form)
const editPaint = async (req, res) => {
  const { name, color, price, stock, sku } = req.body;
  const paint = await Paint.findById(req.body._id);
  if (name) paint.name = name;
  if (color) paint.color = color;
  if (price) paint.price = price;
  if (stock) paint.stock = stock;
  if (sku) paint.sku = sku;
  if (!name && !color && !price && !stock && !sku)
    return res.status(500).json({ err });
  const editedpaint = await paint.save();
  res.status(200).json({ editedpaint });
};

//(postman, get x-www-form)
const getPaints = async (req, res) => {
  const paints = await Paint.find({});
  return res.status(200).json(paints);
};

module.exports = {
  registerPaint,
  editPaint,
  getPaints,
};
