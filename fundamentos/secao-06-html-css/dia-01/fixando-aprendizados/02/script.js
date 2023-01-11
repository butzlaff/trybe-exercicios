// SELETORES
const INPUT_TEXT = document.querySelector("#input-text");
const INPUT_CHECKBOX = document.querySelector("#input-checkbox");
const HREF_LINK = document.querySelector("#href");

const preventKeyPress = (e) => {
  if (e.key !== 'a') {
    e.preventDefault();
  }
}

INPUT_TEXT.addEventListener('keypress', preventKeyPress)

INPUT_CHECKBOX.addEventListener('click', (e) => {
  e.preventDefault();
});


HREF_LINK.addEventListener('click', (e) => {
  e.preventDefault();
});