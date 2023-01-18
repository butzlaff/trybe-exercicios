const pessoaEstudante = new Object();

//nome, email, telefone, github e linkedIn

const handleSetProprieties = (
  objectName,
  nome,
  email,
  telefone,
  github,
  linkedIn
) => {
  objectName.nome = nome;
  objectName.email = email;
  objectName.telefone = telefone;
  objectName.github = github;
  objectName.linkedIn = linkedIn;
};

handleSetProprieties(
  pessoaEstudante,
  'Emilio',
  'emiliobutz@gmail.com',
  '(027)-99793-7670',
  'github.com/butzaff',
  'linkedin.com/in/emiliobutz'
);

console.log(pessoaEstudante);
