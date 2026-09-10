document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("modal");
  const btnFecharModal = document.getElementById("btn-fechar-modal");
  const imagensGaleria = document.querySelectorAll(".btn-abrir-modal");

  imagensGaleria.forEach((img) => {
    img.addEventListener("click", () => {
      modal.classList.remove("hidden");
      modal.classList.add("flex");
    });
  });

  btnFecharModal.addEventListener("click", () => {
    modal.classList.add("hidden");
    modal.classList.remove("flex");
  });

  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.classList.add("hidden");
      modal.classList.remove("flex");
    }
  });
});