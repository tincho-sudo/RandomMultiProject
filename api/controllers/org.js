const { Org, Paint, Order } = require("../models");

populate();
async function populate() {
  //  await Org.deleteMany({});

  let paintQuant = 0;
  let paintList = await Paint.find({});
  for (let i = 0; i < (await Paint.count()); i++) {
    paintQuant += paintList[i].stock;
  }

  let salesQuant = await Order.count({});

  let totalRev = 0;
  orderList = await Order.find({ statusZ: { $eq: 2 } });
  for (let i = 0; i < (await orderList.count()); i++) {
    totalRev += orderList[i].toPay;
  }

  const newOrg = new Org({
    name: "Sherwin Williams",
    employees: 30,
    dir: "Chacabuco 441 - B1702FJI Ciudadela - Provincia de Buenos Aires - Argentina",
    phone: "+541132488717",
    totalSales: salesQuant,
    totalRevenue: totalRev,
    totalStockQuant: paintQuant,
  });

  await newOrg.save();
}
