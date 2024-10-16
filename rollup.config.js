import typescript from 'rollup-plugin-typescript2';
import { dts } from "rollup-plugin-dts";
import nodeResolve from '@rollup/plugin-node-resolve';

const config = [
	{
		input: './src/index.tsx',
		output: {
			file: 'dist/index.js',
			format: 'esm',
			exports: 'named',
		},
		plugins: [nodeResolve(), typescript()]
	},
	{
		input: './dist/index.d.ts',
		output: [{ file: 'dist/indexOut.d.ts', format: 'esm' }],
		plugins: [dts()]
	}
];

export default config;
