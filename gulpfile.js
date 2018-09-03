const   
    gulp = require('gulp'),
    ts = require('gulp-typescript'),
    jsminify = require('gulp-minify'),
    path = require('path');

const config = {
    tsconfig: 'tsconfig.json',
    javascript: {
        out: 'dist',
        source: 'src',
        minify: {
            ext: {
                min: '.min.js'
            }
        }
    }
}

const buildConfig = {
    javascript: {
        source: path.join('.', config.javascript.source, '**', '*.ts')
    }
}

const tsProject = ts.createProject(config.tsconfig);

const typescriptBuild = (pipe) =>
    gulp.src(buildConfig.javascript.source)
    .pipe(tsProject())
    .pipe(jsminify(config.javascript.minify))
    .pipe(gulp.dest(config.javascript.out));

gulp.task('build', () =>
   typescriptBuild()
);

gulp.task('build-watch', () => 
    gulp.watch(buildConfig.javascript.source, typescriptBuild)
)

