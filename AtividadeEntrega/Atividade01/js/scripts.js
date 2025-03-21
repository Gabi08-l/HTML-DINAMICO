//ATV 1



const ligar = () => {
  let lampada = document.getElementById("lampada");

  //lampada.src = "img/acesa.jpg"
  //};

  if (lampada.src.includes("apagada.jpg")) lampada.src = "img/acesa.jpg";
  else lampada.src = "img/apagada.jpg";
};
//==========================================================================
//ATV2

const gerarImagem = () => {
  let qtdImagem = document.getElementById("inQtdImg").value;
  let canvas = document.getElementById("canvas")
canvas.innerHTML="";

  if(qtdImagem <= 0) alert("O campo quantidade não pode estar nulo ou negativo!")
else{
  for (let index = 1; index <= qtdImagem; index++) {
    canvas.innerHTML += "<img src='img/davi.jpg' alt=''>";
  }
  }
}



//--------------------------------------------------------------------------
//ATV 3

const validaForm = () => {
  let erro = document.getElementById("mensagem-erro");
  erro.innerHTML = "";
  
  let nome = inCli;
  let data = inData;
  let fone = inFone;
  let mail = inMail;
  let prod = inProd;
  let qtd = inQtd;
  let val = inVal;


  switch (true) {
    case nome.value.trim() == "" ||
      data.value == "" ||
      fone.value == "" ||
      mail.value == "" ||
      prod.value == "" ||
      qtd.value == "" ||
      val.value == "":
      erro.style.display = "block";
      erro.innerHTML = "Erro: O campo não pode estar vazio!";
      break;


    case val.value < 0 || qtd.value < 0:
      erro.style.display = "block";
      erro.innerHTML = "Erro: Este campo não pode ser negativo!";


      break;


    case nome.value.trim().length < 5 || prod.value.trim().length < 5:
      erro.innerHTML = "O campo texto não pode ter menos que 5 caracteres!";
      erro.style.display = "block";
      break;


    default:
      break;
  }
};




//ATV 4
const calcular =() =>{
  let valPedido = inValorPedido.value;
  let perDesconto = inPercDesc.value;
  let valDesconto = inValDesc.value;
  let valFinalPedido = inValFinal.value;

  if(valPedido >= 2000){
    perDesconto = 1.5
    //apicar desconto de 1.5%
  }else if(valPedido >= 1500){
    perDesconto = 1

  } else if(valPedido>= 1000){
    perDesconto = 0.8

  }else if (valPedido>= 500){
   perDesconto = 0.5

  }else{
   perDesconto = 0
  }

  valDesconto = (valPedido * perDesconto) / 100;
  alert(valDesconto)
  valFinalPedido = valPedido - valDesconto
  inPercDesc.value = perDesconto;
  inValDesc.value = valDesconto.toFixed(2)
  inValFinal.value = valFinalPedido.toFixed(2)
};





























// const validaForm = () => {
//   let erro = document.getElementById("mensagem-erro");

//   let nome = inCil;
//   let data = inData;
//   let fone = inFone;
//   let mail = inMail;
//   let prod = inProd;
//   let qtd = inQtd;
//   let val = inVal;

// if (nome.value.trim() ==""){
//   erro.innerHTML = "Erro: o campo nome não pode estar vazio!\n"
//   erro.style.display = "block"
// return false;

// }
// if (data.value.trim() ==""){
//   erro.innerHTML = "Erro: o campo data não pode estar vazio!\n"
//   erro.stryle.display = "block"
// return false;
// }
// if (fone.value.trim() ==""){
//   erro.innerHTML = "Erro: o campo telefone não pode estar vazio!\n"
//   erro.stryle.display = "block"
//   return false;

// }
// if (mail.value.trim() ==""){
//   erro.innerHTML = "Erro: o campo email não pode estar vazio!\n"
//   erro.stryle.display = "block"
//   return false;
  
// }
// if (prod.value.trim() ==""){
//   erro.innerHTML = "Erro: o campo produto não pode estar vazio!\n"
//   erro.stryle.display = "block"
//   return false;

// }
// if (qtd.value.trim() ==""){
//   erro.innerHTML = "Erro: o campo quantidade não pode estar vazio!\n"
//   erro.stryle.display = "block"
//   return false;

// }
// if (val.value.trim() ==""){
//   erro.innerHTML = "Erro: o campo valor não pode estar vazio!\n"
//   erro.stryle.display = "block"
// return false;

// }
// };
