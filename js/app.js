import { initRouter } from "./router.js";
import { initForm } from "./form.js";
import { initProjects } from "./projects.js";
import { initMenu } from "./menu.js";
import {
    homeTemplate,
    projectsTemplate,
    cadastroTemplate
} from "./templates.js";

const app = document.querySelector("#app");

function renderPage(route) {
    if (route.pagina === "inicio") {
        app.innerHTML = homeTemplate();
        return;
    }

   if (route.pagina === "projetos") {
    app.innerHTML = projectsTemplate();
    initProjects();

    if (route.projeto) {
        const projeto = document.querySelector(`#${route.projeto}`);

        if (projeto) {
            projeto.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    }

    return;
}

        if (route.pagina === "cadastro") {
    app.innerHTML = cadastroTemplate();
    initForm();
    return;
}
    
}

initRouter(renderPage);
initMenu();
