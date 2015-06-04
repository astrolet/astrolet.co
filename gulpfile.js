gulp = require('beverage')(require('gulp'));
gulp.task('dev', 'DEVELOP', ['serve', 'sourcegate:watch', 'build:watch', 'bsync']);
