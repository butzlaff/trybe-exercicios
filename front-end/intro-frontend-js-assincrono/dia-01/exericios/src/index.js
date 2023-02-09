import './style.css';
import validator from 'validator';

const getButtonElement = document.querySelector('button');
const getPElement = document.querySelector('p')

const handleValidate = (e) => {
  e.preventDefault();
  const getSelect = document.querySelector('select').value;
  const getInputValue = document.querySelector('#iptValue').value;

  const handleFunctions = {
    email: validator.isEmail(getInputValue),
    cpf: validator.isTaxID(getInputValue, 'pt-BR'),
  }

  getPElement.innerHTML = `A validação retornou ${handleFunctions[getSelect]}`
}

getButtonElement.addEventListener('click', handleValidate);
