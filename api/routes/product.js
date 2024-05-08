const router = require("express").Router();

const productController = require("../controllers/product.controller.js");

/**Agency Routes */
router.post("/addProduct", productController.createProduct);
router.get("/getProduct", productController.getAllProducts);
router.get("/searchProduct", productController.searchProduct);
module.exports = router;
