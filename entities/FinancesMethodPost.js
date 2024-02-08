import { cleanInputs, inputFocu, postFinancesData, reloadPage } from "./CreateElementsMethod.js";

function postFinance(funcGetFinances, funcResponsePOST) {
  postFinancesData().saveBtn.addEventListener("click", () => {
    const inputsData = {
      name: postFinancesData().inpuName.value,
      value: postFinancesData().inputValue.value.replace(" ", "")
    };
    inputsData.value.includes("-") ? inputsData.situation = "saida" : inputsData.situation = "entrada";
    if (inputsData.name !== "" && inputsData.value !== "") {
      funcGetFinances().then(element => {
        const listName = [];
        element.forEach(finance => {
          let nameFound = finance.name.replace(" ", "").toLowerCase()
          listName.push(nameFound)
        })
        if (listName.includes(inputsData.name.replace(" ", "").toLowerCase())) {
          alert(`O nome ${inputsData.name} já está em uso.`)
        } else {
          funcResponsePOST(inputsData);
          reloadPage();
        }
      });
    } else {
      alert(`Os campos "Nome" e "Valor" não pode estar vazio.`);
    };
    cleanInputs();
    inputFocu(postFinancesData().inpuName);
  });
};

export { postFinance };