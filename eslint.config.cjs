const eslintPluginAstro = require("eslint-plugin-astro");
module.exports = [
    ...eslintPluginAstro.configs["flat/recommended"],
    {
        rules: {
            "astro/no-conflict-set-directives": "error",
            "astro/no-unused-define-vars-in-style": "error",
            "no-var": "error",
            "no-console": "error",
            "no-unused-vars": "error",
            "no-await-in-loop": "error",
            "no-empty-function": "error",
            "no-duplicate-imports": "error",
        },
    },
];