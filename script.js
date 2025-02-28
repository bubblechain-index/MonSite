// 🌍 Changement de langue dynamique
document.addEventListener("DOMContentLoaded", function () {
    const languageSwitch = document.querySelector(".language-switch a");

    languageSwitch.addEventListener("click", function (event) {
        event.preventDefault(); // Empêche le chargement de la page
        let currentURL = window.location.href;
        let newURL = currentURL.includes("_en") ? currentURL.replace("_en", "") : currentURL.replace(".html", "_en.html");
        window.location.href = newURL;
    });
});

// 📌 Défilement fluide vers les sections internes
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (event) {
        event.preventDefault();
        const targetId = this.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 50,
                behavior: "smooth"
            });
        }
    });
});

// 📋 Message de confirmation pour le formulaire de contact
document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.querySelector("form");

    if (contactForm) {
        contactForm.addEventListener("submit", function (event) {
            event.preventDefault();
            
            // Simule l'envoi du formulaire (supprime cette ligne si tu utilises un vrai backend)
            setTimeout(() => {
                alert("✅ Votre message a été envoyé avec succès !");
                contactForm.reset(); // Réinitialise le formulaire après l'envoi
            }, 500);
        });
    }
});
