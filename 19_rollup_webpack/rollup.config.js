import { babel } from '@rollup/plugin-babel';
import styles from "rollup-plugin-styles";
import image from "@rollup/plugin-image"; 
import serve from 'rollup-plugin-serve' 
import livereload from 'rollup-plugin-livereload'

export default {
    input: './src/index.js',
    output: {
      file: './build/bundle.js',
      format: 'cjs'
    },
    // watch: {
    //   exclude: 'node_modules/**'
    // },
    plugins: [
        babel({
        babelHelpers: "bundled",
        presets: ["@babel/env"]
        }),
        styles(),
        image(),
        serve({
          open: true, // Авт-ки открывает стр в браузере при запуске проекта
          contentBase: './', // Та директория откуда будут браться файлы 
          port: 8000,
        }),
        livereload()
    ]
  };

  