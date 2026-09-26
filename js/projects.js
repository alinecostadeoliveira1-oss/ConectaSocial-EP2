const projetos = {
    educacao: {
        titulo: "Educação para Todos",
        categoria: "Educação",
        descricao:
            "Projeto voltado ao apoio educacional de crianças e adolescentes em situação de vulnerabilidade social, oferecendo atividades de reforço escolar, leitura e desenvolvimento pessoal."
    },

    alimento: {
        titulo: "Alimento Solidário",
        categoria: "Alimentação",
        descricao:
            "Campanha destinada à arrecadação e distribuição de alimentos para famílias que enfrentam dificuldades financeiras e insegurança alimentar."
    },

    inclusao: {
        titulo: "Inclusão e Oportunidades",
        categoria: "Inclusão",
        descricao:
            "Iniciativa que busca promover inclusão social e ampliar oportunidades por meio de oficinas, capacitação e orientação para pessoas em situação de vulnerabilidade."
    }
};

export function initProjects() {
    const modal = document.querySelector("#project-modal");

    if (!modal) {
        return;
    }

    const buttons = document.querySelectorAll(".project-modal-button");

    const modalTitle = document.querySelector("#modal-title");
    const modalBadge = document.querySelector("#modal-badge");
    const modalDescription = document.querySelector("#modal-description");
    const closeButton = modal.querySelector(".modal-close");

    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            const projectId = button.dataset.project;
            const project = projetos[projectId];

            if (!project) {
                return;
            }

            modalTitle.textContent = project.titulo;
            modalBadge.textContent = project.categoria;
            modalDescription.textContent = project.descricao;

            modal.showModal();
        });
    });

    closeButton.addEventListener("click", () => {
        modal.close();
    });

    modal.addEventListener("click", (event) => {
        if (event.target === modal) {
            modal.close();
        }
    });
}
