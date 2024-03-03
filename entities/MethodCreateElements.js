function renderTransaction(finance) {
  const release = document.createElement("div");
  const spanGroup = document.createElement("div");
  const btnGroup = document.createElement("div");

  release.id = finance.id
  release.classList.add("releases");
  spanGroup.classList.add("spangroup")
  btnGroup.classList.add("btngroup");

  const nameSpan = document.createElement("span");
  nameSpan.textContent = finance.name;

  const valueSpan = document.createElement("span");
  valueSpan.textContent = `${parseFloat(finance.value).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`;

  const typeSpan = document.createElement("span");
  if (finance.situation === "entrada") {
    typeSpan.textContent = "Entrada"
    valueSpan.classList.add("entrada");
    typeSpan.classList.add("entrada");
  };

  if (finance.situation === "saida") {
    typeSpan.textContent = "Saída"
    valueSpan.classList.add("saida");
    typeSpan.classList.add("saida");
  };

  const btnEdit = document.createElement("button");
  btnEdit.classList.add(finance.id);
  btnEdit.classList.add("btn-edit");
  btnEdit.innerText = "Editar";

  const btnDelete = document.createElement("button");
  btnDelete.classList.add(finance.id);
  btnDelete.classList.add("btn-delete");
  btnDelete.innerText = "Excluir";

  spanGroup.append(nameSpan, valueSpan, typeSpan);
  btnGroup.append(btnEdit, btnDelete);
  release.append(spanGroup, btnGroup);

  const historyContainer = document.getElementById("history-container");
  historyContainer.append(release);
};

function renderTotalAmountBalance(finaceValue) {
  const total = document.getElementById("total");
  total.innerText = finaceValue;
};

function inputTransactionData() {
  const inputFinances = {
    transactionID: document.getElementById("id"),
    inputName: document.getElementById("name"),
    inputValue: document.getElementById("value"),
  };
  return inputFinances;
};

/**
   * @param {*} active - "on" = Para ligado.
   * @param {*} active - "off" = Para deligado.
   * @returns {void} 
*/
function spanError(id, msg = "Error!", active = "on") {
  const span = document.getElementById(id);
  if (active === "on") {
    span.style.display = "initial"
    span.innerText = msg;
  }
  if (active === "off") {
    span.style.display = "none"
  }
};

/**
 * 
 * @param {*} id - Elemento a ser afetado.
 * @param {*} active - "on" para ligado.
 * @param {*} active - "off" para desligado.
 * @returns {void}
 */
function classError(id, active = "on") {
  const input = document.getElementById(id);
  if (active === "on") {
    return input.classList.add("error");
  };

  if (active === "off") {
    return input.classList.remove("error");
  };
};

function checkedInputs() {
  inputTransactionData().inputName.addEventListener("focus", () => {
    classError("name", "off");
    spanError("error-name", "", "off");
  });
  inputTransactionData().inputValue.addEventListener("focus", () => {
    classError("value", "off");
    spanError("error-value", "", "off");
  });
};

export { renderTransaction, renderTotalAmountBalance, inputTransactionData, spanError, classError, checkedInputs };