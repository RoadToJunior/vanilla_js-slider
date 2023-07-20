const slideList = [
  {
    img: "images/img1.jpg",
    text: "Pierwsze zdjęcie",
  },
  {
    img: "images/img2.jpg",
    text: "Drugie zdjęcie",
  },
  {
    img: "images/img3.jpg",
    text: "Trzecie zdjęcie",
  },
];

const time = 5000;
let listIndex = 0;
const img = document.querySelector("img.slider");
const h1 = document.querySelector("h1.slider");

//dots
const one = document.querySelector("#one");
const two = document.querySelector("#two");
const three = document.querySelector("#three");

const dots = [one, two, three];

const changeSlide = () => {
  listIndex++;
  if (listIndex === slideList.length) {
    listIndex = 0;
  }
  img.src = slideList[listIndex].img;
  h1.textContent = slideList[listIndex].text;
};

function handleSelection() {
  dots.forEach((dot) => dot.classList.remove("active"));
  this.classList.add("active");
}

setInterval(changeSlide, time);

dots.forEach((dot) => dot.addEventListener("click", handleSelection));
