import { getTransactions, transactions } from "./APIMethodTransactions.js";
import { renderTransaction, renderTotalAmountBalance } from "./MethodCreateElements.js";

async function executeRenderToTransactions() {
  const transactionsResult = await getTransactions();
  transactions.push(...transactionsResult);
  transactions.forEach(renderTransaction);
  updateTransactionsAmount();
};

function updateTransactionsAmount() {
  const amountBalance = transactions.reduce((acc, sum) => acc + sum.value, 0);
  const TotalAmountBalance = amountBalance.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  renderTotalAmountBalance(TotalAmountBalance);
};

export { executeRenderToTransactions, updateTransactionsAmount };