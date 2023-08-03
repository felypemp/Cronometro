const relogio = document.querySelector('.relogio');
const btnIniciar = document.querySelector('.iniciar');
const btnPausar = document.querySelector('.pausar');
const btnZerar = document.querySelector('.zerar');
let segundos = 0;


function iniciarRelogio(){
    const timer = setInterval(() =>{
        segundos++;
        relogio.innerHTML = criaHoraDosSegundos(segundos)
    }, 1000)
}

function criaHoraDosSegundos(segundos){
    const data = new Date(segundos * 1000);
    return data.toLocaleTimeString('pt-BR', { hour12: false, timeZone: 'GMT'})
}

btnIniciar.addEventListener('click', function(e) {
    iniciarRelogio();
})


btnPausar.addEventListener('click', function(e) {
    alert('cliquei')
})


btnZerar.addEventListener('click', function(e) {
    alert('cliquei')
})