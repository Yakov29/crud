import { addMovie } from "./moviesApi"
import { getMovies } from "./moviesApi"
const form = document.querySelector(".form")
const title = document.querySelector(".title")
const genre = document.querySelector(".genre")
const director = document.querySelector(".director")
const year = document.querySelector(".year")

const buttonAdd = document.querySelector(".submit")
const buttonChange = document.querySelector(".change")
const buttonDelete = document.querySelector(".delete")


form.addEventListener("submit", (e) => {
    e.preventDefault()
    const title = e.target.elements.title.value;
    const genre = e.target.elements.genre.value;
    const director = e.target.elements.director.value;
    const year = e.target.elements.year.value
    console.log(title)
    console.log(genre)
    console.log(director)
    console.log(year)
    addMovie(title, genre, director, year)
    getMovies()
})