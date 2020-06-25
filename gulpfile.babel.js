import { src, dest, watch, series, parallel } from 'gulp';
import yargs from 'yargs';
import sass from 'gulp-sass';
import cleanCss from 'gulp-clean-css';
import gulpif from 'gulp-if';
import postcss from 'gulp-postcss';
import sourcemaps from 'gulp-sourcemaps';
import autoprefixer from 'autoprefixer';
import webpack from 'webpack-stream';
import named from 'vinyl-named';
import del from 'del';
import browserSync from "browser-sync";

const PRODUCTION = yargs.argv.prod;
const server = browserSync.create();

// Browsersync
export const bs = done => {
    server.init({
      proxy: "http://localhost/",
      notify: false,
      open: false
    });
    done();
  };

// Reload browser
export const reload = done => {
    server.reload();
    done();
};

// Clean the assets folder
export const clean = () => del(['assets']);

// Run gulp styles to compile sass files
// Run gulp styles --prod to also minify 
export const styles = () => {
    return src(['src/scss/style.scss', 'src/scss/editor-style.scss'])
      .pipe(gulpif(PRODUCTION, sourcemaps.init()))
      .pipe(sass().on('error', sass.logError))
      .pipe(gulpif(PRODUCTION, postcss([ autoprefixer ])))
      .pipe(gulpif(PRODUCTION, cleanCss({compatibility:'ie8'})))
      .pipe(gulpif(PRODUCTION, sourcemaps.write()))
      .pipe(dest('assets/css'))
      .pipe(server.stream());
  }

// Run gulp scripts to compile js files
// Run gulp scripts --prod to also minify 
export const scripts = () => {
    return src(['src/js/script.js'])
        .pipe(named())
        .pipe(webpack({
            module: {
            rules: [
                {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                    presets: ['@babel/preset-env']
                    }
                }
                }
            ]
            },
            mode: PRODUCTION ? 'production' : 'development',
            devtool: PRODUCTION ? 'inline-source-map' : true,
            output: {
            filename: '[name].js'
            },
            externals: {
                jquery: 'jQuery'
            },
        }))
        .on('error', function handleError() {
            this.emit('end'); // Recover from errors
          })
        .pipe(dest('assets/js'));
}

// Copy files from src to assets
export const copy = () => {
    return src(['src/**/*','!src/{js,scss}','!src/{js,scss}/**/*'])
      .pipe(dest('assets'));
  }


export const vendor = () => {
  return src(['src/js/vendor/**/*'])
  .pipe(dest('assets/js/vendor'));
}

// Watch
export const watcher = () => {
    watch('src/scss/**/*.scss', styles);
    watch('src/js/**/*.js', series(scripts, reload));
    watch(['src/**/*','!src/{js,scss}','!src/{js,scss}/**/*'], series(copy, reload));
    watch("**/*.php", reload);
}

// Start dev environment
export const dev = series(clean, parallel(styles, scripts, copy, vendor), bs, watcher)
export const build = series(clean, parallel(styles, scripts, copy, vendor))
export default dev;
