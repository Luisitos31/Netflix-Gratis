const horario = document.getElementById('horario');
const data = new Date();
const hora = data.getHours()

if (hora >= 6 && hora < 12) {
    horario.innerHTML = 'Bom Dia!'
} else if (hora >= 12 && hora < 18) {
    horario.innerHTML = 'Boa Tarde!'
} else if (hora >= 18 && hora < 24) {
    horario.innerHTML = 'Boa Noite!'
} else {
    horario.innerHTML = 'Boa Madrugada!'
}


// Planeta dos Macacos

const modalPM = document.getElementById('modalPM')
const conteudoPM = document.getElementById('conteudoPM')
const fecharPM = document.getElementById('fecharPM')
const PM = document.getElementById('PM')

PM.addEventListener('click', function(){
    modalPM.style.display = 'flex'
    document.body.style.width = "100%";
    setTimeout(function(){
        conteudoPM.style.opacity = '1'
        conteudoPM.style.transform = 'scale(1)'
    }, 0)
})

fecharPM.addEventListener('click', function(){
    conteudoPM.style.opacity = '0'
    conteudoPM.style.transform = 'scale(0.5)'

setTimeout(function(){
    modalPM.style.display = 'none'
}, 300)
})

// Motoqueiro Fantasma

const modalMF = document.getElementById('modalMF')
const conteudoMF = document.getElementById('conteudoMF')
const fecharMF = document.getElementById('fecharMF')
const MF = document.getElementById('MF')

MF.addEventListener('click', function(){
    modalMF.style.display = 'flex'
    setTimeout(function(){
        conteudoMF.style.opacity = '1'
        conteudoMF.style.transform = 'scale(1)'
    }, 0)
})

fecharMF.addEventListener('click', function(){
    conteudoMF.style.opacity = '0'
    conteudoMF.style.transform = 'scale(0.5)'

setTimeout(function(){
    modalMF.style.display = 'none'
}, 300)
})

// Peppa Pig: The Movie

const modalPP = document.getElementById('modalPP')
const conteudoPP = document.getElementById('conteudoPP')
const fecharPP = document.getElementById('fecharPP')
const PP = document.getElementById('PP')

PP.addEventListener('click', function(){
    modalPP.style.display = 'flex'
    setTimeout(function(){
        conteudoPP.style.opacity = '1'
        conteudoPP.style.transform = 'scale(1)'
    }, 0)
})

fecharPP.addEventListener('click', function(){
    conteudoPP.style.opacity = '0'
    conteudoPP.style.transform = 'scale(0.5)'

setTimeout(function(){
    modalPP.style.display = 'none'
}, 300)
})

// Velozes e Furiosos

const modalVF = document.getElementById('modalVF')
const conteudoVF = document.getElementById('conteudoVF')
const fecharVF = document.getElementById('fecharVF')
const VF = document.getElementById('VF')

VF.addEventListener('click', function(){
    modalVF.style.display = 'flex'
    setTimeout(function(){
        conteudoVF.style.opacity = '1'
        conteudoVF.style.transform = 'scale(1)'
    }, 0)
})

fecharVF.addEventListener('click', function(){
    conteudoVF.style.opacity = '0'
    conteudoVF.style.transform = 'scale(0.5)'

setTimeout(function(){
    modalVF.style.display = 'none'
}, 300)
})

// Minions 777

const modalM7 = document.getElementById('modalM7')
const conteudoM7 = document.getElementById('conteudoM7')
const fecharM7 = document.getElementById('fecharM7')
const M7 = document.getElementById('M7')

M7.addEventListener('click', function(){
    modalM7.style.display = 'flex'
    setTimeout(function(){
        conteudoM7.style.opacity = '1'
        conteudoM7.style.transform = 'scale(1)'
    }, 0)
})

fecharM7.addEventListener('click', function(){
    conteudoM7.style.opacity = '0'
    conteudoM7.style.transform = 'scale(0.5)'

setTimeout(function(){
    modalM7.style.display = 'none'
}, 300)
})

// Madagascar: A Origem

const modalMD = document.getElementById('modalMD')
const conteudoMD = document.getElementById('conteudoMD')
const fecharMD = document.getElementById('fecharMD')
const MD = document.getElementById('MD')

MD.addEventListener('click', function(){
    modalMD.style.display = 'flex'
    setTimeout(function(){
        conteudoMD.style.opacity = '1'
        conteudoMD.style.transform = 'scale(1)'
    }, 0)
})

fecharMD.addEventListener('click', function(){
    conteudoMD.style.opacity = '0'
    conteudoMD.style.transform = 'scale(0.5)'

setTimeout(function(){
    modalMD.style.display = 'none'
}, 300)
})

// Nicolas Netto

const modalNN = document.getElementById('modalNN')
const conteudoNN = document.getElementById('conteudoNN')
const fecharNN = document.getElementById('fecharNN')
const NN = document.getElementById('NN')

NN.addEventListener('click', function(){
    modalNN.style.display = 'flex'
    setTimeout(function(){
        conteudoNN.style.opacity = '1'
        conteudoNN.style.transform = 'scale(1)'
    }, 0)
})

fecharNN.addEventListener('click', function(){
    conteudoNN.style.opacity = '0'
    conteudoNN.style.transform = 'scale(0.5)'

setTimeout(function(){
    modalNN.style.display = 'none'
}, 300)
})

// Minecarft: The Movie

const modalMC = document.getElementById('modalMC')
const conteudoMC = document.getElementById('conteudoMC')
const fecharMC = document.getElementById('fecharMC')
const MC = document.getElementById('MC')

MC.addEventListener('click', function(){
    modalMC.style.display = 'flex'
    setTimeout(function(){
        conteudoMC.style.opacity = '1'
        conteudoMC.style.transform = 'scale(1)'
    }, 0)
})

fecharMC.addEventListener('click', function(){
    conteudoMC.style.opacity = '0'
    conteudoMC.style.transform = 'scale(0.5)'

setTimeout(function(){
    modalMC.style.display = 'none'
}, 300)
})


