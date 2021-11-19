const calcular = document.getElementById('calcular');

function teste () {
    const financiamento = document.getElementById('financiamento').value
  const renda = document.getElementById('renda').value
  const entrada = document.getElementById('entrada').value
  const prestacoes = document.getElementById('prestacoes').value
  let juros = document.getElementById('juros').value
  const resultadotext = document.getElementById('resultadotext');

  jurosDecimal = (juros / 100)

  if(financiamento !== '' && renda !== '' && entrada !== '' && juros !== '' && prestacoes !== ''){
   
    const PV = financiamento - entrada;
    const maximumValue = renda * 0.3;

    const PMT = ((PV*(1+jurosDecimal) ** prestacoes *(jurosDecimal)) / ((1 + jurosDecimal)**prestacoes-1)).toFixed(2);

    if (PMT <= maximumValue) {
      resultado = "aprovado com sucesso";
    }else{
      resultado = "recusado.";
    }

    resultadotext.textContent = `O valor ${PV} foi parcelado em ${prestacoes} prestacoes com ${juros}% de juros mensais, resultando no valor total de R$ ${PMT} por parcela. Tendo em vista o seu salario de R$ ${renda} e o seu limite de R$ ${maximumValue} para cada parcela, o seu financiamento foi ${resultado}!`;
  }else{
    alert('Por favor preencha todos os camps para que o financiamento possa ser feito.')
  }  

}
calcular.addEventListener('click', teste);