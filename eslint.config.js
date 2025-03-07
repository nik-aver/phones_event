/** @type {import('eslint').Linter.FlatConfig[]} */

import pluginImport from "eslint-plugin-import";
import pluginPerfectionist from "eslint-plugin-perfectionist";
import configPerfectionistAlphabetical from "eslint-plugin-perfectionist/configs/recommended-alphabetical";
import parserVue from "vue-eslint-parser";

export default [
  configPerfectionistAlphabetical,
  {
    ignores: [".nuxt/*", ".output/*", "package-lock.json"],
  },
  {
    files: ["**/*.vue"],
    languageOptions: {
      parser: parserVue,
    },
  },
  {
    plugins: {
      import: pluginImport,
      perfectionist: pluginPerfectionist,
    },
    rules: {
      "import/consistent-type-specifier-style": ["error", "prefer-top-level"],
      "import/default": "error",
      "import/export": "error",
      "import/exports-last": "error",
      "import/extensions": ["error", "ignorePackages"],
      "import/first": "error",
      "import/named": "error",
      "import/newline-after-import": "error",
      "import/no-absolute-path": "error",
      "import/no-amd": "error",
      "import/no-commonjs": "error",
      "import/no-duplicates": "error",
      "import/no-empty-named-blocks": "error",
      "import/no-import-module-exports": "error",
      "import/no-mutable-exports": "error",
      "import/no-named-as-default": "error",
      "import/no-named-as-default-member": "error",
      "import/no-named-default": "error",
      "import/no-namespace": "error",
      "import/no-relative-packages": "error",
      "import/no-relative-parent-imports": "error",
      "import/no-self-import": "error",
      "import/no-unassigned-import": "error",
      "import/no-unused-modules": "error",
      "import/no-useless-path-segments": "error",
      "import/unambiguous": "error",
      "perfectionist/sort-array-includes": [
        "error",
        {
          "spread-last": true,
        },
      ],
      "perfectionist/sort-astro-attributes": "off",
      "perfectionist/sort-imports": [
        "error",
        {
          groups: [
            ["builtin", "external"],
            "internal",
            ["parent", "sibling", "index"],
            ["builtin-type", "external-type"],
            "internal-type",
            ["parent-type", "sibling-type", "index-type"],
            "side-effect",
            "object",
            "style",
            "unknown",
          ],
        },
      ],
      "perfectionist/sort-jsx-props": "off",
      "perfectionist/sort-svelte-attributes": "off",
      "perfectionist/sort-vue-attributes": "off",
    },
  },
];
