const testRouter = require("./testRouter");
const orderRouter = require("./orderRouter");
const productRouter = require("./productRouter");
const aggregationRouter = require("./aggregationRouter");
const brandRouter = require("./brandRouter");
// const cors = require('cors');
// app.use(cors());
// app.use(express.json());

module.exports = (app) => {
  app.use("/", testRouter);
  app.use("/orders", orderRouter);
  app.use("/products", productRouter);
  app.use("/products/aggregations", aggregationRouter);
  app.use("/brands", brandRouter);
};
