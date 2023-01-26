const newEmployees = () => {
  const employees = {
    id1: handleEmployees('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: handleEmployees('Pedro Guerra'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: handleEmployees('Pedro Guerra'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }
  return employees;
};

const handleEmployees = (employ) => {
  const email = employ.toLowerCase().replace(' ', '_');
  return { name: `${employ}`, email: `${email}@trybe.com` };
};

console.log(newEmployees())