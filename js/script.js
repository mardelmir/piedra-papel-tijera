// Array opciones
const opciones = ['piedra', 'papel', 'tijera']


// Mostrar eleccion PC + resultado de cada partida
const resultados = document.getElementById('resultados');

const eleccionPC = document.createElement('p');
resultados.appendChild(eleccionPC);

const ronda = document.createElement('p');
resultados.appendChild(ronda);


// Contador
const contadorUsuario = document.getElementById('contador-usuario');
let puntosUsuario = 0;

const contadorPC = document.getElementById('contador-ordenador');
let puntosPC = 0;


// Selección de TODOS los botones
const botones = document.querySelectorAll('.boton-jugada');



botones.forEach((element) => {
    element.addEventListener('click', mostrarResultado)
})



function mostrarResultado() {
    const jugador = this.dataset.jugada;
    const PC = Math.floor(Math.random() * 3);
    const rondaPC = opciones[PC];

    eleccionPC.textContent = `La máquina ha elegido: ${rondaPC}`;

    comparar();

    function comparar() {

        if ((jugador == 'piedra' && rondaPC == 'tijera') || (jugador === 'papel' && rondaPC === 'piedra') || (jugador === 'tijera' && rondaPC === 'papel')) {
            ronda.textContent = 'Has ganado';
            puntosUsuario++;
            marcador();

        } else if ((jugador === 'piedra' && rondaPC === 'papel') || (jugador === 'papel' && rondaPC === 'tijera') || (jugador === 'tijera' && rondaPC === 'piedra')) {
            ronda.textContent = 'Has perdido';
            puntosPC++;
            marcador();

        } else {
            ronda.textContent = 'Empate';
            marcador();
        }

        function marcador() {
            contadorUsuario.textContent = `Tus puntos: ${puntosUsuario}`
            contadorPC.textContent = `Puntos de la máquina: ${puntosPC}`
        }
    }
}
