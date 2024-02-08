import { creatFinance, createTotal } from "./entities/CreateElementsMethod.js";
import { getFinances, responseDELETE, responsePOST, responsePUT } from "./entities/FinancesMethodApi.js";
import { deleteFinance } from "./entities/FinancesMethodDelete.js";
import { postFinance } from "./entities/FinancesMethodPost.js";
import { putFinance } from "./entities/FinancesMethodPut.js";
import { renderFinaces } from "./entities/RenderMethodFinance.js"
import { renderTotal } from "./entities/RenderMethodTotal.js";

renderFinaces(getFinances, creatFinance);
renderTotal(getFinances, createTotal);
postFinance(getFinances, responsePOST);
deleteFinance(responseDELETE);
putFinance(getFinances, responsePUT);