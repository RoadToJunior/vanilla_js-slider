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
let image = 0;
const img = document.querySelector("img.slider");
const h1 = document.querySelector("h1.slider");

const changeSlide = () => {
  image++;
  img.src = slideList[image].img;
  h1.textContent = slideList[image].text;
};

setInterval(changeSlide, time);
