//Block finds todays date and the next 10 days to be used in a drop down box in an Adobe Form 

var currentDate = new Date(); //Today's date
var day = currentDate.getDate();
var month = currentDate.getMonth() + 1;
var year = currentDate.getFullYear();

f_date = (month + '/' + day + '/' + year);
var date_list = [f_date]; //where the list of dates is stored
for ( var c = 1; c < 11; c++) {	//can change the number of days that will appear in the drop down by changing the 11
	var cur_date = new Date(new Date().getTime() + 24 * c * 60 * 60 * 1000); //the c counts how many days out from the day the form is created
	var month2 = cur_date.getMonth() + 1 ; 
	var day2 = cur_date.getDate();
	var year2 = cur_date.getFullYear();
	var date = ( month2 + '/' + day2 + '/' + year2);
	var date_list2 = [date] ; //changes the date from a string to an array
	var date_list = date_list.concat(date_list2); //adds the new date onto the list of dates
}
