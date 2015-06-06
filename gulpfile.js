gulp = require('beverage')(require('gulp'));
gulp.task('dev', 'DEVELOP', ['sourcegate:watch', 'style:watch']);
