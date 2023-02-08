const techList = (array, name) => {
  if (array.length === 0) {
    return 'Vazio!'
  }
  array = array.sort();
  const newObjeto = [];
  for (let index = 0; index < array.length; index += 1) {
    newObjeto.push({tech: array[index], name})
  }
  return newObjeto;
}

module.exports = techList;