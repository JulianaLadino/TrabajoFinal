const {product:productCore} = require("../core/product/product.core");

async function ValidateProduct (condition) {
    try {
      return invoiceCreated = await productCore.findAll({
        where: condition,
        attributes: ["id","description"],
      });
    } catch (error) {
      return GenericMessage(Error(), 'there was an error', error)
    }
  }

  module.exports = {
    ValidateProduct
  }