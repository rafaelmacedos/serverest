import faker from "faker";

export function generateNewUser(admin = false) {
  return {
    name: faker.name.findName(),
    email: faker.internet.email(),
    password: faker.internet.password(),
    admin: Boolean(admin),
  };
}

export function userToApiPayload(user) {
  return {
    nome: user.name,
    email: user.email,
    password: user.password,
    administrador: String(user.admin),
  };
}
