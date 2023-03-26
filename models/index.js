// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Categories have many Products
Category.hasMany(Product, {
  foreignKey: 'category_id',
  onDelete: 'CASCADE',
  hooks: true
})
// Products belongsTo Category
Product.belongsTo(Category)

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  through: {
    model: ProductTag,
    unique: false,
    foreignKey: 'product_id'
  },
  
})

// Tags belongToMany Products (through ProductTag)-
Tag.belongsToMany(Product, {
  through: {
    model: ProductTag,
    unique: false,
    foreignKey: 'product_id'
  },
  
})

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
