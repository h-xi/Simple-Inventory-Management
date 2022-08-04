//Takes in params object, iterates through keys and values into readable format for selection query
const buildQuery = (params) => {
  let conditions = [];
  let values = [];

  for (const key in params) {
    console.log(key);
    if (typeof key != null) {
      values.push(params[key]);
      conditions.push(`${key} = ?`);
    }
  }
  const res = {
    where: conditions.length ? conditions.join(" AND ") : "1",
    values: values,
  };
  console.log(res);
  return res;
};

// {
//     objectID: 4453,
//     shippingDate: '10/23/2020'
// }

buildQuery({ Key: "Value1", Key2: "Value2", Key3: "Value3" });

module.exports = { buildQuery: buildQuery };
