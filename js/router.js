const ROTAS_VALIDAS = ["inicio", "projetos", "cadastro"];

export function getCurrentRoute() {
    const params = new URLSearchParams(window.location.search);

    const pagina = params.get("pagina");
    const projeto = params.get("projeto");

    const rota = ROTAS_VALIDAS.includes(pagina)
        ? pagina
        : "inicio";

    return {
        pagina: rota,
        projeto
    };
}

export function navigate(pagina, projeto = null) {
    if (!ROTAS_VALIDAS.includes(pagina)) {
        return;
    }

    const params = new URLSearchParams();
    params.set("pagina", pagina);

    if (projeto) {
        params.set("projeto", projeto);
    }

    const url = `${window.location.pathname}?${params.toString()}`;

    window.history.pushState(
        {
            pagina,
            projeto
        },
        "",
        url
    );

    window.dispatchEvent(new PopStateEvent("popstate"));
}

export function initRouter(onRouteChange) {
    document.addEventListener("click", (event) => {
        const link = event.target.closest("a[data-route]");

        if (!link) {
            return;
        }

        event.preventDefault();

        const pagina = link.dataset.route;

        const url = new URL(link.href);
        const projeto = url.searchParams.get("projeto");

        navigate(pagina, projeto);
    });

    window.addEventListener("popstate", () => {
        onRouteChange(getCurrentRoute());
    });

    onRouteChange(getCurrentRoute());
}
