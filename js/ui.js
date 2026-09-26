import Swal from "https://cdn.jsdelivr.net/npm/sweetalert2@11/+esm";

export function showSuccess(message) {
    Swal.fire({
        icon: "success",
        title: "Cadastro realizado!",
        text: message,
        confirmButtonText: "OK"
    });
}

export function showError(message) {
    Swal.fire({
        icon: "error",
        title: "Atenção",
        text: message,
        confirmButtonText: "OK"
    });
}
