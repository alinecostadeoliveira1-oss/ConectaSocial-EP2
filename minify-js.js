const fs = require("fs");
const path = require("path");
const { minify } = require("terser");

const inputDir = "js";
const outputDir = "dist/js";

const files = [
    "app.js",
    "form.js",
    "menu.js",
    "projects.js",
    "router.js",
    "script.js",
    "storage.js",
    "templates.js",
    "ui.js"
];

async function minifyJavaScript() {
    fs.mkdirSync(outputDir, { recursive: true });

    for (const file of files) {
        const inputPath = path.join(inputDir, file);
        const outputPath = path.join(outputDir, file);

        const code = fs.readFileSync(inputPath, "utf8");

        const result = await minify(code, {
            compress: true,
            mangle: true,
            format: {
                comments: false
            },
            module: true
        });

        fs.writeFileSync(outputPath, result.code);

        console.log(`Minificado: ${file}`);
    }

    console.log("JavaScript minificado com sucesso.");
}

minifyJavaScript().catch((error) => {
    console.error("Erro ao minificar o JavaScript:", error);
});