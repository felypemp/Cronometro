const relogio = document.querySelector('.relogio');
const btnIniciar = document.querySelector('.iniciar');
const btnPausar = document.querySelector('.pausar');
const btnZerar = document.querySelector('.zerar');
let segundos = 0;
let timer;


function iniciarRelogio(){
    timer = setInterval(() =>{
        segundos++;
        relogio.innerHTML = criaHoraDosSegundos(segundos)
    }, 1000)
}

function criaHoraDosSegundos(segundos){
    const data = new Date(segundos * 1000);
    return data.toLocaleTimeString('pt-BR', { hour12: false, timeZone: 'GMT'})
}

btnIniciar.addEventListener('click', function(e) {
    clearInterval(timer);
    iniciarRelogio();
    relogio.classList.remove('pausado')
})


btnPausar.addEventListener('click', function(e) {
    clearInterval(timer)
    relogio.classList.add('pausado')
})


btnZerar.addEventListener('click', function(e) {
    clearInterval(timer);
    relogio.innerHTML = '00:00:00'
    segundos = 0;
    relogio.classList.remove('pausado')
})