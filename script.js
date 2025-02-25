document.addEventListener("DOMContentLoaded", function () {
    console.log("BubbleChain Index prêt !");
    
    // Sélectionne le bouton et la sidebar
    const menuToggle = document.querySelector(".menu-toggle");
    const sidebar = document.getElementById("sidebar");

    // Ajoute un événement au bouton pour ouvrir/fermer le menu
    menuToggle.addEventListener("click", function () {
        sidebar.classList.toggle("show");
    });

    // Fermer le menu si on clique ailleurs (optionnel)
    document.addEventListener("click", function (event) {
        if (!sidebar.contains(event.target) && !menuToggle.contains(event.target)) {
            sidebar.classList.remove("show");
        }
    });
});
