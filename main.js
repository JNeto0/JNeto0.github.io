var elementosduvida = document.querySelectorAll(".duvida");

//forEach = para cada
elementosduvida.forEach(function (duvida) {
  //Adicionar um ouvidor de eventos
  duvida.addEventListener("click", function () {
    duvida.classList.toggle("ativa")
  });
});

// Obtém todas as imagens com a classe 'imagem'
const imagens = document.querySelectorAll('.imagem');

// Adiciona um evento de mouse para cada imagem
imagens.forEach(imagem => {
    imagem.addEventListener('mouseenter', () => {
        // Quando o mouse entra na imagem, move a imagem para cima e aumenta seu tamanho
        imagem.style.transform = 'translateY(-10px) scale(1.1)';
    });

    imagem.addEventListener('mouseleave', () => {
        // Quando o mouse sai da imagem, restaura sua posição e tamanho originais
        imagem.style.transform = 'translateY(0) scale(1)';
    });
});

