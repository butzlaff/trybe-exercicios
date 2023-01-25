const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      },
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      },
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    },
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (order) => {
  const deliveryPerson = order.order.delivery.deliveryPerson;
  const comprador = order.name;
  const phoneNumber = order.phoneNumber;
  const adressStreet = order.address.street;
  const houseNumber = order.address.number;
  const apartment = order.address.apartment;
  console.log(`Olá ${deliveryPerson} , entrega para: ${comprador}, Telefone: ${phoneNumber}, ${adressStreet}, Nº: ${houseNumber}, AP: ${apartment}`);
};

customerInfo(order);

const orderModifier = (order) => {
  const newName = 'Luiz Silva';
  const newPayment = order.payment = 50;
  const pizzas = Object.keys(order.order.pizza);
  console.log(`Olá ${newName}, o total do seu pedido de ${pizzas[0]}, ${pizzas[1]} e ${order.order.drinks.coke.type} é R$ ${newPayment},00.`);
};

orderModifier(order);