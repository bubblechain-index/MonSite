// 🌍 Changement de langue dynamique
document.addEventListener("DOMContentLoaded", function () {
    const languageSwitch = document.querySelector(".language-switch a");

    if (languageSwitch) { // ✅ Vérifie si l'élément existe
        languageSwitch.addEventListener("click", function (event) {
            event.preventDefault(); // Empêche le chargement de la page
            
            let currentURL = window.location.href;
            let newURL;

            if (currentURL.includes("_en")) {
                newURL = currentURL.replace("_en", ""); // Retire "_en" si déjà présent
            } else {
                if (currentURL.endsWith(".html")) {
                    newURL = currentURL.replace(".html", "_en.html"); // Ajoute "_en" avant .html
                } else if (currentURL.includes("?")) {
                    newURL = currentURL.replace("?", "_en?"); // Gère les URLs avec paramètres
                } else {
                    newURL = currentURL + "_en"; // Ajoute "_en" aux autres formats d’URL
                }
            }

            window.location.href = newURL;
        });
    }
});

// 📌 Défilement fluide vers les sections internes
document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
            }
        });
    });
});

// 📋 Message de confirmation pour le formulaire de contact
document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.querySelector("form");

    if (contactForm) {
        contactForm.addEventListener("submit", function (event) {
            event.preventDefault();
            
            if (!contactForm.checkValidity()) { // ✅ Vérifie si les champs sont remplis
                alert("⚠️ Veuillez remplir tous les champs requis.");
                return;
            }

            setTimeout(() => {
                alert("✅ Votre message a été envoyé avec succès !");
                contactForm.reset(); // Réinitialise le formulaire après l'envoi
            }, 500);
        });
    }
});
