
export const createElements = (data) => {
  return data
    .map((element) => {
      return `
    <li>
      <h2 class="title">${element.title}</h2>
      <span class="genre">${element.id}</span>
      <span class="genre">${element.genre}</span>
      <span class="director">${element.director}</span>
      <span class="year">${element.year}</span>
      <button class="change__close">change</button>
    </li>`;
    })
    .join("");
};
{/* <button class="change__button" type="button">Edit</button> */}