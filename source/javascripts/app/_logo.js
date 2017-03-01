$(document).ready(function() {
	var target = "http://developer.cbrands.com/";
	var link = $("<a/>").attr("href", target);
	$("[src='images/logo.png']").wrap(link);
});