import { saveTransaction, transactions, updateTransaction } from "./APIMethodTransactions.js";
import { checkedInputs, classError, inputTransactionData, renderTransaction, spanError } from "./MethodCreateElements.js";
import { editTransaction } from "./MethodEditTransaction.js";
import { removeTransaction } from "./MethodRemoveTransaction.js";
import { updateTransactionsAmount } from "./TransactionsViewerRender.js";

async function saveIpuntTransaction(ev) {
  ev.preventDefault();
  const name = inputTransactionData().inputName.value;
  const amount = inputTransactionData().inputValue.value;
  const IDspan = inputTransactionData().transactionID.value;
  let situation;
  
  if (name === "" && amount !== "") {
    classError("name", "on");
    spanError("error-name", "Campo Nome é obrigatótio.", "on");
  };
  
  if (amount === "" && name !== "") {
    classError("value", "on");
    spanError("error-value", "Campo Valor é obrigatótio.", "on");
  };

  const regex = /[a-zA-z\+=*/,#@%¨!:;()&"$]+/g;
  if (regex.test(amount)) {
    classError("value", "on");
    spanError("error-value", "O número que você inseriu não é válido!", "on");
  } else {
    amount < 0 ? situation = "saida" : situation = "entrada"
  };

  const changedTransactionList = [];
  transactions.forEach(transaction => {
    changedTransactionList.push(transaction.name.toLowerCase().replace(" ", ""))
  });

  let nameChange = "";
  for (let i = 0; i < name.length; i++) {
    nameChange += name[i].toLowerCase().replace(" ", "");
  };

  const value = Number(amount);
  if (IDspan) {
    updateTransaction(IDspan, {name, value, situation}).then(transaction => {
      const transactionsIndex = transactions.findIndex(index => index.id === IDspan);
      const divTransaction = document.getElementById(IDspan);
      transactions.splice(transactionsIndex, 1, transaction);
      divTransaction.remove();
      renderTransaction(transaction)
      updateTransactionsAmount();
      ev.target.reset();
    })
  } else {
    if (!changedTransactionList.includes(nameChange)) {
      const transaction = saveTransaction({name, value, situation});
      transaction.then(resp => {
        transactions.push(resp);
        renderTransaction(resp);
        updateTransactionsAmount();
        ev.target.reset();
      });
    } else {
      classError("name", "on");
      spanError("error-name", "Esse nome já consta na lista de  transações.", "on");
    };
  };
};

checkedInputs();
editTransaction();
removeTransaction();

export { saveIpuntTransaction };