const { Paint } = require("../models");

//todos los parametros se pasan por body (postman, post x-www-form)
const registerPaint = async (req, res) => {
  const { name, color, price, stock, sku } = req.body;

  try {
    const newPaint = new Paint({ name, color, price, stock, sku });
    await newPaint.save();
    res.status(200).json({ newPaint });
  } catch (err) {
    res.status(500).json({ err });
  }
};

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
