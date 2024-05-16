document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll("nav ul li a");

    links.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            const target = event.target.getAttribute("href").substring(1);
            const section = document.getElementById(target);

            window.scrollTo({
                top: section.offsetTop,
                behavior: 'smooth'
            });
        });
    });
});
