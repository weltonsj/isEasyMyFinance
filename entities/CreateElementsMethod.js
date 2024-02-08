function creatFinance(finance) {
  const release = document.createElement("div");
  release.id = finance.id;
  release.classList.add("releases");

  const nameSpan = document.createElement("span");
  nameSpan.textContent = finance.name;

  const valueSpan = document.createElement("span");
  valueSpan.textContent = `${parseFloat(finance.value).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`;

  const typeSpan = document.createElement("span");
  if (finance.situation === "entrada") {
    typeSpan.textContent = "Entrada"
  };

  if (finance.situation === "saida") {
    typeSpan.textContent = "Saída"
  };

  const btnEdit = document.createElement("button");
  btnEdit.id = finance.id
  btnEdit.classList.add("btn-edit");
  btnEdit.innerText = "Editar";

  const btnDelete = document.createElement("button");
  btnDelete.id = finance.id
  btnDelete.classList.add("btn-delete");
  btnDelete.innerText = "Excluir";

  release.append(nameSpan, valueSpan, typeSpan, btnEdit, btnDelete);

  const historyContainer = document.getElementById("history-container");
  historyContainer.append(release);
};

function createTotal(finaceValue) {
  const total = document.getElementById("total");
  total.innerText = finaceValue;
};

function postFinancesData() {
  const inputFinances = {
    inpuName: document.querySelector("#name"),
    inputValue: document.querySelector("#value"),
    saveBtn: document.getElementById("save")
  };
  return inputFinances;
};

function inputFocu(input) {
  return input.focus();
};

function reloadPage() {
  return window.location.reload(true);
};

function cleanInputs() {
  postFinancesData().inpuName.value = "";
  postFinancesData().inputValue.value = "";
};

export { creatFinance, createTotal, postFinancesData, cleanInputs, inputFocu, reloadPage };