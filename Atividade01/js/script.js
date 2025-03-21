const trocarImagem = () => {
let imagem = document.getElementById("imagem")

const trocarImagens = [
    "img/homemara.jpg",
    "img/davi.jpg",
    "img/britto.jpg"
]


let indice = 0 
let numero = Math.random()  

if (numero >0.75) indice = 3;
else if (numero > 0.5) indice = 2;
else if (numero > 0.25) indice = 1;
else indice = 0;


    
imagem.src= trocarImagens[indice]
};




