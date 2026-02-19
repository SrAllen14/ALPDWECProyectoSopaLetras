const urlPalabras = 'https://random-word-api.herokuapp.com/word?number=42&lang=es&length=6';
const listaPalabras = document.querySelector('#listaPalabras');
 
 fetch(urlPalabras)
        .then(response => response.json())
        .then((data) => {
            data.results.forEach(palabra => {
            const pPalabra = document.createElement("p");
            pPalabra.textContent = palabra;
            listaPalabras.append(pPalabra);
    });
    console.log(listaPalabras);
})
.catch(error => console.error(error));
