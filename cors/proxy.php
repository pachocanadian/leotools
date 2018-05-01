<?php
	$url = substr($_SERVER["REQUEST_URI"], strlen($_SERVER["SCRIPT_NAME"])+1 );	
	
	$ch = curl_init();

	// set URL and other appropriate options
	curl_setopt($ch, CURLOPT_URL, 				$url);
	curl_setopt($ch, CURLOPT_HEADER, 			false);
	curl_setopt($ch, CURLOPT_FOLLOWLOCATION, 	true);
	curl_setopt($ch, CURLOPT_RETURNTRANSFER, 	true);
	
	$output = curl_exec($ch);
	
	$csv_lines = (preg_split("/\n|\n/", $output));
	
	$csv = array_map("str_getcsv", $csv_lines);
	$json = json_encode($csv);
	
	header('Access-Control-Allow-Origin: *');	
	print($json);

	// close cURL resource, and free up system resources
	curl_close($ch);
	
?>
