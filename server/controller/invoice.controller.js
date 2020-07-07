const express = require("express");
const app = express();
const { verifytoken } = require("../middleware/verifyToken.middleware");
const {validateNumberParameter} = require('../middleware/validateNumberParameter.middleware');
const invoiceDomain = require("../domain/invoice.domain");

app.post("/registerInvoice",[verifytoken], async (req, res) => {
  const { body } = req;
  const status = await invoiceDomain.RegisterInvoice(body);
  const { type } = status;
  res.status(type).json(status);
});

app.get("/invoice/:id",[verifytoken, validateNumberParameter], async (req, res) => {
  let { params: { id } } = req;
  const status = await invoiceDomain.GetInvoiceDetail(id);
  const { type } = status;
  res.status(type).json(status);
});

module.exports = app;
