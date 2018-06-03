/**
 * Returns the current club performance URL for the dashboard based on today's date
 * @param {string} district - The district in question (defaults to 96) 
 */
function lt_current_club_performance_url(district)
{
	district = (typeof district !== 'undefined') ? district: 96;
	
	// date_string should be populated with a date in MM/DD/YYYY format corresponding to the last day of the current month	
	today = new Date();	
	endOfMonth = new Date(today.getFullYear(), today.getMonth()+1, 0);	
	date_string = (endOfMonth.getMonth()+1) + '/' + endOfMonth.getDate() + '/' + endOfMonth.getFullYear();
	
	// TOFIX: This is hardcoded and will break. I'm not sure how to handle edge cases after June 30th at present
	tm_year = '2017-2018';			
			
	var report_csv_url = 'http://dashboards.toastmasters.org/export.aspx?type=CSV&report=clubperformance~' + district + '~' + date_string + '~~' + tm_year;	
	return report_csv_url;
}

/**
 * Returns the current district performance URL for the dashboard based on today's date 
 * @param {string} district - The district in question (defaults to 96)
 */
function lt_current_district_performance_url(district)
{
	district = (typeof district !== 'undefined') ? district: 96;
	
	// date_string should be populated with a date in MM/DD/YYYY format corresponding to the last day of the current month	
	today = new Date();	
	endOfMonth = new Date(today.getFullYear(), today.getMonth()+1, 0);	
	date_string = (endOfMonth.getMonth()+1) + '/' + endOfMonth.getDate() + '/' + endOfMonth.getFullYear();
	
	// TOFIX: This is hardcoded and will break. I'm not sure how to handle edge cases after June 30th at present
	tm_year = '2017-2018';			
			
	var report_csv_url = 'http://dashboards.toastmasters.org/export.aspx?type=CSV&report=districtperformance~' + district + '~' + date_string + '~~' + tm_year;	
	return report_csv_url;
}

/**
 * Returns the current division performance URL for the dashboard based on today's date
 * @param {string} district - The district in question (defaults to 96) 
 */
function lt_current_division_performance_url(district)
{
	district = (typeof district !== 'undefined') ? district: 96;
	
	// date_string should be populated with a date in MM/DD/YYYY format corresponding to the last day of the current month	
	today = new Date();	
	endOfMonth = new Date(today.getFullYear(), today.getMonth()+1, 0);	
	date_string = (endOfMonth.getMonth()+1) + '/' + endOfMonth.getDate() + '/' + endOfMonth.getFullYear();
	
	// TOFIX: This is hardcoded and will break. I'm not sure how to handle edge cases after June 30th at present
	tm_year = '2017-2018';			
			
	var report_csv_url = 'http://dashboards.toastmasters.org/export.aspx?type=CSV&report=divisionperformance~' + district + '~' + date_string + '~~' + tm_year;	
	return report_csv_url;
}

/**
 * Returns the current district summary URL for the dashboard based on today's date
 */
function lt_current_district_summary_url()
{
	// date_string should be populated with a date in MM/DD/YYYY format corresponding to the last day of the current month	
	today = new Date();	
	endOfMonth = new Date(today.getFullYear(), today.getMonth()+1, 0);	
	date_string = (endOfMonth.getMonth()+1) + '/' + endOfMonth.getDate() + '/' + endOfMonth.getFullYear();
	
	// TOFIX: This is hardcoded and will break. I'm not sure how to handle edge cases after June 30th at present
	tm_year = '2017-2018';			
			
	var report_csv_url = 'http://dashboards.toastmasters.org/export.aspx?type=CSV&report=districtsummary~' + date_string + '~~' + tm_year;	
	return report_csv_url;
}