const verifyNumbers = (value1, value2) => {
  if (value1.trim() === '' || value2.trim() === '' || isNaN(value1) || isNaN(value2)) {
    throw new Error('Digite um número válido');
  }
};

const sum = () => {
  const resultP = document.getElementById('result');
  try {
    const value1 = document.getElementById('value1').value;
    const value2 = document.getElementById('value2').value;
    verifyNumbers(value1, value2);
    const result = Number(value1) + Number(value2);
    resultP.innerHTML = `Resultado: ${result}`;
  } catch (e) {
    resultP.innerHTML = e.message;
  } finally {
    document.getElementById('value1').value = '';
    document.getElementById('value2').value = '';
  }
};

window.onload = () => {
  const button = document.getElementById('button');
  button.addEventListener('click', sum);
};
