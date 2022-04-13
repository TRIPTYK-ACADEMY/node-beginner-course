// Bien préciser l'extension du fichier

async function init() {
    const { generate} = await import("./emojiGenerate.mjs");

    generate(6)
    generate();
}

init();