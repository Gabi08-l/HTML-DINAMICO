//criou item qnd clicar enviar alerta na ação
frmExemplo.inNome.focus();

const validarDados = () => {
  let nome = frmExemplo.inNome.value;
  let idade = frmExemplo.inIdade.value;

  if (nome.trim() == "") {
    alert("O campo não pode estar vazio!");
    frmExemplo.inNome.focus();
    return false;
  }
  if (idade.trim() == "" || idade < 0) {
    alert("o campo não pode estar vazio ou negativo!");
    frmExemplo.inIdade.focus();
    return false;
  }

  if (nome.trim() != "" && idade.trim() != "" && idade > 0) {
    alert("Formulário enviado!");
    location.reload();
  }
};
