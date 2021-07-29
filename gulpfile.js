const gulp = require('gulp');
const fs = require('fs');

gulp.task( 'create-package-dir', ( cb ) => {
    // Create a version directory
    //// if already exists then delete and create it
    // Write a changelog file
    cb()
})

gulp.task( 'default', gulp.series('create-package-dir' ) )