const {
  GenericMessage,
} = require("../infraestructure/genericMessage.infraestructure");
const {
  Error,
  NoContent,
  Success,
} = require("../infraestructure/messageType.infraestruture");
//const { header: headerCore, detail: detailCore } = require('../core/index.core');
const { header: headerCore, detail: detailCore } = require("../core/index.core");
const userDomain = require("../domain/user.domain");
const productDomain = require("./product.domain");
const { Op } = require("../infraestructure/operator.infraestructure");
async function RegisterInvoice({ idUser, detail: products }) {
  try {
    const [userValidated] = await userDomain.ValidateUser({ id: idUser });
    if (!userValidated)
      return GenericMessage(
        NoContent(),
        `user with id ${idUser} doesn't exists`
      );
    const header = await headerCore.create({ idUser });
    const {
      dataValues: { id: idHeader },
    } = header;
    const productsWithHeader = products.map((product) => ({
      ...product,
      idHeader,
    }));
    const detail = await detailCore.bulkCreate(productsWithHeader);
    return (
      header &&
      detail.length &&
      GenericMessage(Success(), "Invoice was created successfully", {
        header,
        detail,
      })
    );
  } catch (error) {
    console.error(error);
    return GenericMessage(Error(), "There was an error", error);
  }
}

async function GetInvoiceDetail(id) {
  try {
    const [{ dataValues: invoice }] = await ValidateInvoice({ id });
    if (!invoice) return GenericMessage(NoContent(), "invoice doesn´t exist");
    const { idUser, id: idHeader } = invoice;
    const [{ dataValues: user }] = await userDomain.ValidateUser({
      id: idUser,
    });
    const details = (
      await detailCore.findAll({
        where: { idHeader },
        attributes: ["id", "idProduct"],
      })
    ).map(({ dataValues }) => ({ ...dataValues }));
    const idProducts = details.map(({ idProduct }) => idProduct);
    const products = (
      await productDomain.ValidateProduct({
        id: {
          [Op.in]: idProducts,
        },
      })
    ).map(({ dataValues }) => ({ ...dataValues }));
    const detailDescription = details.map((detail) => ({
      ...detail,
      ...products.find((product) => product.id === detail.idProduct),
    }));
    const invoiceresult = { ...invoice, ...user, detail: detailDescription };
    return GenericMessage(Success(), "Invoice exists", invoiceresult);
  } catch (error) {
    return GenericMessage(Error(), "there was an error", error);
  }
}

async function ValidateInvoice(condition) {
  try {
    return (invoiceCreated = await headerCore.findAll({
      where: condition,
      attributes: ["id", "idUser"],
    }));
  } catch (error) {
    return GenericMessage(Error(), "there was an error", error);
  }
}

module.exports = {
  RegisterInvoice,
  GetInvoiceDetail,
};
