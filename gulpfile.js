const gulp = require('gulp');
const fs = require('fs');

gulp.task( 'create-package-dir', ( cb ) => {
    cb()
})

gulp.task( 'default', gulp.series('create-package-dir' ) )