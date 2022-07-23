const { Order } = require("../models");
const moment = require("moment");

//todos los parametros se pasan por body (postman, post x-www-form)
const registerOrder = async (req, res) => {
  try {
    const { paint, client, statusZ, dateOfDelivery } = req.body;

    const newOrder = new Order({
      paint: req.paint._id,
      client: req.client._id,
      statusZ: req.order.status,
      dateOfDelivery: req.order.dateOfDelivery,
    });
    await newOrder.save();
    res.status(200).json({ newOrder });
  } catch (err) {
    res.status(500).json({ err });
  }
};

// agrega 10 datos a la tabla
//populate();
async function populate() {
  let i;
  const newOrder = new Order({
    paint: Order.find({}).populate("paint").exec(),
    client: Order.find({}).populate("client").exec(),
    dateOfDelivery: moment()
      .locale("es")
      .add(Math.floor(Math.random() * i), "d")
      .format("MMM DD, YYYY HH:MM"),
    statusZ: Math.floor(Math.random() * i),
  });
  await newOrder.save();
}

//todos los parametros se pasan por body (postman, put x-www-form)
const editOrder = async (req, res) => {
  const { id_order } = req.body;
  const order = await Order.findById(id_order);
  if (res.paint) order.paint = res.paint;
  if (res.status) order.status = res.status;
  if (res.dateOfDelivery) order.dateOfDelivery = res.dateOfDelivery;
  if (res.client) order.client = res.client;
};

//(postman, get x-www-form)
const getOrders = async (req, res) => {
  const orders = await Order.find({});
  return res.status(200).json(orders);
};

const deleteOrder = async (req, res) => {
  const { id_order } = req.params;
  const order = await Orders.findOne({
    order: id_order,
    client: req.user._id,
  });
  const deletedOrder = await order.delete();
  res.status(200).json({ deletedOrder });
};

//(postman, get x-www-form)
const pendingOrders = async (req, res) => {
  const orders = await Order.find({ status: { $eq: 1 }.getFilter() });
  return res.status(200).json(orders);
};

//(postman, get x-www-form)
const billedOrders = async (req, res) => {
  const orders = await Order.find({ status: { $eq: 2 }.getFilter() });
  return res.status(200).json(orders);
};

//(postman, get x-www-form)
const canceledOrders = async (req, res) => {
  const orders = await Order.find({ status: { $eq: 3 }.getFilter() });
  return res.status(200).json(orders);
};

module.exports = {
  registerOrder,
  editOrder,
  getOrders,
  deleteOrder,
  pendingOrders,
  billedOrders,
  canceledOrders,
};
