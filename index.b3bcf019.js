const e=e=>e.map(e=>`
    <li>
      <h2 class="title">${e.title}</h2>
      <span class="genre">${e.id}</span>
      <span class="genre">${e.genre}</span>
      <span class="director">${e.director}</span>
      <span class="year">${e.year}</span>
      <button class="change__close">change</button>
    </li>`).join(""),t=document.querySelector(".change__form"),n=document.querySelector(".button__closemodal"),r=document.querySelector(".change");n.addEventListener("click",()=>{r.style.opacity=0}),t.addEventListener("submit",e=>{e.preventDefault();let t=e.target.elements.changeid.value,n=e.target.elements.changetitle.value;u(t,n,e.target.elements.changegenre.value,e.target.elements.changedirector.value,e.target.elements.changeyear.value),l()});const c=document.querySelector(".list");document.querySelector(".title"),document.querySelector(".genre"),document.querySelector(".director"),document.querySelector(".year");const o=document.querySelector(".change__form"),l=()=>fetch("http://localhost:3000/movies").then(e=>e.json()).then(t=>{console.log(t),c.innerHTML=e(t),document.querySelector(".change__button");let n=document.querySelector(".change");document.querySelector(".change__close").addEventListener("click",()=>{n.style.opacity=1})}),a=(e,t,n,r)=>fetch("http://localhost:3000/movies",{method:"POST",body:JSON.stringify({title:e,genre:t,director:n,year:r})}),u=(e,t,n,r)=>{o.addEventListener("submit",e=>{e.preventDefault();let t=e.target.elements.changeid.value,n=e.target.elements.changetitle.value,r={id:t,title:n,genre:e.target.elements.changegenre.value,director:e.target.elements.changedirector.value,year:e.target.elements.changeyear.value};return console.log(r),fetch(`http://localhost:3000/movies/${t}`,{method:"PATCH",body:JSON.stringify(r)})})};l(),document.querySelector(".change"),document.querySelector(".change__button");const s=document.querySelector(".form");document.querySelector(".title"),document.querySelector(".genre"),document.querySelector(".director"),document.querySelector(".year"),document.querySelector(".submit"),document.querySelector(".change"),document.querySelector(".delete"),s.addEventListener("submit",e=>{e.preventDefault();let t=e.target.elements.title.value,n=e.target.elements.genre.value,r=e.target.elements.director.value,c=e.target.elements.year.value;console.log(t),console.log(n),console.log(r),console.log(c),a(t,n,r,c),l()});
//# sourceMappingURL=index.b3bcf019.js.map
