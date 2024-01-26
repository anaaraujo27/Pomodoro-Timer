const timerEl = document.getElementById('timer');
const marksList = document.getElementById('marks-list');
let intervaloId = 0;
let timer = 0;
let marks = [];

const formatTime = (time) => {
    const horas = Math.floor(time / 360000);
    const minutos = Math.floor((time % 360000) / 6000);
    const segundos = Math.floor((time % 6000) / 100);
    const hundre = time % 100;

    return `${horas.toString().padStart(2, '0')}:${minutos.toString().padStart(2, '0')}:${segundos.toString().padStart(2, '0')}:${hundre.toString().padStart(2, '0')}`;
}

const Ttimer = () => {
    const button = document.getElementById('power')
    const actions = button.getAttribute('actions')

    clearInterval(intervaloId);

    if (actions == 'start' || actions == 'continue') {
        intervaloId = setInterval(() => {
         timer += 1;  
         setTimer(timer)
    }, 10);

    button.setAttribute('actions', 'pause');
    button.innerHTML = '<i class="fa-solid fa-pause"></i>';

    } else if (actions == 'pause') {
    button.setAttribute('actions', 'continue');
    button.innerHTML = '<i class="fa-solid fa-play"></i>';
    }
}

const setTimer = (time) => {
    timerEl.innerText =formatTime(timer);
}


document.getElementById('power').addEventListener('click', Ttimer)