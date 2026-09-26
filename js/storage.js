const STORAGE_KEY = "conectaSocialCadastro";

export function saveRegistration(data) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

export function getRegistration() {
    const data = localStorage.getItem(STORAGE_KEY);

    if (!data) {
        return null;
    }

    try {
        return JSON.parse(data);
    } catch (error) {
        console.error("Não foi possível recuperar o cadastro salvo:", error);
        clearRegistration();
        return null;
    }
}

export function clearRegistration() {
    localStorage.removeItem(STORAGE_KEY);
}
