const form = document.getElementById("form");
const div = document.getElementById("div");

const fetchPokemon = async () => {
  const pokemon = document.getElementById("input").value;
  const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`, {
    method: "GET",
  })
    .then((res) => {
      return res.json();
    })
    .then((res) => res.sprites.back_default)
    .catch((err) => console.log("err", err));

    console.log(data);

    if(data){

      div.innerHTML = '';
      const img = document.createElement("img");
    img.src = data
    img.classList.add("each")
    div.appendChild(img)
    }else{
      div.innerHTML = '';
      const p = document.createElement("p");
      p.textContent =`pokemon not found`;
      div.appendChild(p);
    }
    
    
    
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetchPokemon();
});
