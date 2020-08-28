<?php
	require("ext/phpfastcache/src/autoload.php");
	date_default_timezone_set("America/Vancouver");
	use phpFastCache\CacheManager;
	use phpFastCache\Core\phpFastCache;
	CacheManager::setDefaultConfig([
		"path" => sys_get_temp_dir(),
		"itemDetailedDate" => false
	]);
	$InstanceCache = CacheManager::getInstance('files');

	# only allow requests to dashboards.toastmasters.org
	if(!preg_match('/(http:\/\/|https:\/\/)(dashboards.toastmasters.org)/', $_SERVER["REQUEST_URI"]))
	{
		exit;
	}

	$url = substr($_SERVER["REQUEST_URI"], strlen($_SERVER["SCRIPT_NAME"])+1 );	
	
	$key = $url;
	$key = preg_replace('/[:\/]/', '_', $url);

	$CachedString = $InstanceCache->getItem($key);

	$output = '';
	if (is_null($CachedString->get())) {
		$ch = curl_init();

		// set URL and other appropriate options
		curl_setopt($ch, CURLOPT_URL, 				$url);
		curl_setopt($ch, CURLOPT_HEADER, 			false);
		curl_setopt($ch, CURLOPT_FOLLOWLOCATION, 	true);
		curl_setopt($ch, CURLOPT_RETURNTRANSFER, 	true);
		
		$output = curl_exec($ch);
		curl_close($ch);

		$CachedString->set($output)->expiresAfter(60*60*24*7);
		$InstanceCache->save($CachedString);
	} else {
		$output = $CachedString->get();
	}



	
	$csv_lines = (preg_split("/\n|\n/", $output));
	
	$csv = array_map("str_getcsv", $csv_lines);
	$json = json_encode($csv);
	
	header('Access-Control-Allow-Origin: *');	
	print($json);

	// close cURL resource, and free up system resources
	
?>
