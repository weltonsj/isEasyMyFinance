import { cleanInputs, reloadPage } from "./CreateElementsMethod.js";

function deleteFinance(funcGetFinance, funcResponseDelete) {
  document.addEventListener("click", btn => {
    if (btn.target.classList.value.includes("btn-delete")) {
      funcGetFinance().then(element => {
        element.forEach(finance => {
          if (btn.target.classList.value.includes(finance.id)) {
            const confirmDelete = confirm(`Tem certeza que deseja excluir os dados a seguir?
            \nNome: R$ ${finance.name}\nValor: R$ ${finance.value}`);
            confirmDelete ? funcResponseDelete(finance.id) : "";
            reloadPage();
          };
          cleanInputs();
        });
      });
    };
  });
};

export { deleteFinance };