document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll("nav ul li a");

    links.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            const target = event.target.getAttribute("href");

            document.querySelector("main").classList.add("fade-out");

            setTimeout(() => {
                window.location.href = target;
            }, 500);
        });
    });
});
