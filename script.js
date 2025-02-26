document.addEventListener("DOMContentLoaded", () => {
    const servicesSubmenu = document.getElementById("services-submenu");
    const menuItems = document.querySelectorAll(".menu-item");
    const content = document.getElementById("content");

    // Ensure submenu is hidden on page load
    servicesSubmenu.style.display = "none";

    // Toggle Services Submenu
    document.getElementById("services-menu").addEventListener("click", (event) => {
        event.stopPropagation();
        servicesSubmenu.style.display = servicesSubmenu.style.display === "block" ? "none" : "block";
    });

    // Hide submenu when clicking outside
    document.addEventListener("click", (event) => {
        const servicesMenu = document.getElementById("services-menu");

        if (!servicesMenu.contains(event.target) && !servicesSubmenu.contains(event.target)) {
            servicesSubmenu.style.display = "none";
        }
    });

    // Menu Item Click Event
    menuItems.forEach(item => {
        item.addEventListener("click", () => {
            const section = item.dataset.section;

            // Hide submenu when clicking any menu item
            servicesSubmenu.style.display = "none";

            // Update content display
            content.innerHTML = `<h2>${section}</h2><p>Content for ${section} goes here.</p>`;
        });
    });

    // Services Submenu Item Click Event
    const submenuItems = document.querySelectorAll("#services-submenu li");
    submenuItems.forEach(subItem => {
        subItem.addEventListener("click", (event) => {
            event.stopPropagation();
            const section = subItem.dataset.section;
            
            // Hide submenu after selecting an option
            servicesSubmenu.style.display = "none";

            // Update content display
            content.innerHTML = `<h2>${section}</h2><p>Details for ${section}.</p>`;
        });
    });
});
