const { Order, Client, Paint } = require("../models");
const moment = require("moment");

//todos los parametros se pasan por body (postman, post x-www-form)
const registerOrder = async (req, res) => {
  try {
    const { paint, client, statusZ, toPay, dateOfDelivery } = req.body;

    const newOrder = new Order({
      paint: req.Paint._id,
      client: req.Client._id,
      statusZ: req.Order.status,
      toPay: req.Order.toPay, //esta es la Opcion B de la @Linea39
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
  //await console.log('Count: '+ Paint.countDocuments({_id: "62dc32a939f734eb6260c2c4"}));
  let toPayVar = 0;
  let i = 0;
  //ahora mismo suma el precio de todas las pinturas existentes y le asigna el total al cliente 0 para testing,
  //despues va a haber que recorrer todas las pinturas de la orden,
  //sumar los precios individuales y editarle a la orden la variable toPay que ya tiene en la db
  //opcion B, por front sacan el valor de cada pintura, lo suman en una temporal y lo manda en el req
  for (i = 0; i < 10; i++) {
    toPayVar += paintList[i].price;
  }
  console.log("Pay: " + toPayVar);
  const newOrder = new Order({
    client: await Client.findById({ _id: clientList[0]._id }),
    paint: await Paint.findById({ _id: paintList[0]._id }),
    toPay: await toPayVar,
    dateOfDelivery: moment()
      .locale("es")
      .add(Math.floor(Math.random() * 2), "d")
      .format("MMM DD, YYYY HH:MM"),
    statusZ: Math.floor(Math.random() * 2),
  });
  await newOrder.save();
}

//todos los parametros se pasan por body (postman, put x-www-form)
const editOrder = async (req, res) => {
  const { id_order } = req.body;
  const order = await Order.findById(id_order);
  if (res.client._id) order.client._id = res.client._id;
  if (res.paint._id) order.paint._id = res.paint_id;
  if (res.status) order.statusZ = res.status;
  if (res.toPay) order.toPay = res.toPay;
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
