
window.addEventListener("scroll", function () {
  const header = document.querySelector(".esHeader");
  if (window.scrollY > 50) {
    header.classList.add("scroll");
  } else {
    header.classList.remove("scroll");
  }
});

/* Modal */
document.addEventListener('DOMContentLoaded', function () {
  // Abrir modal
  document.querySelectorAll('.modal-trigger').forEach(trigger => {
    trigger.addEventListener('click', function (e) {
      e.preventDefault(); // Evita salto al inicio
      const modalId = this.dataset.modal;
      const modal = document.getElementById(modalId);
      if (modal) {
        modal.classList.add('show');
      }
    });
  });

  // Cerrar modal
  document.querySelectorAll('.modalDialog .close').forEach(closeBtn => {
    closeBtn.addEventListener('click', function (e) {
      e.preventDefault();
      const modal = this.closest('.modalDialog');
      if (modal) {
        modal.classList.remove('show');
      }
    });
  });
});