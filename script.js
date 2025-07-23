    document.getElementById('year').textContent = new Date().getFullYear();

     document.addEventListener("DOMContentLoaded", function () {
    const itemsPerPage = 8;
    const certCards = document.querySelectorAll(".cert-image-card");
    const totalItems = certCards.length;
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    const paginationContainer = document.getElementById("pagination");

    function showPage(page) {
      const start = (page - 1) * itemsPerPage;
      const end = start + itemsPerPage;

      certCards.forEach((card, index) => {
        card.style.display = (index >= start && index < end) ? "block" : "none";
      });

      document.querySelectorAll(".pagination button").forEach((btn, idx) => {
        btn.classList.toggle("active", idx === page - 1);
      });
    }

    function createPaginationButtons() {
      for (let i = 1; i <= totalPages; i++) {
        const btn = document.createElement("button");
        btn.textContent = i;
        btn.addEventListener("click", () => showPage(i));
        paginationContainer.appendChild(btn);
      }
    }

    createPaginationButtons();
    showPage(1); // Show first page by default
  });