module.exports = {
  "extends": [
    "appwise",
    "@antfu",
    "plugin:tailwindcss/recommended"
  ],

  "rules": {
    "import/no-unresolved": "error",

    "max-len": "off",

    "vue/max-len": [
      "error",
      {
        "code": 100,
        "comments": 100,
        "ignoreUrls": true,
        "ignoreStrings": true,
        "ignoreRegExpLiterals": true,
        "ignoreTemplateLiterals": true,
        "ignoreHTMLTextContents": true,
        "ignoreHTMLAttributeValues": true,
      }
    ],

    /**
     * ✓ () => foo
     * ✗ () => { return foo }
     */
    "arrow-body-style": ["error", "as-needed"],

    /**
     * Allow eslint-disable
     */
    "eslint-comments/no-unlimited-disable": "off",

    /**
     * Only allow camelCase
     */
    "camelcase": ["error", { "properties": "always" }],

    /**
     * A function return type must be defined
     */
    "@typescript-eslint/explicit-function-return-type": "error",

    /**
     * A function callback parameter must always be wrapped by ()
     */
    "arrow-parens": ["error", "always"],

    /**
     * Wrap imports
     */
    "putout/multiple-properties-destructuring": [
      "error", {
        "minProperties": 3
      }
    ],

    /**
     * Wrap objects
     */
    "object-property-newline": [
      "error", {
        "allowAllPropertiesOnSameLine": false
      }
    ],

    /**
     * Wrap arrays
     */
    "array-bracket-newline": [
      "error", {
        "multiline": true,
        "minItems": 3
      }
    ],

    "vue/max-attributes-per-line": ["error", {
      "singleline": {
        "max": 1
      },
      "multiline": {
        "max": 1
      }
    }],

    /**
     * https://eslint.vuejs.org/rules/v-for-delimiter-style.html
     *
     * Only allow `of`
     * ✓ v-for="user of users"
     * ✗ v-for="user in users"
     */
    "vue/v-for-delimiter-style": ["error", "of"],

    /**
     * https://eslint.vuejs.org/rules/v-on-event-hyphenation.html
     *
     * Only allow hyphenated event names
     * ✓ some-event
     * ✗ someEvent
     */
    "vue/v-on-event-hyphenation": ["error", "always", {
      "autofix": true,
      "ignore": []
    }],

    /**
     * https://eslint.vuejs.org/rules/v-on-function-call.html
     *
     * Forbid parentheses for method calls without arguments
     * ✓ @click="handleClick"
     * ✗ @click="handleClick()"
     */
    "vue/v-on-function-call": ["error", "never"],

    /**
     * https://eslint.vuejs.org/rules/component-name-in-template-casing.html#pascalcase-registeredcomponentsonly-true-default
     *
     * Custom component names should be PascalCased
     * ✓ <UserList />
     * ✗ <user-list />
     */
    "vue/component-name-in-template-casing": ["error", "PascalCase", {
      "registeredComponentsOnly": false
    }],

    /**
     * https://eslint.vuejs.org/rules/no-unused-refs.html
     *
     * Show an error when a ref is defined but unused
     */
    "vue/no-unused-refs": ["error"],

    /**
     * https://eslint.vuejs.org/rules/no-useless-mustaches.html
     *
     * Only use {{  }} when necessary
     * ✓ {{ foo }}
     * ✗ {{ "Bar" }}
     */
    "vue/no-useless-mustaches": ["error", {
      "ignoreIncludesComment": false,
      "ignoreStringEscape": false
    }],

    /**
     * Don't use v-bind when not necessary
     */
    "vue/no-useless-v-bind": ["error", {
      "ignoreIncludesComment": false,
      "ignoreStringEscape": false
    }],

    /**
    * https://eslint.vuejs.org/rules/block-tag-newline.html
    *
    * Enforce a linebreak after <script> and <template>
    */
    "vue/block-tag-newline": ["error"],

    /**
     * https://eslint.vuejs.org/rules/custom-event-name-casing.html
     *
     * Enforce event casing is PascalCase
     */
    "vue/custom-event-name-casing": ["error", "camelCase", {
      "ignores": []
    }],

    /**
     * https://eslint.vuejs.org/rules/html-button-has-type.html
     *
     * Disallow usage of button without an explicit
     * type attribute
     */
    "vue/html-button-has-type": ["error", {
      "button": true,
      "submit": true,
      "reset": true
    }],

    /**
     * https://eslint.vuejs.org/rules/html-comment-content-newline.html
     *
     * Enforce unified line brake in HTML comments
     */
    "vue/html-comment-content-newline": ["error", {
      "singleline": "ignore",
      "multiline": "always"
    }, {
        "exceptions": []
      }],

    /**
     * https://eslint.vuejs.org/rules/html-comment-content-spacing.html
     *
     * Enforce unified spacing in HTML comments
     */
    "vue/html-comment-content-spacing": ["error", "always", {
      "exceptions": []
    }],

    /**
     * https://eslint.vuejs.org/rules/html-comment-indent.html
     *
     * Enforce consistent indentation in HTML comments
     */
    "vue/html-comment-indent": ["error", 2],

    /**
     * https://eslint.vuejs.org/rules/no-child-content.html
     *
     * Disallow element"s child contents which would be
     * overwritten by a directive like v-html or v-text
     */
    "vue/no-child-content": ["error"],

    /**
     * https://eslint.vuejs.org/rules/no-duplicate-attr-inheritance.html
     *
     * Enforce inheritAttrs to be set to false when
     * using v-bind="$attrs"
     */
    "vue/no-duplicate-attr-inheritance": ["error"],

    /**
     * https://eslint.vuejs.org/rules/no-empty-component-block.html
     *
     * Disallow the <template> <script> <style> block to be empty
     */
    "vue/no-empty-component-block": ["warn"],

    /**
     * https://eslint.vuejs.org/rules/no-multiple-objects-in-class.html
     *
     * Disallow to pass multiple objects into array to class
     */
    "vue/no-multiple-objects-in-class": ["error"],

    /**
     * https://eslint.vuejs.org/rules/no-restricted-v-bind.html
     *
     * Show error for :v-if, :v-model, ...
     */
    "vue/no-restricted-v-bind": ["error", {
      "argument": "/^v-/",
      "message": "Using `:v-xxx` is not allowed. Instead, remove `:` and use it as directive."
    }],

    /**
     * vue/no-template-target-blank
     *
     * Disallow target="_blank" attribute without
     * rel="noopener noreferrer"
     */
    "vue/no-template-target-blank": ["error", {
      "allowReferrer": false,
      "enforceDynamicLinks": "always"
    }],

    /**
     * https://eslint.vuejs.org/rules/padding-line-between-blocks.html
     *
     * Require or disallow padding lines between blocks
     */
    "vue/padding-line-between-blocks": ["error", "always"],

    /**
     * https://eslint.vuejs.org/rules/prefer-separate-static-class.html
     *
     * Require static class names in template to be
     * in a separate class attribute
     */
    "vue/prefer-separate-static-class": ["error"],

    /**
     * https://eslint.vuejs.org/rules/static-class-names-order.html
     *
     * Enforce static class names order
     */
    "vue/static-class-names-order": ["error"],

    /**
     * https://eslint.vuejs.org/rules/no-irregular-whitespace.html
     *
     * Disallow irregular whitespace
     */
    "vue/no-irregular-whitespace": ["error"],

    /**
     * https://eslint.vuejs.org/rules/no-restricted-syntax.html
     *
     * ✓ {{ foo }}
     * ✗ {{ foo() }}
     */
    "vue/no-restricted-syntax": ["error"],

    /**
     * https://eslint.vuejs.org/rules/static-class-names-order.html
     * 
     * Disabled in favour of plugin:tailwindcss/recommended
     */
    "vue/static-class-names-order": "off",

    /**
     * Disabled because prop destructuring is supported
     */
    "vue/no-setup-props-destructure": "off",

    "putout/add-newline-before-return": "off",
    "putout/remove-empty-newline-after-import": "off",
    "putout/function-declaration-paren-newline": "off",

    "@typescript-eslint/no-non-null-assertion": "off",

    "import/order": "off",
    "sort-imports": "off",
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",

    "require-explicit-generics/require-explicit-generics": [
      "error",
      [
        "computed",
        "ref",
        "reactive",
        "defineEmits",
        "defineSlots",
        "defineModel",
        "defineProps",
        "defineExpose",
      ],
    ],

    "tailwindcss/no-custom-classname": ["error", {
      "config": "tailwind.config.cjs"
    }],

    "vue/custom-event-name-casing": ["error", "camelCase", {
      "ignores": ["/.+?:.+/"]
    }],

    "vue/attributes-order": [
      "error",
      {
        "order": [
          "DEFINITION", // is
          "LIST_RENDERING", // v-for
          "CONDITIONALS", // v-if, v-else-if, v-else, v-show, v-cloak
          "RENDER_MODIFIERS", // v-pre, v-once
          "GLOBAL", // id
          "UNIQUE", // ref, key, 
          "SLOT", // slot
          "TWO_WAY_BINDING", // v-model
          "ATTR_DYNAMIC", // v-bind, :foo="bar"
          "ATTR_STATIC", // prop="foo"
          "ATTR_SHORTHAND_BOOL", // boolean props e.g. is-active 
          "EVENTS", // @click="foo"
          "CONTENT" // v-html, v-text,
        ],
        "alphabetical": false
      }
    ],

    "antfu/top-level-function": "off",
    "vue/no-extra-parens": "off",
    "nonblock-statement-body-position": "off",

    "check-file/filename-naming-convention": [
      "error",
      {
        "**/*.{vue}": "PASCAL_CASE",
        "**/*.{js,ts}": "CAMEL_CASE"
      },
      {
        "ignoreMiddleExtensions": true
      }
    ],

    "check-file/folder-naming-convention": [
      "error",
      {
        "src/**/": "KEBAB_CASE"
      }
    ],

    "vue/component-name-in-template-casing": [
      "error",
      "PascalCase",
      {
        "registeredComponentsOnly": true
      }
    ],
  }
}