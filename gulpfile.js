gulp = require('beverage')(require('gulp'));
gulp.task('dev', 'DEVELOP', ['serve', 'sourcegate:watch', 'style:watch', 'bsync']);
