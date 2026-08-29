// Globale Variablen
let currentAudio = null;
let currentmode = 'play'; // Standardmodus: 'play'

function fullscreen() {
    if (document.fullscreenElement) {
        document.exitFullscreen();
    } else {
        document.documentElement.requestFullscreen();
    }
}

function zoom() {
    const small0 = document.getElementById('small0'); 
    const small1 = document.getElementById('small1');

    // Schaltet hin und her zwischen normaler Ansicht und Zoom-Ansicht
    if (small0) small0.classList.toggle('hidden');
    if (small1) small1.classList.toggle('hidden');
}

function startLoop() {
    document.getElementById('play-button').classList.add('hidden');
    document.getElementById('loop-button').classList.remove('hidden');
    currentmode = 'loop'; 
}

function stopLoop() {
    if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0; // Zurück zum Start spulen
    }

    document.getElementById('loop-button').classList.add('hidden');
    document.getElementById('play-button').classList.remove('hidden');
    currentmode = 'play'; // Modus wieder auf 'play' setzen
}

// Hilfsfunktion zur Vermeidung von doppeltem Code
function playSound(soundFile) {
    if (currentAudio) { 
        currentAudio.pause(); 
    }
    
    currentAudio = new Audio(soundFile);
    currentAudio.loop = (currentmode === 'loop'); // Setzt automatisch true/false
    currentAudio.play();
}

// Einzelne Aufrufe für die Buttons im HTML
function playSound1() {
    playSound('klingeln.mp3');
}

function playSound2() {
    playSound('klopfen.mp3');
}

function playSound3() {
    playSound('fireworkblast.mp3');
}
