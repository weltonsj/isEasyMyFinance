function renderFinaces(funcGetFinances, funcCreatFinance) {
  funcGetFinances().then(element => {
    element.forEach(finance => {
      funcCreatFinance(finance);
    });
  });
};

export { renderFinaces };