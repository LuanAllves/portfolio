const introContent = document.querySelector('.intro-content');
const sobreSection = document.getElementById('sobre');
const sobreTexto = document.getElementById('sobre-texto');
const textoSobre = "Olá, me chamo Luan e estou em transição de carreira. Atualmente sou tecnico de instalação em uma empresa de paineis de led, e este é meu portfólio."; // Substitua pelo seu texto
let index = 0;

function subirNomeDescricao() {
    introContent.classList.add('fixed'); // Adiciona a classe .fixed
    setTimeout(mostrarSobre, 1000); // Mostra "Sobre Mim" após 1 segundo
}

function mostrarSobre() {
    sobreSection.style.opacity = 1;
    setTimeout(digitarTexto, 2000);
}

function digitarTexto() {
    if (index < textoSobre.length) {
        sobreTexto.textContent += textoSobre.charAt(index);
        index++;
        setTimeout(digitarTexto, 85); // Ajuste a velocidade da digitação
    } else {
        setTimeout(deslizarSobre, 2000); // Deslizar "Sobre Mim" após 2 segundos
    }
}

function deslizarSobre(){
    sobreSection.classList.add('deslizado');
}

setTimeout(subirNomeDescricao, 2000);