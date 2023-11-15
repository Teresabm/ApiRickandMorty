/* constante para guardar la URL de la API */
const apiURL = "https://rickandmortyapi.com/api/character";

/* función para obtener los datos de la API */

async function getData(){
    try {
        const response = await fetch(apiURL); // nos responde un JSON - objeto
        const {results} = await response.json(); // Destructuración del objeto para solo acceder a los resultados

        /* recorrer el arreglo que devuelve la API */
        results.forEach(result => {
            showData(result);
        });
        /* console.log({results}); */
        
    } catch (error) {
        console.error(error);
    }

   
}

/* ver los datos en el DOM */
function showData(resultado){
    const container = document.querySelector('#container')
    const {name,image,status} = resultado; // Destructurizar los datos que necesitamos del objeto
    const item = document.createElement('div');
    item.classList.add("item")
    item.innerHTML = `<h4>${name}</h4>
    <img src="${image}"
    <p>${status}</p>`;
    container.appendChild(item);
}

/* mandar a llamar la función */
getData();