module.exports = {
    env: { browser: true, es2020: true },
    root: true,
    extends: [
        "plugin:react-hooks/recommended",
        "plugin:react/recommended",
        "plugin:react/jsx-runtime",
        "eslint:recommended",
    ],
    parserOptions: { ecmaVersion: "latest", sourceType: "module" },
    ignorePatterns: ["dist", ".eslintrc.cjs"],
    settings: { react: { version: "18.2" } },
    plugins: ["react-refresh"],
    rules: {
        "react/jsx-no-target-blank": "off",
        "react-refresh/only-export-components": [
            "warn",
            { allowConstantExport: true },
        ],
    },
};
