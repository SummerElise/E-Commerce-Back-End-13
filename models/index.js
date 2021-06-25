// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Products.belongsTo(Category, {
  through: {
    model: ProductTag,
    unique: false
  },
  // Categories have many Products
//as: ' '
});
// Products belongToMany Tags (through ProductTag)
Products.belongsToMany(Tags, {
  through: {
    model: ProductTag,
    unqiue: false
  },
});
// Tags belongToMany Products (through ProductTag)
Tags.belongToMany(Products, {
  through: {
    model: ProductTags,
    unique: false
  },
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
