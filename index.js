const API_URL = "https://pokeapi.co/api/v2/pokemon/pikachu";
const xhr = new XMLHttpRequest();
function onRequestHandler(){
    if(this.readyState == 4 && this.status == 200){
        //0 = no se ha llamado al método open
        //1 = se ha llamado al método open
        //2 = se esta llamando al método send()
        //3 = esta recibiendola respuesta para
        //4 se ha completado la operación
        const data = JSON.parse(this.response);
        console.log(data);
        const HTMLResponse = document.querySelector("#app");
        const template = data.map(poke => `<li>hola</li>`);
        HTMLResponse.innerHTML =  `<ul>${template}</ul>`;
    }
}
xhr.addEventListener("load",onRequestHandler);
xhr.open('GET',`${API_URL}`);
xhr.send();
