const { Org, Paint, Order } = require("../models");

populate();
async function populate() {
   await Org.deleteMany({});

  
  let paintQuant=0;
  let paintList=[];

  paintList = (await Paint.find({})).map(paint=>paint.stock);

    for(let i=0;i<paintList.length;i++){
        if(paintList[i])
         paintQuant+=paintList[i];
    }

    
  let salesQuant = await Order.count({});


  let totalRev = 0;
  let orderList = [];

  orderList = (await Order.find({ statusZ: { $eq: 2 } })).map(order=>order.toPay);
  for(let i=0;i<orderList.length;i++){
    if(orderList[i])
     totalRev+=orderList[i];
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

  newOrg.save();

}

const getOrg = async (_, res) => {
    const org = await Org.find({});
    return res.status(200).json(org);
  };


module.exports = {
 getOrg,
  };
  