
let paginaActual = 1;

async function traerPersonaje() {
  const res = await fetch("https://swapi.py4e.com/api/people/?page="+paginaActual);
  if (res.ok) {
    const data = await res.json();
    // document.write(data.name+"<br>"+data.height);
    console.log(data);
    const lista = document.getElementById("listaPersonajes");
    lista.innerHTML = '';

    for (let index = 0; index < data.results.length; index++) {
      console.log(data.results[index]);
      const li = document.createElement("li");
      li.innerHTML = data.results[index].name;
      lista.appendChild(li);
    }
  }
}

document.getElementById("next").addEventListener("click", () => {
    paginaActual++;
    traerPersonaje();
})

traerPersonaje();
