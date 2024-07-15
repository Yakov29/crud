import { changeMovie, getMovies } from "./moviesApi";

const changeForm = document.querySelector(".change__form");
const buttonClose = document.querySelector(".button__closemodal")
const changeBox = document.querySelector(".change");

buttonClose.addEventListener("click", () => {
  changeBox.style.opacity = 0
})

changeForm.addEventListener("submit", (e) => {
    e.preventDefault()
    const id = e.target.elements.changeid.value
    const title = e.target.elements.changetitle.value
    const genre = e.target.elements.changegenre.value
    const director = e.target.elements.changedirector.value
    const year = e.target.elements.changeyear.value
    changeMovie(id, title, genre, director, year)
    getMovies();
})

