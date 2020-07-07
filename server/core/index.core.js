// #region user
const {user} = require("./user/user.core");
const {userByRole} = require("./user/userByRole.core");
// #region user

// #region master
const {brand} = require("./master/brand.core");
const {color} = require("./master/color.core");
const {category} = require("./master/category.core");
const {role} = require("./master/role.core");
// #region master

//#region product
const {product} = require("./product/product.core");
const {staging} = require("./product/staging.core");
//#region product

//#region invoice
const {header} = require("../core/invoice/header.core");
const {detail} = require("../core/invoice/detail.core");
//#region invoice

module.exports = {
  user,
  userByRole,
  brand,
  color,
  category,
  role,
  product,
  staging,
  header,
  detail,
};
