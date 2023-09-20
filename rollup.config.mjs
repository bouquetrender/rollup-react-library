import terser from '@rollup/plugin-terser';
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";
import postcss from "rollup-plugin-postcss";
import peerDepsExternal from 'rollup-plugin-peer-deps-external';

import pkg from "./package.json" assert { type: 'json' };

export default [
	{
		// 配置第一个输出的 bundle
		input: 'src/index.ts', // 入口文件路径
		output: [
			{
				file: pkg.main, // CommonJS 格式的输出文件路径
				format: 'cjs', // 输出格式为 CommonJS
				sourcemap: true, // 生成 source map 文件
			},
			{
				file: pkg.module, // ES 模块格式的输出文件路径
				format: "esm", // 输出格式为 ES 模块
				sourcemap: true, // 生成 source map 文件
			},
		],
		plugins: [
			peerDepsExternal(), // 处理外部 peerDependencies
			resolve(), // 解析模块路径
			commonjs(), // 将 CommonJS 模块转换为 ES 模块
			typescript({ tsconfig: "./tsconfig.json" }), // 处理 TypeScript 文件
			postcss(), // 处理 CSS 文件
			terser() // 压缩 JavaScript 代码
		]
	},
	{
		// 配置第二个输出，用于生成 TypeScript 类型定义文件
		input: "dist/esm/types/index.d.ts", // 输入的 TypeScript 类型定义文件
		output: [{ file: "dist/index.d.ts", format: "esm" }], // 输出的 ES 模块格式的类型定义文件
		plugins: [dts()], // 处理类型定义文件
		external: [/\.(css|less|scss)$/], // 外部模块，这里匹配 CSS 文件
	},
];