module.exports = {
    locales: ["cs", "en"],
    sourceLocale: "cs",
    catalogs: [{
        path: "src/locales/{locale}/messages",
        include: ["src"]
    }],
    format: "po"
};
