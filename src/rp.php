<?php
$path = dirname(__FILE__);

$jsonFile    = $path.'/slider.243a0f0144.json';
$sliderFile  = $path.'/slider.243a0f0144.js';
$replaceFile = $path.'/slider.243a0f0144_replace.js';

$search  = [];
$replace = [];

foreach (json_decode(file_get_contents($jsonFile), true) as $i => $d) {
    $search[$i]  = 'slider_fd8nrn_s(0x' . dechex($i) . ')';
    $replace[$i] = '"' . str_replace([
            '"',
            "\n",
        ], [
            '\"',
            '\n',
        ], $d) . '"';
};

file_put_contents($replaceFile, str_replace($search, $replace, file_get_contents($sliderFile)));
