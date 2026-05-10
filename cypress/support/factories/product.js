import faker from "faker";

export function generateNewProduct() {
  return {
    name: faker.commerce.productName(),
    description: faker.commerce.productDescription(),
    price: faker.random.number({ min: 1, max: 1000 }),
    quantity: faker.random.number({ min: 1, max: 100 }),
  };
}

export function productToApiPayload(product) {
  return {
    nome: product.name,
    descricao: product.description,
    preco: product.price,
    quantidade: product.quantity,
  };
}
