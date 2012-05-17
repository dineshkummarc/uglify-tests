# Testing performance of uglify-js

Setting up function to see how fast running uglify-js from command line with list of files passed to it.

Existing directory of 18 javascript files took 7 seconds to uglify = boo.

## Sample output

`Building file string

Files are: 

backbone-config.js backbone.js backbone.min.js jquery.carousel.js jquery.cycle.all.js jquery.exptextarea.js jquery.fieldtag.js jquery.form.js jquery.js jquery.maskedinput.js jquery.simplemodal.js jquery.tmpl.js jquery.ui.min.js jquery.zoom.js underscore.js zepto-addons.js zepto-carousel.js zepto.js

Running command

Finished command

Command took 7.153137922287 seconds.`

## Todo

1. Check if all file contents were concatentated first then passed through uglify if that improves performance.
