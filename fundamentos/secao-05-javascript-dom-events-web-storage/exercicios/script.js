const twoYears = () => {
  let element = document.querySelectorAll(".center-content p");
  element[1].innerHTML = "Ser um Desenvolvedor Full Stack";
};

twoYears();

const switchColor = () => {
  document.getElementsByTagName("main")[0].style.backgroundColor =
    "rgb(76,164,109)";
};
switchColor();

const switchColorRed = () => {
  document.querySelector(".center-content").style.backgroundColor = "white";
};

switchColorRed();

const fixTitle = () => {
  document.querySelector(".title").innerText = "Desafio - JavaScript";
};

fixTitle();

const changeText = () => {
  document.getElementsByTagName("p")[0].style.textTransform = "uppercase";
};

changeText();

const changeAllPharagrephes = () => {
  let elementP = document.querySelectorAll("p");
  for (let index = 0; index < elementP.length; index += 1) {
    console.log(elementP[index].innerHTML);
  }
};

changeAllPharagrephes();
