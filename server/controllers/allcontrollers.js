const createBrand = async () => {
    try {
      const [rows, fields] = await promisePool.query(
        "CREATE TABLE Brands(Brand_ID Integer, B_name Char(30), PRIMARY KEY (Brand_ID))"
      );
      console.log(rows);
      console.log(fields);
    } catch (err) {
      throw err;
    }
  };