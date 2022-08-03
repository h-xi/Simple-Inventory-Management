const testRouter = require("./testRouter");
const orderRouter = require("./orderRouter");
// const cors = require('cors');
// app.use(cors());
// app.use(express.json());

module.exports = (app) => {
  app.use("/", testRouter);
  app.use("/orders", orderRouter);
};
