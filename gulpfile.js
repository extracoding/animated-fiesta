const gulp = require('gulp');
const fs = require('fs');

gulp.task( 'create-package-dir', () => {
    // Create a version directory
    //// if already exists then delete and create it
    // Write a changelog file

    return new Promise( resolve => {
        if ( fs.existsSync('./final-packages/test-package') ) {
            throw new Error("The package branch name is already exists test-package")
        }

        fs.mkdirSync( './final-packages/test-package' );
        resolve()
    })
})

gulp.task( 'default', gulp.series('create-package-dir' ) )