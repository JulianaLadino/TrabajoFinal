const { user } = require("../core/user/user.core");
const hashJS = require("hash.js");
const {
  Success,
  Error,
  Conflict,
  NoContent,
} = require("../infraestructure/messageType.infraestruture");
const {
  GenericMessage,
} = require("../infraestructure/GenericMessage.infraestructure");

async function CreateUser({ name, email, password, role }) {
  const userCreated = await ValidateUser({email});
  if (userCreated.length)
    return GenericMessage(Conflict(), "User already exists", userCreated);
  try {
    const stagingUser = await user.create({
      name,
      email,
      password: hashJS.sha256().update(password).digest("hex"),
      role,
    });
    return GenericMessage(
      Success(),
      "User was created successfully",
      stagingUser
    );
  } catch (error) {
    return GenericMessage(Error(), "there was an error", error);
  }
}

async function UpdateUser({ name, password, role }, id) {
  const userCreated = await ValidateUser({id});
  if (!userCreated) return GenericMessage(NoContent(), "User doesn´t exists");
  try {
    const userUpdated = (await user).update(
      { name, password : hashJS.sha256().update(password).digest("hex"), role },
      { where: { id } }
    );
    return GenericMessage(
      Success(),
      "User Was Updated Successfully",
      userUpdated
    );
  } catch (error) {
    return GenericMessage(Error(), "there was an error", error);
  }
}

async function ValidateUser(condition) {
  try {
    return userCreated = await user.findAll({
      where: condition,
      attributes: ["name", "role", "email", "active"],
    });
  } catch (error) {
    return GenericMessage(Error(), 'there was an error', error)
  }
}

module.exports = {
  CreateUser,
  UpdateUser,
  ValidateUser
};
