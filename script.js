document.addEventListener("DOMContentLoaded", function () {
    console.log("BubbleChain Index ready!");
    
    // Select the menu button and sidebar
    const menuToggle = document.querySelector(".menu-toggle");
    const sidebar = document.getElementById("sidebar");
    
    if (menuToggle && sidebar) {
        // Toggle menu visibility on button click
        menuToggle.addEventListener("click", function (event) {
            event.stopPropagation(); // Prevent immediate closing
            sidebar.classList.toggle("show");
        });

        // Close menu when clicking outside
        document.addEventListener("click", function (event) {
            if (!sidebar.contains(event.target) && !menuToggle.contains(event.target)) {
                sidebar.classList.remove("show");
            }
        });

        // Prevent closing when clicking inside the menu
        sidebar.addEventListener("click", function (event) {
            event.stopPropagation();
        });
    } else {
        console.warn("Menu not found on this page.");
    }
});
