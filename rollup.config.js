import jsx from 'rollup-plugin-jsx'
import typescript from '@rollup/plugin-typescript'
import nodeResolve from '@rollup/plugin-node-resolve';

const commonPlugins = () => [
	jsx({ factory: "h" }),
	typescript(),
	nodeResolve()
];

const configs = [
	// import
	{
		input: 'src/index.tsx',
		output: {
			file: `dist/index.js`,
			format: 'esm',
			sourcemap: true,
			exports: 'named',
		},
		plugins: commonPlugins(),
	},
	// require
	{
		input: 'src/index.tsx',
		output: {
			file: `dist/index.cjs`,
			format: 'umd',
			name: 'router',
			sourcemap: true,
			exports: 'auto',
		},
		plugins: commonPlugins(),
	},
];

export default configs;
