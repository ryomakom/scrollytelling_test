document.addEventListener("DOMContentLoaded", function() {
    window.addEventListener("scroll", function() {
        let currentSection = "";

        // Determine the current section based on scroll position
        const sections = document.querySelectorAll(".section");
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= sectionTop - sectionHeight / 2) {
                currentSection = section.getAttribute("id");
            }
        });

        // Add active class to current section and remove from others
        sections.forEach(section => {
            section.classList.remove("active");
            if (section.getAttribute("id") === currentSection) {
                section.classList.add("active");
            }
        });
    });
});
