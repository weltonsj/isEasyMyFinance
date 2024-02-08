import { postFinancesData, reloadPage } from "./CreateElementsMethod.js";

function putFinance(funcGetFinances, funcResponsePUT) {
  document.addEventListener("click", btn => {
    const inputsData = {
      name: postFinancesData().inpuName.value,
      value: postFinancesData().inputValue.value.replace(" ", "")
    };

    function situation() {
      return inputsData.value.includes("-") ? inputsData.situation = "saida" : inputsData.situation = "entrada";
    };

    if (btn.target.classList.value === "btn-edit") {
      if (inputsData.name === "" && inputsData.value === "") {
        alert("Pelo menos um dos campos não pode estar vazio.")
      };
      if (inputsData.name !== "" || inputsData.value !== "") {
        funcGetFinances().then(element => {
          element.forEach(finance => {
            if (parseFloat(btn.target.id) === finance.id) {
              if (inputsData.name === "") {
                inputsData.name = finance.name;
                situation();
                const confirmValue = confirm(`Tem certeza que deseja Atualizar os valor?
                \nValor: R$ ${finance.value}
                \npara >
                \nValor: R$ ${inputsData.value}`);
                confirmValue ? funcResponsePUT(btn.target.id, inputsData) : ""

              } else if (inputsData.value === "") {
                inputsData.value = finance.value;
                inputsData.situation = finance.situation;
                const confirmName = confirm(`Tem certeza que deseja Atualizar os nome?
                \nNome: ${finance.name}
                \npara >
                \nNome: ${inputsData.name}`);
                confirmName ? funcResponsePUT(btn.target.id, inputsData) : ""

              } else {
                situation();
                const confirmData = confirm(`Tem certeza que deseja Atualizar as informações?
                \nNome: ${finance.name}\nValor: ${finance.value}
                \npara >
                \nNome: ${inputsData.name}\nValor: ${inputsData.value}`);
                confirmData ? funcResponsePUT(btn.target.id, inputsData) : ""
              };
              reloadPage();
            };
          });
        })
      };
    };
  });
};

export { putFinance };