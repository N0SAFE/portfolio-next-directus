const { resolve } = require("node:path");

const project = resolve(process.cwd(), "tsconfig.json");

/** @type {import("eslint").Linter.Config} */
module.exports = {
    plugins: ["@typescript-eslint", "only-warn"],
    extends: ["eslint:recommended", "plugin:@typescript-eslint/eslint-recommended", "plugin:@typescript-eslint/recommended"],
    parser: "@typescript-eslint/parser",
    env: {
        browser: true,
        node: true
    },
    settings: {
        "import/resolver": {
            typescript: {
                project
            }
        }
    },
    rules: {
        "@next/next/no-html-link-for-pages": "off",
        "no-unused-vars": "off",
        "@typescript-eslint/no-unused-vars": ["error"]
    },
    ignorePatterns: [
        // Ignore dotfiles
        ".*.js",
        "node_modules/",
        "dist/"
    ],
    overrides: [
        {
            files: ["*.js?(x)", "*.ts?(x)"]
        }
    ]
};
