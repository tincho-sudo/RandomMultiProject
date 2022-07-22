const { Order } = require("../models");

//todos los parametros se pasan por body (postman, post x-www-form)
const registerOrder = async (req, res) => {

    try {
        const {name, quantity } = req.body;
  
        const newOrder = new Order({
          paint: id_paint,
          client: req.client._id,
          name,
          quantity

        });
        await newOrder.save();
        res.status(200).json({ newOrder });
      } catch (err) {
        res.status(500).json({ err });
      }
};


//todos los parametros se pasan por body (postman, put x-www-form)
const editOrder = async (req, res) => {
    const { id_order } = req.body;
    const order = await Order.findById(id_order);
    if(res.name) order.name = res.name;
    if(res.color) order.color = res.color;
    if(res.quantity) order.quantity = res.quantity;


};

//(postman, get x-www-form)
const getOrders = async (req, res) => {
    
  const orders = await Order.find({});
  return res.status(200).json(orders);
};

const deleteOrder= async (req, res) => {
    const { id_order } = req.params;
    const order = await Orders.findOne({
        order: id_order,
        client: req.user._id,
      });
    const deletedOrder = await order.delete();
  res.status(200).json({ deletedOrder });
}

//(postman, get x-www-form)
const pendingOrders = async (req, res) => {
    
  const orders = await Order.find({});
  return res.status(200).json(orders);
};

//(postman, get x-www-form)
const billedOrders = async (req, res) => {
    
  const orders = await Order.find({});
  return res.status(200).json(orders);
};


//(postman, get x-www-form)
const canceledOrders = async (req, res) => {
    
  const orders = await Order.find({});
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