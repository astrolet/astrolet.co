var gulp = require('beverage')(require('gulp'));
gulp.task('dev', 'DEVELOP', ['serve', 'style:watch']);
