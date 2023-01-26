const loteryCheck = (loteryNumber, result) => (loteryNumber === result ? 'Parabéns, você ganhou' : 'Tente novamente');

const result = (lotery) => {
  const numberResult = Math.floor(Math.random() * 5) + 1;
  return loteryCheck(lotery, numberResult)
};

console.log(result(2))