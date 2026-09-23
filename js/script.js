/* ==================================================
   CONECTASOCIAL - JAVASCRIPT
   Experiência Prática 2
   ================================================== */


/* ==================================================
   MENU HAMBÚRGUER
   ================================================== */

const menuToggle = document.querySelector(".menu-toggle");
const mainNav = document.querySelector(".main-nav");

if (menuToggle && mainNav) {

    menuToggle.addEventListener("click", () => {

        const isOpen = mainNav.classList.toggle("is-open");

        menuToggle.setAttribute(
            "aria-expanded",
            isOpen
        );

        menuToggle.setAttribute(
            "aria-label",
            isOpen ? "Fechar menu" : "Abrir menu"
        );

        menuToggle.textContent = isOpen ? "✕" : "☰";
    });
}


/* ==================================================
   DROPDOWN - PROJETOS
   ================================================== */

const dropdown = document.querySelector(".dropdown");

if (dropdown) {

    const dropdownLink = dropdown.querySelector(":scope > a");

    if (dropdownLink) {

        dropdownLink.addEventListener("click", (event) => {

            event.preventDefault();

            dropdown.classList.toggle("is-mobile-open");

        });

    }
}


/* ==================================================
   MODAIS DOS PROJETOS
   ================================================== */

const projectModal = document.querySelector("#project-modal");
const modalClose = document.querySelector(".modal-close");
const modalBadge = document.querySelector("#modal-badge");
const modalTitle = document.querySelector("#modal-title");
const modalDescription = document.querySelector("#modal-description");

const projectButtons = document.querySelectorAll(
    ".project-modal-button"
);


/* Conteúdo dos projetos */

const projects = {

    educacao: {
        badge: "Educação",
        title: "Educação para Todos",
        description:
            "O projeto oferece apoio educacional a crianças e adolescentes em situação de vulnerabilidade social, com atividades de reforço escolar, leitura e desenvolvimento pessoal."
    },

    alimento: {
        badge: "Alimentação",
        title: "Alimento Solidário",
        description:
            "Campanha destinada à arrecadação e distribuição de alimentos para famílias que enfrentam dificuldades financeiras e insegurança alimentar."
    },

    inclusao: {
        badge: "Inclusão",
        title: "Inclusão e Oportunidades",
        description:
            "Iniciativa que busca promover inclusão social e ampliar oportunidades por meio de oficinas, capacitação e orientação para pessoas em situação de vulnerabilidade."
    }

};


/* Abrir modal */

if (projectModal && projectButtons.length > 0) {

    projectButtons.forEach((button) => {

        button.addEventListener("click", () => {

            const projectId = button.dataset.project;
            const project = projects[projectId];

            if (!project) {
                return;
            }

            modalBadge.textContent = project.badge;
            modalTitle.textContent = project.title;
            modalDescription.textContent = project.description;

            projectModal.showModal();

        });

    });

}


/* Fechar modal pelo X */

if (projectModal && modalClose) {

    modalClose.addEventListener("click", () => {

        projectModal.close();

    });

}


/* Fechar modal clicando fora */

if (projectModal) {

    projectModal.addEventListener("click", (event) => {

        if (event.target === projectModal) {

            projectModal.close();

        }

    });

}


/* Fechar modal com ESC */

if (projectModal) {

    projectModal.addEventListener("cancel", () => {

        projectModal.close();

    });

}


/* ==================================================
   MÁSCARA DE CPF
   ================================================== */

const cpfInput = document.querySelector("#cpf");

if (cpfInput) {

    cpfInput.addEventListener("input", () => {

        let value = cpfInput.value.replace(/\D/g, "");

        value = value.substring(0, 11);

        if (value.length > 3) {
            value = value.replace(
                /^(\d{3})(\d)/,
                "$1.$2"
            );
        }

        if (value.length > 7) {
            value = value.replace(
                /^(\d{3})\.(\d{3})(\d)/,
                "$1.$2.$3"
            );
        }

        if (value.length > 11) {
            value = value.replace(
                /^(\d{3})\.(\d{3})\.(\d{3})(\d{1,2})$/,
                "$1.$2.$3-$4"
            );
        }

        cpfInput.value = value;

    });

}


/* ==================================================
   MÁSCARA DE TELEFONE
   ================================================== */

const phoneInput = document.querySelector("#telefone");

if (phoneInput) {

    phoneInput.addEventListener("input", () => {

        let value = phoneInput.value.replace(/\D/g, "");

        value = value.substring(0, 11);

        if (value.length > 0) {
            value = "(" + value;
        }

        if (value.length > 3) {

            value = value.replace(
                /^(\(\d{2})(\d)/,
                "$1) $2"
            );

        }

        if (value.length > 10) {

            value = value.replace(
                /(\d{5})(\d)/,
                "$1-$2"
            );

        }

        phoneInput.value = value;

    });

}


/* ==================================================
   MÁSCARA DE CEP
   ================================================== */

const cepInput = document.querySelector("#cep");

if (cepInput) {

    cepInput.addEventListener("input", () => {

        let value = cepInput.value.replace(/\D/g, "");

        value = value.substring(0, 8);

        if (value.length > 5) {

            value = value.replace(
                /^(\d{5})(\d)/,
                "$1-$2"
            );

        }

        cepInput.value = value;

    });

}


/* ==================================================
   FEEDBACK DO FORMULÁRIO
   ================================================== */

const registrationForm =
    document.querySelector("#registration-form");

const formStatus =
    document.querySelector("#form-status");

const toast =
    document.querySelector("#toast");


if (registrationForm && formStatus) {

    registrationForm.addEventListener(
        "submit",
        (event) => {

            event.preventDefault();

            if (!registrationForm.checkValidity()) {

                formStatus.hidden = false;

                formStatus.className =
                    "form-status error";

                formStatus.textContent =
                    "Verifique os campos destacados antes de enviar o cadastro.";

                registrationForm.reportValidity();

                return;
            }


            formStatus.hidden = false;

            formStatus.className =
                "form-status success";

            formStatus.textContent =
                "Cadastro realizado com sucesso! Obrigado por querer participar da ConectaSocial.";

            registrationForm.reset();


            if (toast) {

                toast.textContent =
                    "✓ Cadastro realizado com sucesso!";

                toast.hidden = false;

                requestAnimationFrame(() => {

                    toast.classList.add("is-visible");

                });

                setTimeout(() => {

                    toast.classList.remove("is-visible");

                    setTimeout(() => {

                        toast.hidden = true;

                    }, 300);

                }, 4000);

            }

        }
    );

}


/* ==================================================
   LIMPAR FEEDBACK AO ALTERAR O FORMULÁRIO
   ================================================== */

if (registrationForm && formStatus) {

    registrationForm.addEventListener(
        "input",
        () => {

            formStatus.hidden = true;

        }
    );

}
