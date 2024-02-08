import { reloadPage } from "./CreateElementsMethod.js";
import { getFinances } from "./FinancesMethodApi.js";

function deleteFinance(funcResponseDelete) {
  document.addEventListener("click", btn => {
    if (btn.target.classList.value === "btn-delete") {
      getFinances().then(element => {
        element.forEach(finance => {
          if (parseFloat(btn.target.id) === finance.id) {
            const confirmDelete = confirm(`Tem certeza que deseja excluir os dados a seguir?
            \nNome: R$ ${finance.name}\nValor: R$ ${finance.value}`);
            confirmDelete ? funcResponseDelete(btn.target.id) : "";
            reloadPage();
          };
        });
      });
    };
  });
};

export { deleteFinance };