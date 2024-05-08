const pool = require("../config/dbConnection");

module.exports = {
  async createProduct(req, res) {
    try {
      const { name, cost } = req.body;
      const [results] = await pool.execute(
        `INSERT INTO products (productname, cost) VALUES (?, ?)`,
        [name, cost]
      );

      res.json(results);
    } catch (error) {
      console.error(error);
    } finally {
      console.log("finally");
    }
  },
  async getAllProducts(req, res, next) {
    try {
      const [results, fields] = await pool.query("SELECT * FROM products");
      res.json(results);
    } catch (error) {
      next(error);
    }
  },
  async searchProduct(req, res, next) {
    try {
      const { q } = req.query; // Get the search query from URL query parameters
      if (!q) {
        return res.status(400).json({ message: "No search query provided" });
      }

      const [results] = await pool.execute(
        `SELECT * FROM products WHERE productname LIKE ?`,
        [`%${q}%`]
      );
      if (results.length > 0) {
        res.json(results);
      } else {
        res
          .status(404)
          .json({ message: "No products found matching the search criteria" });
      }
    } catch (error) {
      next(error);
    }
  },
};
