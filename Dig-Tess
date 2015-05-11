// Variables to convert points to inches (makes spacing more intuitive)
var inch = 72;

// Employee array for dropdowns, add or remove employees here
var employee = [] 

// Array of the second half of the equipment numbers
var equip2 = ["Select", "03", "07", "09", "15", "18", "19", "22", "27", "29", "30", "32", "33", "34", "35", "36", "37", "38", "39", "41", "43", "44", "45", "46", "47", "48", "49", "50", "51", "52", "53", "54", "55", "59", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "70", "71", "529", "530", "537", "538", "560", "675", "677", "678", "679", "680", "681", "682", "683", "687", "688", "689", "713", "721"]   


//Variables to create the Date Array that is used for all date dropdowns
var currentDate = new Date(); 								//Today's date
var day = currentDate.getDate();  							//Pulls just the day of the month from the date
var month = currentDate.getMonth() + 1; 					//Pulls just the month from the date, must add one because it uses base 0 index
var year = currentDate.getFullYear(); 						//Pulls the Year from the date

f_date = (month + '/' + day + '/' + year); 					//Creates a string of the date in the format desired
var date_list = [f_date]; 									//where the list of dates is stored
for ( var c = 1; c < 11; c++) {								//can change the number of days that will appear in the drop down by changing the 11
	var cur_date = new Date(new Date().getTime() + 24 * c * 60 * 60 * 1000); //the c counts how many days out from the day the form is created
	var day2 = cur_date.getDate(); 							//Pulls just the day of the month c days out from form creation 
	var month2 = cur_date.getMonth() + 1 ; 					//Pulls just the month from the date c days out from form creation, must add one because it uses base 0 index
	var year2 = cur_date.getFullYear(); 					//Pulls the Year from the date c days out from form creation
	var date = ( month2 + '/' + day2 + '/' + year2); 		//Creates a string of the date in the format desired c days from the date of form creation 
	var date_list2 = [date] ; 								//changes the date from a string to an array
	var date_list = date_list.concat(date_list2); 			//adds the new date onto the list of dates
}

// Add the text for Start date, completion date, start time, completion time 
this.addWatermarkFromText({ 
	cText: "                  START DATE:                                                              COMPLETION DATE:\r                  START  TIME:                                                              COMPLETION  TIME:\r\r\r\r\r\r\r\r\r                     ---------LABOR--------------         ---EQUIPMENT---           -----------MATERIAL--------\r     DATE    EMPLOYEE      HRS    OT        NUMBER     HRS                     ITEM                   QTY              COST          \r", 
	nFontSize: 12,
	nHorizAlign: app.constants.align.right, 
 	nVertValue: .4*inch
	});
	
	
// StartDate
var aRect = this.getPageBox();
aRect[0] += 2.35*inch;            // from upper left hand corner of page.
aRect[2] = aRect[0]+ 1.5*inch;    // Make it 1.5 inch wide
aRect[1] -= 3.98*inch;
aRect[3] = aRect[1] - 12;       // and 12 points high

var f = this.addField("StartDate", "combobox", 0, aRect )
	f.setItems( date_list )

// Completion Date
var aRect = this.getPageBox();
aRect[0] += 6.55*inch;            // from upper left hand corner of page.
aRect[2] = aRect[0]+ 1.5*inch;    // Make it 1.5 inch wide
aRect[1] -= 3.98*inch;
aRect[3] = aRect[1] - 12;       // and 12 points high

var f = this.addField("CompletionDate", "combobox", 0, aRect )
		f.setItems( date_list )

//StartTimeHour Drop down
var aRect = this.getPageBox();
aRect[0] += 2.35*inch;            // from upper left hand corner of page.
aRect[2] = aRect[0]+ .5*inch;    // Make it .5 inch wide
aRect[1] -= 4.15*inch;
aRect[3] = aRect[1] - 12;       // and 12 points high

var f = this.addField("StartTimeHour", "combobox", 0, aRect )
f.setItems( [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12] );   


//StartTimeMinute Drop down
var aRect = this.getPageBox();
aRect[0] += 2.85*inch;            // from upper left hand corner of page.
aRect[2] = aRect[0]+ .5*inch;    // Make it .5 inch wide
aRect[1] -= 4.15*inch;
aRect[3] = aRect[1] - 12;       // and 12 points high

var f = this.addField("StartTimeMinute", "combobox", 0, aRect )
f.setItems( ["00", "05", 10, 15, 20, 25, 30, 35, 40, 45, 50, 55] );   


//StartTimeAMorPM Drop down
var aRect = this.getPageBox();
aRect[0] += 3.35*inch;            // from upper left hand corner of page.
aRect[2] = aRect[0]+ .5*inch;    // Make it .5 inch wide
aRect[1] -= 4.15*inch;
aRect[3] = aRect[1] - 12;       // and 12 points high

var f = this.addField("StartTimeAMorPM", "combobox", 0, aRect )
f.setItems( ["AM", "PM"] );   


//StartTime
var aRect = this.getPageBox();
aRect[0] += 1*inch;             // from upper left hand corner of page.
aRect[2] = aRect[0]+ .4*inch;    // Make it .4 inch wide
aRect[1] -= 11*inch;
aRect[3] = aRect[1] - 12;       // and 12 points high

var f = this.addField("StartTime", "text", 0, aRect )
f.setAction("Calculate", "var h = this.getField('StartTimeHour').value;\rvar m = this.getField('StartTimeMinute').value;\r\rvar h1 = String(h);\r\rif (m == 10){\rvar m1 = '.1700';}\r\relse\rif (m == 15){\rvar m1 = '.2500';}\r\relse \rif (m == 20){\rvar m1 = '.3300';}\r\relse \rif (m == 25){\rvar m1 = '.4200';}\r\relse\rif (m == 30){\rvar m1 = '.5000';}\r\relse\rif (m == 35){\rvar m1 = '.5800';}\r\relse	\rif (m == 40){\rvar m1 = '.6700';}\r\relse\rif (m == 45){\rvar m1 = '.7500';}\r\relse\rif (m == 50){\rvar m1 = '.8300';}\r\relse\rif (m == 55){\rvar m1 = '.9200';}\r\relse\rif (m == 0){\rvar m1 = '.0000';}\r\relse\rif (m == 5){\rvar m1 = '.0800';}\r\rvar a = h1 + m1;\rvar g = this.getField('StartTime');\rg.value = (a);");
f.textColor = color.white;	
f.fillColor = color.white;


//ComletionTimeHour Drop down
var aRect = this.getPageBox();
aRect[0] += 6.55*inch;            // from upper left hand corner of page.
aRect[2] = aRect[0]+ .5*inch;    // Make it .5 inch wide
aRect[1] -= 4.15*inch;
aRect[3] = aRect[1] - 12;       // and 12 points high

var f = this.addField("ComletionTimeHour", "combobox", 0, aRect )
f.setItems( [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12] );   


//ComletionTimeMinute Drop down
var aRect = this.getPageBox();
aRect[0] += 7.05*inch;            // from upper left hand corner of page.
aRect[2] = aRect[0]+ .5*inch;    // Make it .5 inch wide
aRect[1] -= 4.15*inch;
aRect[3] = aRect[1] - 12;       // and 12 points high

var f = this.addField("ComletionTimeMinute", "combobox", 0, aRect )
f.setItems( ["00", "05", 10, 15, 20, 25, 30, 35, 40, 45, 50, 55] );   


//ComletionTimeAMorPM Drop down
var aRect = this.getPageBox();
aRect[0] += 7.55*inch;            // from upper left hand corner of page.
aRect[2] = aRect[0]+ .5*inch;    // Make it .5 inch wide
aRect[1] -= 4.15*inch;
aRect[3] = aRect[1] - 12;       // and 12 points high

var f = this.addField("ComletionTimeAMorPM", "combobox", 0, aRect )
f.setItems( ["AM", "PM"] );   


//CompletionTime
var aRect = this.getPageBox();
aRect[0] += 1.5*inch;             // from upper left hand corner of page.
aRect[2] = aRect[0]+ .4*inch;    // Make it .4 inch wide
aRect[1] -= 11*inch;
aRect[3] = aRect[1] - 12;       // and 12 points high

var f = this.addField("CompletionTime", "text", 0, aRect )
f.setAction("Calculate", "var hh = this.getField('ComletionTimeHour').value;\rvar mm = this.getField('ComletionTimeMinute').value;\r\rvar hh1 = String(hh);\r\rif (mm == 10){\rvar mm1 = '.1700';}\r\relse\rif (mm == 15){\rvar mm1 = '.2500';}\r\relse \rif (mm == 20){\rvar mm1 = '.3300';}\r\relse \rif (mm == 25){\rvar mm1 = '.4200';}\r\relse\rif (mm == 30){\rvar mm1 = '.5000';}\r\relse\rif (mm == 35){\rvar mm1 = '.5800';}\r\relse	\rif (mm == 40){\rvar mm1 = '.6700';}\r\relse\rif (mm == 45){\rvar mm1 = '.7500';}\r\relse\rif (mm == 50){\rvar mm1 = '.8300';}\r\relse\rif (mm == 55){\rvar mm1 = '.9200';}\r\relse\rif (mm == 0){\rvar mm1 = '.0000';}\r\relse\rif (mm == 5){\rvar mm1 = '.0800';}\r\rvar a = hh1 + mm1;\rvar g = this.getField('CompletionTime');\rg.value = (a);");
f.textColor = color.white;
f.fillColor = color.white;

// Comments
var aRect = this.getPageBox();
aRect[0] += .3*inch;            // from upper left hand corner of page.
aRect[2] = aRect[0]+ 7.8*inch;    // Make it 7.8 inch wide
aRect[1] -= 4.33*inch;
aRect[3] = aRect[1] - 106;       // and 106 points high

var f = this.addField("Comments", "text", 0, aRect )
f.multiline = true;  //This will allow the text to be on multiple lines

// Date1
var aRect = this.getPageBox();
aRect[0] += .1*inch;            // from upper left hand corner of page.
aRect[2] = aRect[0]+ .5*inch;    // Make it .4*inch inch wide
aRect[1] -= 6.25*inch;
aRect[3] = aRect[1] - 12;       // and 12 points high
var f = this.addField("Date1", "combobox", 0, aRect )
	f.setItems( date_list )

//Employee1 Drop down
var aRect = this.getPageBox();
aRect[0] += .7*inch;            // from upper left hand corner of page.
aRect[2] = aRect[0]+ 1.1*inch;    // Make it 1 inch wide
aRect[1] -= 6.25*inch;
aRect[3] = aRect[1] - 12;       // and 12 points high

var f = this.addField("Employee1", "combobox", 0, aRect )
f.setItems( employee );   

// LaborHours1 
var aRect = this.getPageBox();
aRect[0] += 1.9*inch;            // from upper left hand corner of page.
aRect[2] = aRect[0]+ .4*inch;    // Make it .4 inch wide
aRect[1] -= 6.25*inch;
aRect[3] = aRect[1] - 12;       // and 12 points high

var f = this.addField("LaborHours1", "text", 0, aRect )

// LaborOT1 
var aRect = this.getPageBox();
aRect[0] += 2.4*inch;            // from upper left hand corner of page.
aRect[2] = aRect[0]+ .4*inch;    // Make it .4 inch wide
aRect[1] -= 6.25*inch;
aRect[3] = aRect[1] - 12;       // and 12 points high

var f = this.addField("LaborOT1 ", "text", 0, aRect )

// EquipmentNumber1a 
var aRect = this.getPageBox();
aRect[0] += 3*inch;            // from upper left hand corner of page.
aRect[2] = aRect[0]+ .4*inch;    // Make it .4 inch wide
aRect[1] -= 6.25*inch;
aRect[3] = aRect[1] - 12;       // and 12 points high

var f = this.addField("EquipmentNumber1a", "combobox", 0, aRect )
f.setItems( ["Select",23,24] );

// EquipmentNumber1b 
var aRect = this.getPageBox();
aRect[0] += 3.4*inch;            // from upper left hand corner of page.
aRect[2] = aRect[0]+ .4*inch;    // Make it .4 inch wide
aRect[1] -= 6.25*inch;
aRect[3] = aRect[1] - 12;       // and 12 points high

var f = this.addField("EquipmentNumber1b", "combobox", 0, aRect )
f.setItems( equip2 )

// EquipmentHours1 
var aRect = this.getPageBox();
aRect[0] += 3.9*inch;             // from upper left hand corner of page.
aRect[2] = aRect[0]+ .5*inch;    // Make it .4 inch wide
aRect[1] -= 6.25*inch;
aRect[3] = aRect[1] - 12;       // and 12 points high

var f = this.addField("EquipmentHours1", "text", 0, aRect )

// MaterialItem1
var aRect = this.getPageBox();
aRect[0] += 4.6*inch;             // from upper left hand corner of page.
aRect[2] = aRect[0]+ 1.9*inch;    // Make it 1.9 inch wide
aRect[1] -= 6.25*inch;
aRect[3] = aRect[1] - 12;       // and 12 points high

var f = this.addField("MaterialItem1", "text", 0, aRect )

// MaterialQty1
var aRect = this.getPageBox();
aRect[0] += 6.6*inch;             // from upper left hand corner of page.
aRect[2] = aRect[0]+ .4*inch;    // Make it .4 inch wide
aRect[1] -= 6.25*inch;
aRect[3] = aRect[1] - 12;       // and 12 points high

var f = this.addField("MaterialQty1", "combobox", 0, aRect )
f.setItems( ["Select",1,2,3,4,5,6,7,8,9,10] );

// MaterialCost1
var aRect = this.getPageBox();
aRect[0] += 7.1*inch;             // from upper left hand corner of page.
aRect[2] = aRect[0]+ 1*inch;    // Make it 1 inch wide
aRect[1] -= 6.25*inch;
aRect[3] = aRect[1] - 12;       // and 12 points high

var f = this.addField("MaterialCost1", "text", 0, aRect )

// Date2
var aRect = this.getPageBox();
aRect[0] += .1*inch;            // from upper left hand corner of page.
aRect[2] = aRect[0]+ .5*inch;    // Make it .4*inch inch wide
aRect[1] -= 6.5*inch;
aRect[3] = aRect[1] - 12;       // and 12 points high
var f = this.addField("Date2", "combobox", 0, aRect )
	f.setItems( date_list )

//Employee2 Drop down
var aRect = this.getPageBox();
aRect[0] += .7*inch;            // from upper left hand corner of page.
aRect[2] = aRect[0]+ 1.1*inch;    // Make it 1 inch wide
aRect[1] -= 6.5*inch;
aRect[3] = aRect[1] - 12;       // and 12 points high

var f = this.addField("Employee2", "combobox", 0, aRect )
f.setItems( employee );   

// LaborHours2 
var aRect = this.getPageBox();
aRect[0] += 1.9*inch;            // from upper left hand corner of page.
aRect[2] = aRect[0]+ .4*inch;    // Make it .4 inch wide
aRect[1] -= 6.5*inch;
aRect[3] = aRect[1] - 12;       // and 12 points high

var f = this.addField("LaborHours2", "text", 0, aRect )

// LaborOT2 
var aRect = this.getPageBox();
aRect[0] += 2.4*inch;            // from upper left hand corner of page.
aRect[2] = aRect[0]+ .4*inch;    // Make it .4 inch wide
aRect[1] -= 6.5*inch;
aRect[3] = aRect[1] - 12;       // and 12 points high

var f = this.addField("LaborOT2 ", "text", 0, aRect )

// EquipmentNumber2a 
var aRect = this.getPageBox();
aRect[0] += 3*inch;            // from upper left hand corner of page.
aRect[2] = aRect[0]+ .4*inch;    // Make it .4 inch wide
aRect[1] -= 6.5*inch;
aRect[3] = aRect[1] - 12;       // and 12 points high

var f = this.addField("EquipmentNumber2a", "combobox", 0, aRect )
f.setItems( ["Select",23,24] );

// EquipmentNumber2b 
var aRect = this.getPageBox();
aRect[0] += 3.4*inch;            // from upper left hand corner of page.
aRect[2] = aRect[0]+ .4*inch;    // Make it .4 inch wide
aRect[1] -= 6.5*inch;
aRect[3] = aRect[1] - 12;       // and 12 points high

var f = this.addField("EquipmentNumber2b", "combobox", 0, aRect )
f.setItems( equip2 )

// EquipmentHours2
var aRect = this.getPageBox();
aRect[0] += 3.9*inch;             // from upper left hand corner of page.
aRect[2] = aRect[0]+ .5*inch;    // Make it .4 inch wide
aRect[1] -= 6.5*inch;
aRect[3] = aRect[1] - 12;       // and 12 points high

var f = this.addField("EquipmentHours2", "text", 0, aRect )

// MaterialItem2
var aRect = this.getPageBox();
aRect[0] += 4.6*inch;             // from upper left hand corner of page.
aRect[2] = aRect[0]+ 1.9*inch;    // Make it 1.9 inch wide
aRect[1] -= 6.5*inch;
aRect[3] = aRect[1] - 12;       // and 12 points high

var f = this.addField("MaterialItem2", "text", 0, aRect )

// MaterialQty2
var aRect = this.getPageBox();
aRect[0] += 6.6*inch;             // from upper left hand corner of page.
aRect[2] = aRect[0]+ .4*inch;    // Make it .4 inch wide
aRect[1] -= 6.5*inch;
aRect[3] = aRect[1] - 12;       // and 12 points high

var f = this.addField("MaterialQty2", "combobox", 0, aRect )
f.setItems( ["Select",1,2,3,4,5,6,7,8,9,10] );

// MaterialCost2
var aRect = this.getPageBox();
aRect[0] += 7.1*inch;             // from upper left hand corner of page.
aRect[2] = aRect[0]+ 1*inch;    // Make it 1 inch wide
aRect[1] -= 6.5*inch;
aRect[3] = aRect[1] - 12;       // and 12 points high

var f = this.addField("MaterialCost2", "text", 0, aRect )

// Date3
var aRect = this.getPageBox();
aRect[0] += .1*inch;            // from upper left hand corner of page.
aRect[2] = aRect[0]+ .5*inch;    // Make it .4*inch inch wide
aRect[1] -= 6.75*inch;
aRect[3] = aRect[1] - 12;       // and 12 points high
var f = this.addField("Date3", "combobox", 0, aRect )
	f.setItems( date_list )



//Employee3 Drop down
var aRect = this.getPageBox();
aRect[0] += .7*inch;            // from upper left hand corner of page.
aRect[2] = aRect[0]+ 1.1*inch;    // Make it 1 inch wide
aRect[1] -= 6.75*inch;
aRect[3] = aRect[1] - 12;       // and 12 points high

var f = this.addField("Employee3", "combobox", 0, aRect )
f.setItems( employee );   

// LaborHours3
var aRect = this.getPageBox();
aRect[0] += 1.9*inch;            // from upper left hand corner of page.
aRect[2] = aRect[0]+ .4*inch;    // Make it .4 inch wide
aRect[1] -= 6.75*inch;
aRect[3] = aRect[1] - 12;       // and 12 points high

var f = this.addField("LaborHours3", "text", 0, aRect )

// LaborOT3
var aRect = this.getPageBox();
aRect[0] += 2.4*inch;            // from upper left hand corner of page.
aRect[2] = aRect[0]+ .4*inch;    // Make it .4 inch wide
aRect[1] -= 6.75*inch;
aRect[3] = aRect[1] - 12;       // and 12 points high

var f = this.addField("LaborOT3 ", "text", 0, aRect )

// EquipmentNumber3a 
var aRect = this.getPageBox();
aRect[0] += 3*inch;            // from upper left hand corner of page.
aRect[2] = aRect[0]+ .4*inch;    // Make it .4 inch wide
aRect[1] -= 6.75*inch;
aRect[3] = aRect[1] - 12;       // and 12 points high

var f = this.addField("EquipmentNumber3a", "combobox", 0, aRect )
f.setItems( ["Select",23,24] );


// EquipmentNumber3b 
var aRect = this.getPageBox();
aRect[0] += 3.4*inch;            // from upper left hand corner of page.
aRect[2] = aRect[0]+ .4*inch;    // Make it .4 inch wide
aRect[1] -= 6.75*inch;
aRect[3] = aRect[1] - 12;       // and 12 points high

var f = this.addField("EquipmentNumber3b", "combobox", 0, aRect )
f.setItems( equip2 )

// EquipmentHours3
var aRect = this.getPageBox();
aRect[0] += 3.9*inch;             // from upper left hand corner of page.
aRect[2] = aRect[0]+ .5*inch;    // Make it .4 inch wide
aRect[1] -= 6.75*inch;
aRect[3] = aRect[1] - 12;       // and 12 points high

var f = this.addField("EquipmentHours3", "text", 0, aRect )

// MaterialItem3
var aRect = this.getPageBox();
aRect[0] += 4.6*inch;             // from upper left hand corner of page.
aRect[2] = aRect[0]+ 1.9*inch;    // Make it 1.9 inch wide
aRect[1] -= 6.75*inch;
aRect[3] = aRect[1] - 12;       // and 12 points high

var f = this.addField("MaterialItem3", "text", 0, aRect )

// MaterialQty3
var aRect = this.getPageBox();
aRect[0] += 6.6*inch;             // from upper left hand corner of page.
aRect[2] = aRect[0]+ .4*inch;    // Make it .4 inch wide
aRect[1] -= 6.75*inch;
aRect[3] = aRect[1] - 12;       // and 12 points high

var f = this.addField("MaterialQty3", "combobox", 0, aRect )
f.setItems( ["Select",1,2,3,4,5,6,7,8,9,10] );

// MaterialCost3
var aRect = this.getPageBox();
aRect[0] += 7.1*inch;             // from upper left hand corner of page.
aRect[2] = aRect[0]+ 1*inch;    // Make it 1 inch wide
aRect[1] -= 6.75*inch;
aRect[3] = aRect[1] - 12;       // and 12 points high

var f = this.addField("MaterialCost3", "text", 0, aRect )

// Date4
var aRect = this.getPageBox();
aRect[0] += .1*inch;            // from upper left hand corner of page.
aRect[2] = aRect[0]+ .5*inch;    // Make it .4*inch inch wide
aRect[1] -= 7*inch;
aRect[3] = aRect[1] - 12;       // and 12 points high
var f = this.addField("Date4", "combobox", 0, aRect )
	f.setItems( date_list )

//Employee4 Drop down
var aRect = this.getPageBox();
aRect[0] += .7*inch;            // from upper left hand corner of page.
aRect[2] = aRect[0]+ 1.1*inch;    // Make it 1 inch wide
aRect[1] -= 7*inch;
aRect[3] = aRect[1] - 12;       // and 12 points high

var f = this.addField("Employee4", "combobox", 0, aRect )
f.setItems( employee );   

// LaborHours4
var aRect = this.getPageBox();
aRect[0] += 1.9*inch;            // from upper left hand corner of page.
aRect[2] = aRect[0]+ .4*inch;    // Make it .4 inch wide
aRect[1] -= 7*inch;
aRect[3] = aRect[1] - 12;       // and 12 points high

var f = this.addField("LaborHours4", "text", 0, aRect )

// LaborOT4
var aRect = this.getPageBox();
aRect[0] += 2.4*inch;            // from upper left hand corner of page.
aRect[2] = aRect[0]+ .4*inch;    // Make it .4 inch wide
aRect[1] -= 7*inch;
aRect[3] = aRect[1] - 12;       // and 12 points high

var f = this.addField("LaborOT4 ", "text", 0, aRect )

// EquipmentNumber4a 
var aRect = this.getPageBox();
aRect[0] += 3*inch;            // from upper left hand corner of page.
aRect[2] = aRect[0]+ .4*inch;    // Make it .4 inch wide
aRect[1] -= 7*inch;
aRect[3] = aRect[1] - 12;       // and 12 points high

var f = this.addField("EquipmentNumber4a", "combobox", 0, aRect )
f.setItems( ["Select",23,24] );

// EquipmentNumber4b 
var aRect = this.getPageBox();
aRect[0] += 3.4*inch;            // from upper left hand corner of page.
aRect[2] = aRect[0]+ .4*inch;    // Make it .4 inch wide
aRect[1] -= 7*inch;
aRect[3] = aRect[1] - 12;       // and 12 points high

var f = this.addField("EquipmentNumber4b", "combobox", 0, aRect )
f.setItems( equip2 )

// EquipmentHours4
var aRect = this.getPageBox();
aRect[0] += 3.9*inch;             // from upper left hand corner of page.
aRect[2] = aRect[0]+ .5*inch;    // Make it .4 inch wide
aRect[1] -= 7*inch;
aRect[3] = aRect[1] - 12;       // and 12 points high

var f = this.addField("EquipmentHours4", "text", 0, aRect )

// MaterialItem4
var aRect = this.getPageBox();
aRect[0] += 4.6*inch;             // from upper left hand corner of page.
aRect[2] = aRect[0]+ 1.9*inch;    // Make it 1.9 inch wide
aRect[1] -= 7*inch;
aRect[3] = aRect[1] - 12;       // and 12 points high

var f = this.addField("MaterialItem4", "text", 0, aRect )

// MaterialQty4
var aRect = this.getPageBox();
aRect[0] += 6.6*inch;             // from upper left hand corner of page.
aRect[2] = aRect[0]+ .4*inch;    // Make it .4 inch wide
aRect[1] -= 7*inch;
aRect[3] = aRect[1] - 12;       // and 12 points high

var f = this.addField("MaterialQty4", "combobox", 0, aRect )
f.setItems( ["Select",1,2,3,4,5,6,7,8,9,10] );

// MaterialCost4
var aRect = this.getPageBox();
aRect[0] += 7.1*inch;             // from upper left hand corner of page.
aRect[2] = aRect[0]+ 1*inch;    // Make it 1 inch wide
aRect[1] -= 7*inch;
aRect[3] = aRect[1] - 12;       // and 12 points high

var f = this.addField("MaterialCost4", "text", 0, aRect )

// Date5
var aRect = this.getPageBox();
aRect[0] += .1*inch;            // from upper left hand corner of page.
aRect[2] = aRect[0]+ .5*inch;    // Make it .4*inch inch wide
aRect[1] -= 7.25*inch;
aRect[3] = aRect[1] - 12;       // and 12 points high
var f = this.addField("Date5", "combobox", 0, aRect )
	f.setItems( date_list )

//Employee5 Drop down
var aRect = this.getPageBox();
aRect[0] += .7*inch;            // from upper left hand corner of page.
aRect[2] = aRect[0]+ 1.1*inch;    // Make it 1 inch wide
aRect[1] -= 7.25*inch;
aRect[3] = aRect[1] - 12;       // and 12 points high

var f = this.addField("Employee5", "combobox", 0, aRect )
f.setItems( employee );   

// LaborHours5
var aRect = this.getPageBox();
aRect[0] += 1.9*inch;            // from upper left hand corner of page.
aRect[2] = aRect[0]+ .4*inch;    // Make it .4 inch wide
aRect[1] -= 7.25*inch;
aRect[3] = aRect[1] - 12;       // and 12 points high

var f = this.addField("LaborHours5", "text", 0, aRect )

// LaborOT5
var aRect = this.getPageBox();
aRect[0] += 2.4*inch;            // from upper left hand corner of page.
aRect[2] = aRect[0]+ .4*inch;    // Make it .4 inch wide
aRect[1] -= 7.25*inch;
aRect[3] = aRect[1] - 12;       // and 12 points high

var f = this.addField("LaborOT5 ", "text", 0, aRect )

// EquipmentNumber5a 
var aRect = this.getPageBox();
aRect[0] += 3*inch;            // from upper left hand corner of page.
aRect[2] = aRect[0]+ .4*inch;    // Make it .4 inch wide
aRect[1] -= 7.25*inch;
aRect[3] = aRect[1] - 12;       // and 12 points high

var f = this.addField("EquipmentNumber5a", "combobox", 0, aRect )
f.setItems( ["Select",23,24] );

// EquipmentNumber5b 
var aRect = this.getPageBox();
aRect[0] += 3.4*inch;            // from upper left hand corner of page.
aRect[2] = aRect[0]+ .4*inch;    // Make it .4 inch wide
aRect[1] -= 7.25*inch;
aRect[3] = aRect[1] - 12;       // and 12 points high

var f = this.addField("EquipmentNumber5b", "combobox", 0, aRect )
f.setItems( equip2 )

// EquipmentHours5
var aRect = this.getPageBox();
aRect[0] += 3.9*inch;             // from upper left hand corner of page.
aRect[2] = aRect[0]+ .5*inch;    // Make it .4 inch wide
aRect[1] -= 7.25*inch;
aRect[3] = aRect[1] - 12;       // and 12 points high

var f = this.addField("EquipmentHours5", "text", 0, aRect )

// MaterialItem5
var aRect = this.getPageBox();
aRect[0] += 4.6*inch;             // from upper left hand corner of page.
aRect[2] = aRect[0]+ 1.9*inch;    // Make it 1.9 inch wide
aRect[1] -= 7.25*inch;
aRect[3] = aRect[1] - 12;       // and 12 points high

var f = this.addField("MaterialItem5", "text", 0, aRect )

// MaterialQty5
var aRect = this.getPageBox();
aRect[0] += 6.6*inch;             // from upper left hand corner of page.
aRect[2] = aRect[0]+ .4*inch;    // Make it .4 inch wide
aRect[1] -= 7.25*inch;
aRect[3] = aRect[1] - 12;       // and 12 points high

var f = this.addField("MaterialQty5", "combobox", 0, aRect )
f.setItems( ["Select",1,2,3,4,5,6,7,8,9,10] );

// MaterialCost5
var aRect = this.getPageBox();
aRect[0] += 7.1*inch;             // from upper left hand corner of page.
aRect[2] = aRect[0]+ 1*inch;    // Make it 1 inch wide
aRect[1] -= 7.25*inch;
aRect[3] = aRect[1] - 12;       // and 12 points high

var f = this.addField("MaterialCost5", "text", 0, aRect )

// Date6
var aRect = this.getPageBox();
aRect[0] += .1*inch;            // from upper left hand corner of page.
aRect[2] = aRect[0]+ .5*inch;    // Make it .4*inch inch wide
aRect[1] -= 7.5*inch;
aRect[3] = aRect[1] - 12;       // and 12 points high
var f = this.addField("Date6", "combobox", 0, aRect )
	f.setItems( date_list )

//Employee6 Drop down
var aRect = this.getPageBox();
aRect[0] += .7*inch;            // from upper left hand corner of page.
aRect[2] = aRect[0]+ 1.1*inch;    // Make it 1 inch wide
aRect[1] -= 7.5*inch;
aRect[3] = aRect[1] - 12;       // and 12 points high

var f = this.addField("Employee6", "combobox", 0, aRect )
f.setItems( employee );   

// LaborHours6 
var aRect = this.getPageBox();
aRect[0] += 1.9*inch;            // from upper left hand corner of page.
aRect[2] = aRect[0]+ .4*inch;    // Make it .4 inch wide
aRect[1] -= 7.5*inch;
aRect[3] = aRect[1] - 12;       // and 12 points high

var f = this.addField("LaborHours6", "text", 0, aRect )

// LaborOT6 
var aRect = this.getPageBox();
aRect[0] += 2.4*inch;            // from upper left hand corner of page.
aRect[2] = aRect[0]+ .4*inch;    // Make it .4 inch wide
aRect[1] -= 7.5*inch;
aRect[3] = aRect[1] - 12;       // and 12 points high

var f = this.addField("LaborOT6 ", "text", 0, aRect )

// EquipmentNumber6a 
var aRect = this.getPageBox();
aRect[0] += 3*inch;            // from upper left hand corner of page.
aRect[2] = aRect[0]+ .4*inch;    // Make it .4 inch wide
aRect[1] -= 7.5*inch;
aRect[3] = aRect[1] - 12;       // and 12 points high

var f = this.addField("EquipmentNumber6a", "combobox", 0, aRect )
f.setItems( ["Select",23,24] );

// EquipmentNumber6b 
var aRect = this.getPageBox();
aRect[0] += 3.4*inch;            // from upper left hand corner of page.
aRect[2] = aRect[0]+ .4*inch;    // Make it .4 inch wide
aRect[1] -= 7.5*inch;
aRect[3] = aRect[1] - 12;       // and 12 points high

var f = this.addField("EquipmentNumber6b", "combobox", 0, aRect )
f.setItems( equip2 )

// EquipmentHours6
var aRect = this.getPageBox();
aRect[0] += 3.9*inch;             // from upper left hand corner of page.
aRect[2] = aRect[0]+ .5*inch;    // Make it .4 inch wide
aRect[1] -= 7.5*inch;
aRect[3] = aRect[1] - 12;       // and 12 points high

var f = this.addField("EquipmentHours6", "text", 0, aRect )

// MaterialItem6
var aRect = this.getPageBox();
aRect[0] += 4.6*inch;             // from upper left hand corner of page.
aRect[2] = aRect[0]+ 1.9*inch;    // Make it 1.9 inch wide
aRect[1] -= 7.5*inch;
aRect[3] = aRect[1] - 12;       // and 12 points high

var f = this.addField("MaterialItem6", "text", 0, aRect )

// MaterialQty6
var aRect = this.getPageBox();
aRect[0] += 6.6*inch;             // from upper left hand corner of page.
aRect[2] = aRect[0]+ .4*inch;    // Make it .4 inch wide
aRect[1] -= 7.5*inch;
aRect[3] = aRect[1] - 12;       // and 12 points high

var f = this.addField("MaterialQty6", "combobox", 0, aRect )
f.setItems( ["Select",1,2,3,4,5,6,7,8,9,10] );

// MaterialCost6
var aRect = this.getPageBox();
aRect[0] += 7.1*inch;             // from upper left hand corner of page.
aRect[2] = aRect[0]+ 1*inch;    // Make it 1 inch wide
aRect[1] -= 7.5*inch;
aRect[3] = aRect[1] - 12;       // and 12 points high

var f = this.addField("MaterialCost6", "text", 0, aRect )


// Adds the Text for Water Services Stamp
this.addWatermarkFromText({ 
	cText: "WATER SERVICES\r   Grass\r   Irrigation\r   Concrete\r   Asphalt\r   Fence", 
	nTextAlign: app.constants.align.left,
	nHorizAlign: app.constants.align.right, 
	nVertAlign: app.constants.align.top, 
	nHorizValue: -5*inch, nVertValue: -8*inch
});

// Grass
var aRect = this.getPageBox();
aRect[0] += .5*inch;             // from upper left hand corner of page.
aRect[2] = aRect[0]+ 12;    // 12 points wide
aRect[1] -= 8.45*inch;
aRect[3] = aRect[1] - 12;       // and 12 points high

var f = this.addField("Grass", "checkbox", 0, aRect )
f.borderStyle = border.s;
f.strokeColor = color.black;
f.lineWidth = 3;

// GrassOther
var aRect = this.getPageBox();
aRect[0] += 1.75*inch;             // from upper left hand corner of page.
aRect[2] = aRect[0]+ 1.75*inch;    // Make it 1 inch wide
aRect[1] -= 8.45*inch;
aRect[3] = aRect[1] - 20;       // and 12 points high

var f = this.addField("GrassOther", "text", 0, aRect )

// Irrigation
var aRect = this.getPageBox();
aRect[0] += .5*inch;             // from upper left hand corner of page.
aRect[2] = aRect[0]+ 12;    // 12 points wide
aRect[1] -= 8.8*inch;
aRect[3] = aRect[1] - 12;       // and 12 points high

var f = this.addField("Irrigation", "checkbox", 0, aRect )
f.borderStyle = border.s;
f.strokeColor = color.black;
f.lineWidth = 3;

// IrrigationOther
var aRect = this.getPageBox();
aRect[0] += 2.25*inch;             // from upper left hand corner of page.
aRect[2] = aRect[0]+ 1.25*inch;    // width
aRect[1] -= 8.8*inch;
aRect[3] = aRect[1] - 20;       // and 12 points high

var f = this.addField("IrrigationOther", "text", 0, aRect )

// Concrete
var aRect = this.getPageBox();
aRect[0] += .5*inch;             // from upper left hand corner of page.
aRect[2] = aRect[0]+ 12;    // 12 points wide
aRect[1] -= 9.15*inch;
aRect[3] = aRect[1] - 12;       // and 12 points high

var f = this.addField("Concrete", "checkbox", 0, aRect )
f.borderStyle = border.s;
f.strokeColor = color.black;
f.lineWidth = 3;

// ConcreteOther
var aRect = this.getPageBox();
aRect[0] += 2.25*inch;             // from upper left hand corner of page.
aRect[2] = aRect[0]+ 1.25*inch;    // width
aRect[1] -= 9.15*inch;
aRect[3] = aRect[1] - 20;       // and 12 points high

var f = this.addField("ConcreteOther", "text", 0, aRect )

// Asphalt
var aRect = this.getPageBox();
aRect[0] += .5*inch;             // from upper left hand corner of page.
aRect[2] = aRect[0]+ 12;    // 12 points wide
aRect[1] -= 9.5*inch;
aRect[3] = aRect[1] - 12;       // and 12 points high

var f = this.addField("Asphalt", "checkbox", 0, aRect )
f.borderStyle = border.s;
f.strokeColor = color.black;
f.lineWidth = 3;

// AsphaltOther
var aRect = this.getPageBox();
aRect[0] += 2*inch;             // from upper left hand corner of page.
aRect[2] = aRect[0]+ 1.5*inch;    // width
aRect[1] -= 9.5*inch;
aRect[3] = aRect[1] - 20;       // and 12 points high

var f = this.addField("AsphaltOther", "text", 0, aRect )

// Fence
var aRect = this.getPageBox();
aRect[0] += .5*inch;             // from upper left hand corner of page.
aRect[2] = aRect[0]+ 12;    // 12 points wide
aRect[1] -= 9.85*inch;
aRect[3] = aRect[1] - 12;       // and 12 points high

var f = this.addField("Fence", "checkbox", 0, aRect )
f.borderStyle = border.s;
f.strokeColor = color.black;
f.lineWidth = 3;

// FenceOther
var aRect = this.getPageBox();
aRect[0] += 1.75*inch;             // from upper left hand corner of page.
aRect[2] = aRect[0]+ 1.75*inch;    // width
aRect[1] -= 9.85*inch;
aRect[3] = aRect[1] - 20;       // and 12 points high

var f = this.addField("FenceOther", "text", 0, aRect )

// Adds the Text for Dig-Tess
this.addWatermarkFromText({ 
	cText: "          Dig-Tess\rID #:\rDate:\rTime:", 
	nTextAlign: app.constants.align.left,
	nHorizAlign: app.constants.align.right, 
	nVertAlign: app.constants.align.top, 
	nHorizValue: -.8*inch, nVertValue: -8.3*inch
});

// DigTessNumber
var aRect = this.getPageBox();
aRect[0] += 6.55*inch;             // from upper left hand corner of page.
aRect[2] = aRect[0]+ 1.5*inch;    // width
aRect[1] -= 8.75*inch;
aRect[3] = aRect[1] - 20; 

var f = this.addField("DigTessNumber", "text", 0, aRect )

// DigTessDate
var aRect = this.getPageBox();
aRect[0] += 6.55*inch;             // from upper left hand corner of page.
aRect[2] = aRect[0]+ 1.5*inch;    // width
aRect[1] -= 9.1*inch;
aRect[3] = aRect[1] - 20;

var f = this.addField("DigTessDate", "combobox", 0, aRect )
		f.setItems( date_list )

//DigTessTimeHour Drop down
var aRect = this.getPageBox();
aRect[0] += 6.55*inch;            // from upper left hand corner of page.
aRect[2] = aRect[0]+ .5*inch;    // Make it .5 inch wide
aRect[1] -= 9.45*inch;
aRect[3] = aRect[1] - 20;       // and 12 points high

var f = this.addField("DigTessTimeHour", "combobox", 0, aRect )
f.setItems( [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12] );   

//DigTessTimeMinute Drop down
var aRect = this.getPageBox();
aRect[0] += 7.05*inch;            // from upper left hand corner of page.
aRect[2] = aRect[0]+ .5*inch;    // Make it .5 inch wide
aRect[1] -= 9.45*inch;
aRect[3] = aRect[1] - 20;       // and 12 points high

var f = this.addField("DigTessTimeMinute", "combobox", 0, aRect )
f.setItems( ["00", "05", 10, 15, 20, 25, 30, 35, 40, 45, 50, 55] );   

//DigTessTimeAMorPM Drop down
var aRect = this.getPageBox();
aRect[0] += 7.55*inch;            // from upper left hand corner of page.
aRect[2] = aRect[0]+ .5*inch;    // Make it .5 inch wide
aRect[1] -= 9.45*inch;
aRect[3] = aRect[1] - 20;       // and 12 points high

var f = this.addField("DigTessTimeAMorPM", "combobox", 0, aRect )
f.setItems( ["AM", "PM"] );   


//Save to new folder
//This will only work correctly if the document is level (may have problems with scanned documents)
//The document must have been OCRed
var wf = this.getPageNthWord(0,0,true); //first page, first word, only text
var wo = this.getPageNthWord(0,2,true); //first page, third word, only text

var ckWord, numWords;
var	numWords = this.getPageNumWords(0);
var loc = "LOCATION";
var cat = "CATEGORY";

//Loop goes through index of the words on the page to find LOCATION and then defines the following three words to use in the saving name
for (var j = 0; j < numWords; j++) 
{
	var ckWord = this.getPageNthWord(0, j)
	if( ckWord == loc )
	{
		j++;
		var a = this.getPageNthWord(0, j++,true); //Address Number
		var dd = this.getPageNthWord(0,j++,true); //Street Name
		var r = this.getPageNthWord(0, j++,true); 
		break;
	}
}

var name = (wf + '-' + wo + '-' + a + dd + r + '.pdf')

//Change to the folder of the individual users 
this.saveAs("/x/Water Services Forms/Tess/Temp Folder forms should go to Supervisors/" + name);
