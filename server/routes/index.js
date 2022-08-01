const testRouter = require("./testRouter");

module.exports = (app) => {
  app.use("/", testRouter);
};
