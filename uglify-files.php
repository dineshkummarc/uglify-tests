<?php
// Setup
$jsDirectory = realpath( dirname(__FILE__).'/js' );

echo "This is the js directory: " . $jsDirectory . "\n\n";

/**
 * Builds up file string to pass to a shell command
 *
 * @param string $directory path where files reside
 * @return string $results concatenated file names with space inserted between
 */
function buildFileString($directory) {

     $results = array_diff(scandir($directory), array('..', '.'));

     foreach($results as $file) {
          // $fileString .= $directory . '/' . $file . ' ';
          $fileString .= $file . ' ';
     }

     return $results = trim($fileString);
}


/**
 * minifies javascript files and outputs to .min.js file
 *
 * @param string $files string of files to add to command
 * @return void file is created
 */
function uglifyFile($files, $jsDirectory) {
     $command = 'cd ' . $jsDirectory . '; cat ' . $files. ' | uglifyjs -nc -o ../test.min.js';

     shell_exec($command);
}


echo "Building file string\n\n"; 
$files = buildFileString( $jsDirectory );
echo "Files are: \n\n"; 

echo $files;
echo "\n\nRunning command\n\n"; 

//timer
$time_start = microtime(true);
uglifyFile($files, $jsDirectory);
$time_end = microtime(true);
$duration = $time_end - $time_start;

echo "Finished command\n\n"; 
echo "Command took ".$duration." seconds.\n\n"; 









