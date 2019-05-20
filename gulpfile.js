const gulp = require('gulp');
const imagemin = require('gulp-imagemin');

function imgSquash() {
    return gulp.src('./Week 10 - Gulp Setup and Usage/images/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./Week 10 - Gulp Setup and Usage/minified/images'))
}

gulp.task('imgSquash', imgSquash);

gulp.task('watch', ()=> {
    gulp.watch('./Week 10 - Gulp Setup and Usage/images/*', imgSquash);
})

gulp.task('default', gulp.series('imgSquash', 'watch'));''