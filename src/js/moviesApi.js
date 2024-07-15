import { createElements } from "./createMarkup.js";
import { editModalOpen } from "./changeModal.js";

const list = document.querySelector(".list");
const changeTitle = document.querySelector(".title");
const changeGenre = document.querySelector(".genre");
const changeDirector = document.querySelector(".director");
const changeYear = document.querySelector(".year");
const changeForm = document.querySelector(".change__form");

export const getMovies = () => {
  return fetch("http://localhost:3000/movies")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      list.innerHTML = createElements(data);
      const changeButton = document.querySelector(".change__button");
      const changeBox = document.querySelector(".change");
      const openModalButton = document.querySelector(".change__close");
      openModalButton.addEventListener("click", () => {
        changeBox.style.opacity = 1
      });

      // if (changeButton !== null && changeButton !== undefined) {
      //   console.log(list);
      //   list.addEventListener("click", (e) => {
      //     // if (e.target.classList.contains(change__button)) {
      //     //   changeBox.classList.toggle("change__invisible");
      //     // }
      //   });
      // }
    });
};

// const params = new URLSearchParams({
//     _moviename: ""
// })

export const addMovie = (title, genre, director, year) => {
  const movie = {
    title: title,
    genre: genre,
    director: director,
    year: year,
  };
  const options = {
    method: "POST",
    body: JSON.stringify(movie),
  };
  return fetch("http://localhost:3000/movies", options);
};

export const changeMovie = (title, genre, director, year) => {
  changeForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const changeID = e.target.elements.changeid.value;
    const changeTitle = e.target.elements.changetitle.value;
    const changeGenre = e.target.elements.changegenre.value;
    const changeDirector = e.target.elements.changedirector.value;
    const changeYear = e.target.elements.changeyear.value;

    const movie = {
      id: changeID,
      title: changeTitle,
      genre: changeGenre,
      director: changeDirector,
      year: changeYear,
    };
  console.log(movie)
    const options = {
      method: "PATCH",
      body: JSON.stringify(movie),
    };

    return fetch(`http://localhost:3000/movies/${changeID}`, options);
   
  });
};
