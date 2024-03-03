import { saveIpuntTransaction } from "./entities/MethodSaveTransaction.js";
import { executeRenderToTransactions } from "./entities/TransactionsViewerRender.js";

document.addEventListener("DOMContentLoaded", executeRenderToTransactions);
document.querySelector("form").addEventListener("submit", saveIpuntTransaction);
