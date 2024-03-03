const transactions = [];
/* API GET */
async function getTransactions() {
  return await (await fetch("https://api-json-server-finances.vercel.app/transactions")).json();
};

/* API POST */
async function saveTransaction(objectInput) {
  return await (await fetch("https://api-json-server-finances.vercel.app/transactions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(objectInput)
  })).json();
};

/* API PUT */
async function updateTransaction(id, objectInput) {
  return await (await fetch(`https://api-json-server-finances.vercel.app/transactions/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(objectInput)
  })).json();
};

/* API DELETE */
async function deleteTransaction(id) {
  return await (await fetch(`https://api-json-server-finances.vercel.app/transactions/${id}`, {
    method: "DELETE"
  })).json();
};

export { getTransactions, saveTransaction, updateTransaction, deleteTransaction, transactions };