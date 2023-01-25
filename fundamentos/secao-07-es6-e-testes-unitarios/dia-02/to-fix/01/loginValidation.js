// loginValidation.js
const greetingMessage = (user) => {
  return `Hello, ${user}! Que bom ter você de volta`;
};
const loginErrorMessage = (user) => {
  return `Pessoa usuária ${user} não encontrada, tente novamente!`;
};
// trazemos aqui esse objeto somente para demonstrar como funciona a função verifyCredentials, mas poderiam ser quaisquer outros dados.
const user = {
  userName: 'Bob',
  password: 123456,
};
const verifyCredentials = (userInfo) => {
  const userName = userInfo.userName;
  const password = userInfo.password;
  if (password === 123456 && userName === 'Bob') {
    return greetingMessage(userName);
  } else {
    return loginErrorMessage(userName);
  }
};

module.exports = { user, greetingMessage, loginErrorMessage, verifyCredentials };