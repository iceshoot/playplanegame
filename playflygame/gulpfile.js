var gulp = require("gulp");
var babel = require('gulp-babel');
var uglify = require('gulp-uglify');
gulp.task('jsTask', function(){
	gulp.src('js/*.js')
	.pipe(babel({"presets": ["es2015"]})) //es6转es5
	.pipe(uglify())
	.pipe(gulp.dest('dest/js'));
});
gulp.task('default', ['jsTask']);