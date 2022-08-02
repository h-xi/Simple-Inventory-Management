const testRouter = require("./testRouter");
const orderRouter = require("./orderRouter");

module.exports = (app) => {
  app.use("/", testRouter);
  app.use("/orders", orderRouter);
};
