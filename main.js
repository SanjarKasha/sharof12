import { movies } from "./movies.js";
console.log(movies);

const mainCard = document.getElementById("mainCard");

function renderList(item) {
  item.forEach((product) => {
    const div = document.createElement("div");
    div.classList.add("card");
    div.innerHTML = `
    <div class="card bg-base-100 w-96  bg-pink-500 ">
     
    <figure>
        <img class="w-max" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Hollywood_Sign_%28Zuschnitt%29.jpg/960px-Hollywood_Sign_%28Zuschnitt%29.jpg" alt="Shoes" />
      </figure>
      <div class="card-body flex ">
        <h2 class="card-title ">${product.Title}</h2>
        <p class="text-xl"> ${product.language}</p>
        <p> move category ${product.Categories}</p>
        <p class="text-2xl"> year ${product.movie_year}</p>
      </div>
    </div>
    `;
    mainCard.append(div);
  });
}

renderList(movies);

let input = document.querySelector("#input");
const az = document.getElementById("az");
const za = document.getElementById("za");
const all = document.getElementById("all");

input.addEventListener("input", (e) => {
  mainCard.innerHTML = "";
  console.log(e.target.value);
  let qwerty = e.target.value.toLowerCase();

  const filtred = movies.filter((movies) =>
    String(movies.Title).toLowerCase().includes(qwerty)
  );

  console.log(filtred);

  renderList(filtred);
});

az.addEventListener("click", () => {
  mainCard.innerHTML = "";
  const sorted = movies.sort((a, b) => String(a.Title).localeCompare(b.Title));
  renderList(sorted);
});

za.addEventListener("click", () => {
  mainCard.innerHTML = "";
  const sorted = movies.sort((a, b) => String(b.Title).localeCompare(a.Title));
  renderList(sorted);
});

all.addEventListener("click", () => {
  mainCard.innerHTML = "";
  renderList(movies);
});
