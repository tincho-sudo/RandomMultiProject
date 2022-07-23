const { Order, Client, Paint } = require("../models");
const moment = require("moment");

//todos los parametros se pasan por body (postman, post x-www-form)
const registerOrder = async (req, res) => {
  try {
    const { paint, client, statusZ, dateOfDelivery } = req.body;

    const newOrder = new Order({
      paint: req.Paint._id,
      client: req.Client._id,
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
try {
  populate();
} catch (error) {
  console.log(error);
}
async function populate() {
  await Order.deleteMany({});
  const clientList = await Client.find({});
  const paintList = await Paint.find({});
  let i;
  const newOrder = new Order({
    client: await Client.findById({ _id: clientList[0]._id }),
    paint: await Paint.findById({ _id: paintList[0]._id }),
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
  if (res.client._id) order.client._id = res.client._id;
  if (res.paint._id) order.paint._id = res.paint_id;
  if (res.status) order.status = res.status;
  if (res.dateOfDelivery) order.dateOfDelivery = res.dateOfDelivery;
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
