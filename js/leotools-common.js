
function Leotools(args)
{
	args = (typeof args !== 'undefined') ? args : {};
	
	this.cors_proxy = ( typeof args.cors_proxy !== 'undefined') ? args.cors_proxy : 'https://code.pachogrande.com/leotools/cors/proxy.php/';
	this.district = ( typeof args.district !== 'undefined') ? args.district : '96';
	this.tm_year = ( typeof args.tm_year !== 'undefined') ? args.tm_year : '2020-2021';
	
	this.current_club_performance_url = function()
		{
			// date_string should be populated with a date in MM/DD/YYYY format corresponding to the last day of the current month	
			today = new Date();	
			endOfMonth = new Date(today.getFullYear(), today.getMonth()+1, 0);	
			date_string = (endOfMonth.getMonth()+1) + '/' + endOfMonth.getDate() + '/' + endOfMonth.getFullYear();
			
			var report_csv_url = 'http://dashboards.toastmasters.org/export.aspx?type=CSV&report=clubperformance~' + this.district + '~' + date_string + '~~' + this.tm_year;	
			return report_csv_url;			
		};
	
	this.current_district_performance_url = function()
		{
			// date_string should be populated with a date in MM/DD/YYYY format corresponding to the last day of the current month	
			today = new Date();	
			endOfMonth = new Date(today.getFullYear(), today.getMonth()+1, 0);	
			date_string = (endOfMonth.getMonth()+1) + '/' + endOfMonth.getDate() + '/' + endOfMonth.getFullYear();
			
			var report_csv_url = 'http://dashboards.toastmasters.org/export.aspx?type=CSV&report=districtperformance~' + this.district + '~' + date_string + '~~' + this.tm_year;	
			return report_csv_url;			
		};
	
	this.current_division_performance_url = function()
		{
			// date_string should be populated with a date in MM/DD/YYYY format corresponding to the last day of the current month	
			today = new Date();	
			endOfMonth = new Date(today.getFullYear(), today.getMonth()+1, 0);	
			date_string = (endOfMonth.getMonth()+1) + '/' + endOfMonth.getDate() + '/' + endOfMonth.getFullYear();
			
			var report_csv_url = 'http://dashboards.toastmasters.org/export.aspx?type=CSV&report=divisionperformance~' + this.district + '~' + date_string + '~~' + this.tm_year;	
			return report_csv_url;			
		};	

	this.current_district_summary_url = function()
		{
		// date_string should be populated with a date in MM/DD/YYYY format corresponding to the last day of the current month	
		today = new Date();	
		endOfMonth = new Date(today.getFullYear(), today.getMonth()+1, 0);	
		date_string = (endOfMonth.getMonth()+1) + '/' + endOfMonth.getDate() + '/' + endOfMonth.getFullYear();
					
		var report_csv_url = 'http://dashboards.toastmasters.org/export.aspx?type=CSV&report=districtsummary~' + date_string + '~~' + this.tm_year;	
		return report_csv_url;
		};
			
}
