const nameRegex = (name) =>
  /(^[A-Z]{1}[a-z]*) ?(([A-Z]{1}[a-z]*)?) ([A-Z]{1}[a-z]*) ([A-Z]{1}[a-z]*)/.test(
    name
  );
const emailRegex = (email) =>
  /^[_a-z0-9-]+(.[_a-z0-9-]+)@[a-z0-9-]+(.[a-z0-9-]+)(.[a-z]{2,4})$/.test(
    email
  );
const passwordRegex = (password) =>
  /^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S{8,16}$/.test(
    password
  );

const numberRegex = (id) => /[0-9]/.test(`${id}`)

module.exports = {
  nameRegex,
  emailRegex,
  passwordRegex,
  numberRegex
};
