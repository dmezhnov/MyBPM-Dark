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
        'declaration-no-important': null,
        'selector-pseudo-element-colon-notation': 'single',
        'selector-attribute-quotes': 'never',
        'custom-property-empty-line-before': 'never',
        'stylus/number-leading-zero': 'never',
        'color-function-notation': 'legacy',
        'alpha-value-notation': 'number',
        'color-function-alias-notation': 'with-alpha',
        'function-url-quotes': ['always', { except: ['empty'] }],
        'font-family-name-quotes': 'always-where-required',
        'at-rule-no-vendor-prefix': null,
        'selector-not-notation': 'complex',
        'shorthand-property-no-redundant-values': [true, { ignore: ['four-into-three-edge-values'] }],
        'declaration-block-no-redundant-longhand-properties': true
    }
};
