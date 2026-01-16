import js from '@eslint/js';
import pluginReact from 'eslint-plugin-react';
import { defineConfig } from 'eslint/config';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default defineConfig([
	{
		files: ['src/**/*.{ts,mts,cts,tsx}'],
		plugins: { js },
		extends: ['js/recommended'],
		languageOptions: {
			globals: {
				...globals.browser,
				...globals.nodeBuiltin,
			},
		},
	},
	tseslint.configs.recommended,
	pluginReact.configs.flat['jsx-runtime'],

	{
		rules: {
			'@typescript-eslint/no-explicit-any': 'off',
			'@typescript-eslint/no-unused-vars': [
				'warn',
				{
					argsIgnorePattern: '(^_|args)',
					caughtErrors: 'all',
					caughtErrorsIgnorePattern: '^_',
					destructuredArrayIgnorePattern: '^_',
					varsIgnorePattern: '^_',
				},
			],
			'react/react-in-jsx-scope': 'off',
			'no-case-declarations': 'off',
			'@typescript-eslint/no-empty-object-type': [
				'warn',
				{
					allowInterfaces: 'with-single-extends',
					allowWithName: 'Props$',
				},
			],
			'@typescript-eslint/ban-ts-comment': 'off',
		},
	},
	{
		settings: {
			react: {
				version: 'detect',
			},
			languageOptions: {
				parserOptions: {
					tsconfigRootDir: import.meta.dirname,
				},
			},
		},
	},
	{
		ignores: [
			'**/dist/**',
			'**/build/**',
			'**/node_modules/**',
			'*.js',
			'*.jsx',
		],
	},
]);
