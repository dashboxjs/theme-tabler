module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  ignorePatterns: ['packages/docs', 'dist', 'node_modules'],
  plugins: ['simple-import-sort'],
  parserOptions: {
    project: './tsconfig.json'
  },
  overrides: [
    {
      files: ['*.ts'],
      parserOptions: {
        createDefaultProgram: true,
        ecmaVersion: 12,
        project: ['./tsconfig.json'],
      },
      extends: [
        'plugin:@angular-eslint/recommended',
        'plugin:@angular-eslint/template/process-inline-templates',

        // AirBnB Styleguide rules
        'airbnb-typescript/base',

        // Settings for Prettier (has to be the last one)
        'plugin:prettier/recommended',
      ],
      rules: {
        'import/extensions': 'off',
        'import/no-extraneous-dependencies': 'off',
        'import/prefer-default-export': 'off',
        'class-methods-use-this': 'off',
        'simple-import-sort/imports': 'error',
        'simple-import-sort/exports': 'error',
        '@typescript-eslint/dot-notation': 'off',
        '@typescript-eslint/no-loop-func': 'off',
        'no-warning-comments': ['error', { "terms": ["fixme"], "location": "start" }],
        '@typescript-eslint/explicit-member-accessibility': [
          'error',
          {
            accessibility: 'explicit',
            overrides: {
              accessors: 'off',
              constructors: 'no-public',
              methods: 'explicit',
              properties: 'off',
              parameterProperties: 'explicit'
            }
          }
        ]
      },
    },
    {
      files: ['*.html'],
      extends: ['plugin:@angular-eslint/template/recommended'],
      rules: {
        'max-len': ['error', { code: 140 }],
      },
    },
    {
      files: ['*.worker.ts'],
      rules: {
        'no-restricted-globals': 0,
      },
    },
    {
      files: ['jest.ts'],
      rules: {
        'import/no-extraneous-dependencies': 0,
        'no-return-assign': 0,
      },
    },
  ],
};
