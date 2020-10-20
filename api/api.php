<?php

include('./env.php');

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET');
header('Access-Control-Allow-Headers: DNT,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type,Range');
header('Access-Control-Max-Age: 1728000');
header('Content-Length: 0');

// ENVIRONMENT VARIABLES
define('API_KEY', $_ENV['API_KEY']);
define('HOME_ADDRESS', $_ENV['HOME_ADDRESS']);

// ACTIONS
define('CONVERT_POSTALCODE', 'postalcode_to_latlng');
define('CALC_DISTANCE', 'distance');

function calculate_distance()
{
    $search = array('$', '"', '#', '<', '>');
    $replace = array('', '', '', '', '', '');
    $latlng = str_replace($search, $replace, $_GET['latlng']);

    $url = 'https://maps.googleapis.com/maps/api/distancematrix/json?origins=' . HOME_ADDRESS . '&destinations=' . $latlng . '&mode=driving&language=nl-NL&key=' . API_KEY;
    $content = file_get_contents($url);

    return $content;
}

function convert_postalcode_to_latlng()
{
    $postalCode =  $_GET['postal_code'];

    $url = 'https://maps.googleapis.com/maps/api/geocode/json?address=' . $postalCode . ',Nederland&key=' . API_KEY;
    $content = file_get_contents($url);

    return $content;
}

function process()
{
    $requestAction = $_GET['action'];

    if ($requestAction == (CONVERT_POSTALCODE || CALC_DISTANCE)) {

        if ($requestAction == CONVERT_POSTALCODE) {
            return convert_postalcode_to_latlng();
        }

        if ($requestAction == CALC_DISTANCE) {
            return json_encode(calculate_distance());
        }
    } else {

        return json_encode(array(
            'error' => 'invalid'
        ));
    }
}

echo process();
