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
    const small0 = document.getElementById('small0'); // Korrigiert: mit doppel-'l'
    const small1 = document.getElementById('small1');

    // Schaltet hin und her zwischen normaler Ansicht und Zoom-Ansicht
    small0.classList.toggle('hidden');
    small1.classList.toggle('hidden');
}

function startLoop() {
    document.getElementById('play-button').classList.add('hidden');
    document.getElementById('loop-button').classList.remove('hidden');
    currentmode = 'loop'; // Tippfehler 'curentmode' behoben!
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

// Einzelne Aufrufe nutzen jetzt die Hilfsfunktion
function playSound1() {
    playSound('klingeln.mp3');
}

function playSound2() {
    playSound('klopfen.mp3');
}

function playSound3() {
    playSound('fireworkblast.mp3');
}