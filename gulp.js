// Definimos o diretório dos arquivos para evitar repetição futuramente
 
// Todos os arquivos CSS que serão compactados
// Explicação: /* busca todos os arquivos de uma pasta, /**/*.* busca todos os arquivos de uma pasta e sub pasta.
var css = [
 './css-source/bootstrap/*.css',
 './css-source/style.css'
];
 
// Núcleo do Gulp
var gulp = require('gulp');
 
// Verifica alterações em tempo real, caso haja, compacta novamente todo o projeto 
var watch = require('gulp-watch');
 
// Minifica o CSS
var cssmin = require("gulp-cssmin");
 
// Agrupa todos arquivos em UM
var concat = require("gulp-concat");
 
// Remove comentários CSS
var stripCssComments = require('gulp-strip-css-comments');
 
// Processo que agrupará todos os arquivos CSS, removerá comentários CSS e minificará.
gulp.task('minify-css', function(){
    gulp.src(css)
    .pipe(concat('style.min.css'))
    .pipe(stripCssComments({all: true}))
    .pipe(cssmin())
    .pipe(gulp.dest('./css/'));
});
 
// Cria a TASK padrão, esta linha será processada quando o comando "GULP" for executado
gulp.task('default','minify-css');
 
// Cria a TASK de verificar em tempo real alterações, se detectar alguma alteração, será processado o comando relativo ao arquivo
gulp.task('watch', function() {
  gulp.watch(css, ['minify-css']);
});
 