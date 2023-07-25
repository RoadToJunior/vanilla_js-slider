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

//dots array
const dots = [...document.querySelectorAll(".dots span")];

const changeDot = () => {
  const activeDot = dots.findIndex((dot) => dot.classList.contains("active"));
  dots[activeDot].classList.remove("active");
  dots[listIndex].classList.add("active");
};

const changeSlide = () => {
  listIndex++;
  if (listIndex === slideList.length) {
    listIndex = 0;
  }
  img.src = slideList[listIndex].img;
  h1.textContent = slideList[listIndex].text;
  changeDot();
};

const keyChangeSlide = (e) => {
  console.log(e.keyCode);
  if (e.keyCode === 39) {
    listIndex--;
    if (listIndex < 0) {
      listIndex = 0;
    }
  } else if (e.keyCode === 37) {
    listIndex++; // Increment instead of decrement
    if (listIndex >= slideList.length) {
      listIndex = 0;
    }
  }
  changeSlide();
};

setInterval(changeSlide, time);
window.addEventListener("keydown", keyChangeSlide);
