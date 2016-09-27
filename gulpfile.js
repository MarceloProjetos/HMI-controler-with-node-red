// Explicação: /*.css busca todos os arquivos css de uma pasta
const css 			= ['./css/*.css'],
	  js  			= ['./js/ihm.js','./js/mqttws31.js'],
	  jquery 		= ['./js/jquery.js'],
	  jqueryui 		= ['./js/jquery-ui.js'],
	  keyboard 		= ['./js/jquery.keyboard.js'],
	  mousewheel 	= ['./js/jquery.mousewheel.js'],
	  figuras		= ['./images/*'],
	  index			= ['./index.html'];

// Núcleo do Gulp
const gulp      		= require('gulp');

// Agrupa todos os arquivos em um
const concat    		= require('gulp-concat');
const dest 	  		  	= require('gulp-dest');
const strip 			= require('gulp-strip-comments');

// Remove comentários CSS
const stripCssComments 	= require('gulp-strip-css-comments');

// Minifica o CSS
const cleanCSS 			= require('gulp-clean-css');

// Transforma o javascript em formato ilegível para humanos
const uglify 			= require("gulp-uglify");

// Verifica alterações em tempo real, caso haja, compacta novamente todo o projeto
const watch 			= require('gulp-watch');

// minimifica imagens
const imagemin      	= require('gulp-imagemin');

// Processo que agrupará todos os arquivos CSS, removerá comentários CSS e minificará.
gulp.task('minify-css', function() {
     gulp.src(css)
           .pipe(concat('hmi.min.css'))
           .pipe(cleanCSS())
           .pipe(stripCssComments({all:true})) 
           .pipe(gulp.dest('./gulp/css'));
 });

gulp.task('minify-js', function() {
     gulp.src(js)
           .pipe(concat('hmi.min.js')) 
           .pipe(strip())
           .pipe(uglify()) 
           .pipe(gulp.dest('./gulp/js'));
 });

gulp.task('minify-jquery', function() {
     gulp.src(jquery)
           .pipe(concat('jquery.js')) 
           .pipe(strip())
           .pipe(uglify()) 
           .pipe(gulp.dest('./gulp/js'));
 });

gulp.task('minify-jquery-ui', function() {
     gulp.src(jqueryui)
           .pipe(concat('jquery-ui.js')) 
           .pipe(strip())
           .pipe(gulp.dest('./gulp/js'));
 });

gulp.task('minify-keyboard', function() {
     gulp.src(keyboard)
           .pipe(concat('jquery.keyboard.js')) 
           .pipe(strip())
           .pipe(uglify())
           .pipe(gulp.dest('./gulp/js'));
 });

gulp.task('minify-mousewheel', function() {
     gulp.src(mousewheel)
           .pipe(concat('jquery.mousewheel.js')) 
           .pipe(strip())
           .pipe(uglify())
           .pipe(gulp.dest('./gulp/js'));
 });

// gulp minify-imagens minimifica 1x a imagem
gulp.task('minify-imagens', function() {
     gulp.src(figuras)
           .pipe(imagemin()) 
           .pipe(gulp.dest('./gulp/images'));
 });

// Tarefa padrão quando executado o comando "gulp"
gulp.task('default',['minify-css','minify-js','minify-jquery','minify-keyboard','minify-mousewheel','minify-imagens','minify-jquery-ui']);

// Tarefa de monitoração caso algum arquivo seja modificado, comando "gulp watch"
gulp.task('watch', function() {
 gulp.watch(css, 		['minify-css'		]);
 gulp.watch(js,  		['minify-js' 		]);
 gulp.watch(jquery,  	['minify-jquery' 	]);
 gulp.watch(jqueryui,  	['minify-keyboard'  ]);
 gulp.watch(keyboard,  	['minify-mousewheel']);
 gulp.watch(mousewheel, ['minify-jquery-ui' ]);
});
