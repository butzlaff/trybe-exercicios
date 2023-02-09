import './style.css'

const getBody = document.querySelector('#pokediv')

const getPokemon = await fetch('https://pokeapi.co/api/v2/pokemon/?limit=151')
.then((response) => response.json())
.then((data) => data)
.catch(error => console.log(error))

console.log(getPokemon);

const generateImagem = (url) => {
  const createImg = document.createElement('img')
  fetch(url).then((response) => response.json())
  .then((data) => {
    createImg.src = data.sprites.front_default;
    createImg.style.width = '96px'
    createImg.style.height = '96px'
  });
  return createImg;
}

const createSpans = () => {
  const createPoke = getPokemon.results;
  createPoke.forEach((pokemon) => {
  const createSpan = document.createElement('p');
  createSpan.innerText = `NAME: ${pokemon.name.toUpperCase()}`;
  createSpan.appendChild(generateImagem(pokemon.url));
  getBody.appendChild(createSpan);
  // generateImagem(pokemon.url);
})
};

createSpans();