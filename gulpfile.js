var gulp = require('gulp');
var imageResize = require('gulp-image-resize');
var rename = require('gulp-rename');
var imagemin = require('gulp-imagemin');

var resolutionsArr = [
  {
  	name: 'touch-icon-iphone.png',
  	resolution: 80
  },
  {
  	name: 'touch-icon-ipad.png',
  	resolution: 152
  },
  {
  	name: 'touch-icon-iphone-retina.png',
  	resolution: 180
  },
  {
  	name: 'touch-icon-ipad-retina.png',
  	resolution: 167
  }
]
 
gulp.task('default', function () {
  resolutionsArr.forEach(function(iconInfo) {
  	gulp.src('./input/test.png')
    .pipe(imageResize({
      width : iconInfo.resolution,
      height : iconInfo.resolution
    }))
    .pipe(imagemin({
      progressive: true
    }))
    .pipe(rename(iconInfo.name))
    .pipe(gulp.dest('./output'))
  })
})


