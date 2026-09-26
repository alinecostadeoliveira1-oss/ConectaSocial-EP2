export function initMenu() {
    const menuToggle = document.querySelector(".menu-toggle");
    const mainNav = document.querySelector(".main-nav");
    const dropdown = document.querySelector(".dropdown");

    if (!menuToggle || !mainNav) {
        return;
    }

    menuToggle.addEventListener("click", () => {
        const isOpen = mainNav.classList.toggle("is-open");

        menuToggle.setAttribute("aria-expanded", String(isOpen));
        menuToggle.setAttribute(
            "aria-label",
            isOpen ? "Fechar menu" : "Abrir menu"
        );
    });

    if (dropdown) {
        const dropdownLink = dropdown.querySelector(":scope > a");

        if (dropdownLink) {
            dropdownLink.addEventListener("click", (event) => {
                const isMobile = window.matchMedia(
                    "(max-width: 768px)"
                ).matches;

                if (!isMobile) {
                    return;
                }

                event.preventDefault();
                dropdown.classList.toggle("is-mobile-open");
            });
        }
    }

    mainNav.addEventListener("click", (event) => {
        const link = event.target.closest("a");

        if (!link) {
            return;
        }

        if (link === dropdown?.querySelector(":scope > a")) {
            return;
        }

        mainNav.classList.remove("is-open");
        dropdown?.classList.remove("is-mobile-open");

        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Abrir menu");
    });
}
