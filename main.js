@import "./style.css";

const pedido = document.getElementById("pedido");
const abrirModal = document.getElementById("abrir-modal");
const fecharModal = document.getElementById("fechar-modal");
const toast = document.getElementById("toast");
const modal = document.getElementById("modal");

let toastTimer;

pedido.addEventListener("click", () => {
    toast.hidden = false;
    clearTimeout(toastTimer);

    toastTimer = setTimeout(() => {
        toast.hidden = true;
    }, 3000);
});

abrirModal.addEventListener("click", () => {
    modal.hidden = false;
    fecharModal.focus();
});

fecharModal.addEventListener("click", () => {
    modal.hidden = true;
    abrirModal.focus();
});

modal.addEventListener("click", (event) => {
    if (event.target === modal) {
        modal.hidden = true;
        abrirModal.focus();
    }
});

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !modal.hidden) {
        modal.hidden = true;
        abrirModal.focus();
    }
});
