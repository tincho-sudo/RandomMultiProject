const { Order, Client, Paint, Org } = require("../models");
const moment = require("moment");

//todos los parametros se pasan por body (postman, post x-www-form)
const registerOrder = async (req, res) => {
  try {
    const { paint, client, statusZ, toPay, dateOfDelivery } = req.body;

    const newOrder = new Order({
      paint: paint,
      client: client,
      statusZ: statusZ,
      toPay: toPay, //esta es la Opcion B de la @Linea39
      dateOfDelivery: dateOfDelivery,
    });
    await newOrder.save();
    return res.status(200).json({ newOrder });
  } catch (err) {
    return res.status(500).json({ err });
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
  for (i = 0; i < 2; i++) {
   // console.log(paintList[i].price);
    toPayVar += paintList[i].price;
    const newOrder = await new Order({
      client: await Client.findById({ _id: clientList[i]._id }),
      paint: await Paint.findById({ _id: paintList[i]._id }),
      toPay: toPayVar,
      dateOfDelivery: "aaa",
      statusZ: Math.floor(Math.random() * 2),
    });
    await newOrder.save();
  }
  //console.log("Pay: " + toPayVar);
}

//todos los parametros se pasan por body (postman, put x-www-form)
const editOrder = async (req, res) => {
  const { orderId, statusZ, toPay, dateOfDelivery } = req.body;
  const order = await Order.findById(orderId);

  if((statusZ != order.statusZ) && (statusZ==2)){
    const salesUp = await Org.findOne({name: "Sherwin Williams"});
    salesUp.totalRevenue += order.toPay;
    salesUp.totalSales += 1;
    salesUp.save();
  }

  if (statusZ) order.statusZ = statusZ;
  if (toPay) order.toPay = toPay;
  if (dateOfDelivery) order.dateOfDelivery = dateOfDelivery;

  await order.save();
  return res.status(200).json(order);
};

//(postman, get x-www-form)
const getOrders = async (_, res) => {
  const orders = await Order.find({});
  return res.status(200).json(orders);
};

//pasar id de la orden por params
const deleteOrder = async (req, res) => {
  const order = await Order.findById(req.params._id);
  const deletedOrder = await order.delete();
  return res.status(200).json(deletedOrder);
};

//(postman, get x-www-form) - para buscar todos los de 1, pasar id por params
const pendingOrders = async (req, res) => {
  let orders;
  try {
    if (req) {
      orders = await Order.find({
        clientId: { $eq: req.params._id },
        statusZ: { $eq: 1 },
      });
    } else {
      orders = await Order.find({ statusZ: { $eq: 1 } });
    }
  } catch (err) {
    return res.status(500).json({ err });
  }
  return res.status(200).json(orders);
};

//(postman, get x-www-form)   - para buscar todos los de 1, pasar id por params
const billedOrders = async (req, res) => {
  let orders;
  try {
    if (req) {
      orders = await Order.find({
        clientId: { $eq: req.params._id },
        statusZ: { $eq: 2 },
      });
    } else {
      orders = await Order.find({ statusZ: { $eq: 2 } });
    }
  } catch (err) {
    return res.status(500).json({ err });
  }
  return res.status(200).json(orders);
};

//(postman, get x-www-form)  - para buscar todos los de 1, pasar id por params
const canceledOrders = async (req, res) => {
  let orders;
  try {
    if (req) {
      orders = await Order.find({
        clientId: { $eq: req.params._id },
        statusZ: { $eq: 3 },
      });
    } else {
      orders = await Order.find({ statusZ: { $eq: 3 } });
    }
  } catch (err) {
    return res.status(500).json({ err });
  }
  return res.status(200).json(orders);
};

//pasar id por params
const getOrder = async (req, res) => {
  const id = req.params.id;
  const order = await Order.findById(id);
  // if (!req.params._id ) return res.status(500).json({ err });
  return res.status(200).json({ order });
};

module.exports = {
  registerOrder,
  editOrder,
  getOrders,
  getOrder,
  deleteOrder,
  pendingOrders,
  billedOrders,
  canceledOrders,
};
