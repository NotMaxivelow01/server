const httpsRequest = new XMLHttpRequest();
function reqListener(event) {
    console.log('onload: ', event)
    console.log(httpsRequest.response)
}
httpsRequest.onload = reqListener;
httpsRequest.onabort = (event) => {
    console.log('neabord: ', event)
}
httpsRequest.onerror = (event) => {
    console.log('onerror: ', event)
}
httpsRequest.onloadend = (event) => {
    console.log('onloadend: ', event)
}
httpsRequest.onloadstart = (event) => {
    console.log('onloadstart: ', event)
}
httpsRequest.onprogress = (event) => {
    console.log('onprogress: ', event)
}
httpsRequest.onreadystatechange = (event) => {
    console.log('onreadystatechange: ', event)
}
httpsRequest.ontimeout = (event) => {
    console.log('ontimeout: ', event)
}
httpsRequest.open('GET', 'http://localhost:3000', true);
httpsRequest.send();


const envoyer = document.getElementById('envoie');

envoie.addEventListener('click', () =>{
    httpsRequest.open('GET', 'http://localhost:3000', true);
    httpsRequest.send();
})

const annuler = document.getElementById('annuler')

envoie.addEventListener('click', () =>{
    httpsRequest.abort();
})