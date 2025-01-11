import pluginJs from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";


/** @type {import('eslint').Linter.Config[]} */
export default [
    {files: ["**/*.{js,mjs,cjs,ts}"]},
    {languageOptions: {globals: {...globals.browser,...globals.node}}},
    pluginJs.configs.recommended,
    ...tseslint.configs.recommended,
    {
        ignores: ["**/*.config.js","!**/eslint.config.js","node_modules/**, dist/**"],
        rules: {
            "@typescript-eslint/no-unused-expressions": [
                "error",
                {
                    allowShortCircuit: true,
                    allowTernary: true,
                    enforceForJSX: true,
                },
            ],
        },
    },
    {
        excludes: [
            "**/test/**",
            "node_modules/**",
        ],
    }
];