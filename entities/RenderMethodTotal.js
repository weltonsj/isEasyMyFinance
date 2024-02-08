function renderTotal(funcGetFinance, funcCreateTotal) {
  funcGetFinance().then(element => {
    const positiveSum = element.filter(finances => {
      return finances.situation !== "saida";
    }).reduce((acc, sum) => {
      return acc + parseFloat(sum.value);
    }, 0);

    const negativeveSum = element.filter(finances => {
      return finances.situation === "saida";
    }).reduce((acc, sum) => {
      return acc + parseFloat(sum.value);
    }, 0);

    const positiveBalance = positiveSum;
    const negativeBalance = Math.abs(negativeveSum);
    const sum = parseFloat(positiveBalance) - parseFloat(negativeBalance);
    const total = sum.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    
    funcCreateTotal(total);
  });
};

export { renderTotal };