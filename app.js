const header = document.getElementById('h1');
const container = document.getElementById('container');
const boxes = document.querySelectorAll('.box');

// const kick_A = document.getElementById('kick');
// const snare_S = document.getElementById('snare');
// const hat_D = document.getElementById('hat');
// const crash_F = document.getElementById('crash');
// const ride_G = document.getElementById('ride');
// const htom_H = document.getElementById('htom');
// const ltom_J = document.getElementById('ltom');
// const ftom_K = document.getElementById('ftom');
// const rim_L = document.getElementById('rim');

const kickS = new Audio('audio/kick.wav');
const snareS = new Audio('audio/snare.wav');
const hatS = new Audio('audio/hat.wav');
const crashS = new Audio('audio/crash.wav')
const rideS = new Audio('audio/ride.wav');
const htomS = new Audio('audio/htom.wav');
const ltomS = new Audio('audio/ltom.wav');
const ftomS = new Audio('audio/ftom.wav');
const rimS = new Audio('audio/rim.wav');


const data = {
    A : kickS,
    S : snareS,
    D : hatS,
    F : crashS,
    G : rideS,
    H : htomS,
    J : ltomS,
    K : ftomS,
    L : rimS
};

boxes.forEach((box) => {
    box.addEventListener('click', (e) => {
        data[e.target.innerText].play();
    });
});

document.addEventListener('keydown', (e) => {
        if (e.key.toUpperCase() in data) {
        data[e.key.toUpperCase()].play();
        } else return;
    });
