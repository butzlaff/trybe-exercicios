const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

// Crie uma função para adicionar o turno da noite na lesson2. Essa função deve possuir três parâmetros, sendo eles: o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela.
// Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.
// Crie uma função para mostrar o tamanho de um objeto.
// Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.
// Crie um objeto de nome allLessons, que deve agrupar todas as aulas através do Object.assign. Cada chave desse novo objeto será uma aula, sendo essas chaves lesson1, lesson2 e lesson3. Ao executar o comando console.log(allLessons), a saída deverá ser a seguinte:

const createAttributeObject = (obj, key, valor) => {
  obj[key] = valor
}

createAttributeObject(lesson2, 'turno', 'noite');

console.log(lesson2)

const keyList = (obj) => {
  console.log(Object.values(obj));
}

keyList(lesson1);

const objLength = (obj) => {
  console.log(Object.keys(obj).length)
};

objLength(lesson1)

const objValues = (obj) => {
  console.log(Object.values(obj))
};

objValues(lesson1)

const allLessons = Object.assign({}, {lesson1, lesson2, lesson3})

console.log(allLessons)

