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

//
const time = 5000;
let listIndex = 0;
const img = document.querySelector("img.slider");
const h1 = document.querySelector("h1.slider");

const changeSlide = () => {
  listIndex++;
  if (listIndex === slideList.length) {
    listIndex = 0;
  }
  img.src = slideList[listIndex].img;
  h1.textContent = slideList[listIndex].text;
};

setInterval(changeSlide, time);
