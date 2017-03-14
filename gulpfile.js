var gulp = require('gulp');
var less = require('gulp-less');
var browserSync = require('browser-sync');
var reload = browserSync.reload;

gulp.task('less',function() {
	gulp.src('src/less/*.less')
		.pipe(less())
		.pipe(gulp.dest('dist/css'));
});
gulp.task('default',['less']);
// gulp.watch('src/less/*.less',['reload'])
// 	.on('change', function(){
// 		console.log('change');
// 	});


// 监视文件改动并重新载入
gulp.task('serve', function() {
	browserSync({
		server: {
			baseDir: 'app'
		}
	});
	gulp.watch(['src/**/*.css'], {cwd: 'app'}, reload);
});