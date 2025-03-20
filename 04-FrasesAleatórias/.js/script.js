//criando a função de flexa com frases aleatorias
const falar = () =>{
    //criando o vetor de frases
const frases = [
    "Hoje esta um dia bonito!",
    "Falta muito pra sexta feira?",
    "Qual o cardápio de hoje no almoço",
    "Vish, tem prova de matemática!",
];


//Criando uma variavel para armazenar a DIV com id "tagarela"
let tagarela = document.getElementById("tagarela");
let indice = 0 //criando var de controle p frase exibida
let numero = Math.random()  // configurando o num oara a frase selecionada

if (numero >0.75) indice = 3;
else if (numero > 0.5) indice = 2;
else if (numero > 0.25) indice = 1;


//escreve as frases para o usuario
tagarela.innerHTML = frases[indice];

}
    

      
    
