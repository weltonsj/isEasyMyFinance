import { deleteTransaction, transactions } from "./APIMethodTransactions.js";
import { inputTransactionData } from "./MethodCreateElements.js";
import { updateTransactionsAmount } from "./TransactionsViewerRender.js";

async function removeTransaction() {
  document.addEventListener("click", btn => {
    const deleteClass = btn.target.classList[1];
    if (deleteClass === "btn-delete") {
      const id = inputTransactionData().transactionID;
      id.value = btn.target.classList[0];
      const activeID = parseFloat(inputTransactionData().transactionID.value);

      try {
        if (!activeID) {
          throw new Error(`Error! "activeID" não encontrado.`)
        } else {
          deleteTransaction(activeID);
          const divTransaction = document.getElementById(activeID);
          const indexTransaction = transactions.findIndex(index => index.id === activeID);
          transactions.splice(indexTransaction, 1);
          divTransaction.remove();
          updateTransactionsAmount();
        }
      } catch (error) {
        console.log(error.message);
      }
    };
  });
};

export { removeTransaction }
