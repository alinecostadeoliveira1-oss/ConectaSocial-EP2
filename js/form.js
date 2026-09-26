import {
    saveRegistration,
    getRegistration,
    clearRegistration
} from "./storage.js";

import { showSuccess } from "./ui.js";

export function initForm() {
    const form = document.querySelector("#registration-form");

    if (!form) {
        return;
    }

    const savedRegistration = getRegistration();

    if (savedRegistration) {
        Object.entries(savedRegistration).forEach(([name, value]) => {
            const field = form.elements.namedItem(name);

            if (field) {
                field.value = value;
            }
        });
    }

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        if (!form.checkValidity()) {
            form.reportValidity();
            return;
        }

        const formData = new FormData(form);
        const registration = Object.fromEntries(formData.entries());

        saveRegistration(registration);

        showSuccess("Seus dados foram salvos com sucesso.");
    });

    form.addEventListener("reset", () => {
        clearRegistration();
    });
}
