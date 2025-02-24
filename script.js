const horario = document.getElementById('horario');
const data = new Date();
const hora = data.getHours()

if (hora >= 6 && hora < 12) {
    horario.innerHTML = 'Bom Dia!'
} else if (hora >= 12 && hora < 18) {
    horario.innerHTML = 'Boa Tarde!'
} else if (hora >= 18 && hora < 0) {
    horario.innerHTML = 'Boa Noite!'
} else {
    horario.innerHTML = 'Boa Madrugada!'
}

