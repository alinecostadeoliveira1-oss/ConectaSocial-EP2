const fs = require("fs");
const { minify } = require("html-minifier-terser");

const input = "html/index.html";
const output = "dist/index.html";

async function minifyHtml() {
    const html = fs.readFileSync(input, "utf8");

    const minified = await minify(html, {
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
        removeEmptyAttributes: true,
        useShortDoctype: true
    });

    const productionHtml = minified
    .replaceAll("../css/style.css", "css/style.min.css")
    .replaceAll("../imagens/", "imagens/")
    .replaceAll("../js/", "js/");

    fs.mkdirSync("dist", { recursive: true });
    fs.writeFileSync(output, productionHtml);

    console.log("HTML minificado com sucesso.");
}

minifyHtml().catch((error) => {
    console.error("Erro ao minificar o HTML:", error);
});