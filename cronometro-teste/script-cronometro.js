const timerEl = document.getElementById('timer');
const marksList = document.getElementById('marks-list');
let intervaloId = 0;
let timer = 0;
let marks = [];

const formatTime = (time) => {
    const horas = Math.floor(time / 360000);
    const minutos = Math.floor(time / 360000 / 6000);
    const segundos = Math.floor(time / 360000 / 100);
    const hundre = time % 100;

    return `${horas.toString().padStart(2, '0') minutos.toString().padStart(2, '0')}`;
}
