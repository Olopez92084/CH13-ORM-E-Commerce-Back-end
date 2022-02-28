// import models
const Product = require("./Product");
const Category = require("./Category");
const Tag = require("./Tag");
const ProductTag = require("./ProductTag");

Product.belongsTo(category, {
  foreignKey: "category_id",
  onDelete: "SET NULL"
});

Category.hasMany(Product, {
  foreignKey: "category_id",
});

Product.belongsToMany(Tag, {
  through: ProductTag,
  as: "tags",
  foreignKey: "product_id",
  onDelete: "SET NULL"
});

Tag.belongsToMany(Product, {
  through: ProductTag,
  as: "products",
  foreignKey: "tag_id",
  onDelete: "SET NULL"
});

module.exports = { Product, Category, Tag, ProductTag };
