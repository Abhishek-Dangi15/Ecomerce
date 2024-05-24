const product=require("../models/product.model");
exports.getAllproduct = (req, res) => {
  res.status(200).json({ message: "all the product" });
};


exports.createProduct=asyncError(req,res)=>{
  const Product=await product.create(req.body);
}
