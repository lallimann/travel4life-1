var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var reload      = browserSync.reload;

gulp.task('serve', function () {

   browserSync.init({
      proxy: "http://localhost:80/MAD3144/travel4life/Website/"
   })

    // browserSync.init({
    //     server: {
    //         baseDir: "./"
    //     }
    // });

    gulp.watch("*.html").on("save", browserSync.reload);
});