const sharp = require("sharp");

sharp("imagens/logo.png")
    .resize(512, 512, {
        fit: "inside",
        withoutEnlargement: true
    })
    .webp({
        quality: 85
    })
    .toFile("imagens/logo-otimizada.webp")
    .then((info) => {
        console.log("Imagem otimizada com sucesso:");
        console.log(info);
    })
    .catch((error) => {
        console.error("Erro ao otimizar a imagem:", error);
    });