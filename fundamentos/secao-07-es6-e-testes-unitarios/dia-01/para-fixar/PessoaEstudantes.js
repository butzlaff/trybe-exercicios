const pessoaEstudante = new Object();
//nome, email, telefone, github e linkedIn

const handleSetNewPerson = (objectTarget, key, value) => {
  objectTarget[key] = value;
};

handleSetNewPerson(pessoaEstudante, 'name', 'Emilio');
handleSetNewPerson(pessoaEstudante, 'email', 'emiliobutz@gmail.com');
handleSetNewPerson(pessoaEstudante, 'telefone', '(27)99793-7670');
handleSetNewPerson(pessoaEstudante, 'github', 'github.com/butzlaff');
handleSetNewPerson(pessoaEstudante, 'linkedin', 'linkedin/in/emiliobutz');

console.log(pessoaEstudante);
