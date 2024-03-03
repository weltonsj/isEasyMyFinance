import { transactions } from "./APIMethodTransactions.js";
import { inputTransactionData } from "./MethodCreateElements.js";

async function editTransaction() {
  document.addEventListener("click", btn => {
    const name = inputTransactionData().inputName
    const value = inputTransactionData().inputValue
    const id = inputTransactionData().transactionID
    
    if (btn.target.classList[1] === "btn-edit") {
      transactions.forEach(transaction => {
        if (transaction.id === parseFloat(btn.target.classList[0])) {
          id.value = transaction.id
          name.value = transaction.name
          value.value = transaction.value
        };
      });
    };
  });
};

export { editTransaction }