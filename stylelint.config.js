/** @type {import('stylelint').Config} */
export default {
    extends: ['stylelint-config-standard', 'stylelint-stylus/standard'],
    plugins: ['stylelint-stylus'],
    overrides: [
        {
            files: ['*.stylus', '*.styl', '**/*.stylus', '**/*.styl'],
            customSyntax: 'postcss-styl'
        }
    ],
    rules: {
        'stylus/indentation': 4,
        'stylus/selector-type-no-unknown': null,
        'selector-class-pattern': null,
        'declaration-no-important': null
    }
};
