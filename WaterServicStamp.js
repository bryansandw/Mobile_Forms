//1. Variables 
// Variables to convert points to inches (makes spacing more intuitive)
var inch = 72;

// Employee array for dropdowns, add or remove employees here
var employee = [] 

// Array of the first half of the equipment numbers
var equip1 = [" ", 22, 23, 24] 

// Array of the second half of the equipment numbers
var equip2 = [" ", "08", "10", "11", "15", "16", "18", "22", "29", "34", "35", "37", "38", "42", "43", "46", "47", "48", "49", "50", "51", "52", "53", "54", "55", "56", "57", "59", "60", "61", "62", "64", "66", "67", "68", "70", "71", "77", "79", "80", "81", "84", "86"]   

//Variables to create the Date Array that is used for all date dropdowns
var currentDate = new Date(); 								//Today's date
var day = currentDate.getDate();  							//Pulls just the day of the month from the date
var month = currentDate.getMonth() + 1; 					//Pulls just the month from the date, must add one because it uses base 0 index
var year = currentDate.getFullYear(); 						//Pulls the Year from the date

f_date = (month + '/' + day + '/' + year); 					//Creates a string of the date in the format desired
var date_list = ['',f_date]; 									//where the list of dates is stored
for ( var c = 1; c < 11; c++) {								//can change the number of days that will appear in the drop down by changing the 11
	var cur_date = new Date(new Date().getTime() + 24 * c * 60 * 60 * 1000); //the c counts how many days out from the day the form is created
	var day2 = cur_date.getDate(); 							//Pulls just the day of the month c days out from form creation 
	var month2 = cur_date.getMonth() + 1 ; 					//Pulls just the month from the date c days out from form creation, must add one because it uses base 0 index
	var year2 = cur_date.getFullYear(); 					//Pulls the Year from the date c days out from form creation
	var date = ( month2 + '/' + day2 + '/' + year2); 		//Creates a string of the date in the format desired c days from the date of form creation 
	var date_list2 = [date] ; 								//changes the date from a string to an array
	var date_list = date_list.concat(date_list2); 			//adds the new date onto the list of dates
}

//2. Add Text 
// Add the text for Start date, completion date, start time, completion time 
this.addWatermarkFromText({ 
	cText: "                  START DATE:                                                              COMPLETION DATE:\r                  START  TIME:                                                              COMPLETION  TIME:\r\r\r\r\r\r\r\r\r                     ---------LABOR--------------         ---EQUIPMENT---           -----------MATERIAL--------\r     DATE    EMPLOYEE      HRS    OT        NUMBER     HRS                     ITEM                   QTY              COST          \r", 
	nFontSize: 12, 											//sets the font size
	nHorizAlign: app.constants.align.right, 				//sets the text alignment to the right 
 	nVertValue: .4*inch										//the default vertical location is the center of the page, positive numbers adjust it up and negative numbers adjust it down
	});
	
//3. Add Fields	
// StartDate
var aRect = this.getPageBox();
aRect[0] += 2.35*inch;            							// X coordinate
aRect[2] = aRect[0]+ 1.5*inch;    							// Width
aRect[1] -= 3.98*inch;										// Y coordinate
aRect[3] = aRect[1] - 12;       							// Height

var f = this.addField("StartDate", "combobox", 0, aRect )
	f.setItems( date_list )
    f.borderStyle = border.s;
    f.strokeColor = color.black;
    f.lineWidth = 1;

// Completion Date
var aRect = this.getPageBox();
aRect[0] += 6.55*inch;            							// X coordinate
aRect[2] = aRect[0]+ 1.5*inch;    							// Width
aRect[1] -= 3.98*inch;										// Y coordinate
aRect[3] = aRect[1] - 12;       							// and 12 points high

var f = this.addField("CompletionDate", "combobox", 0, aRect )
    f.setItems( date_list )
    f.borderStyle = border.s;
    f.strokeColor = color.black;
    f.lineWidth = 1;		

//StartTimeHour Drop down
var aRect = this.getPageBox();
aRect[0] += 2.35*inch;            							// X coordinate
aRect[2] = aRect[0]+ .5*inch;    							// Width
aRect[1] -= 4.15*inch;										// Y coordinate
aRect[3] = aRect[1] - 12;       							// and 12 points high

var f = this.addField("StartTimeHour", "combobox", 0, aRect )
f.setItems( ['',1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12] ); 
    f.borderStyle = border.s;
    f.strokeColor = color.black;
    f.lineWidth = 1;	  


//StartTimeMinute Drop down
var aRect = this.getPageBox();
aRect[0] += 2.85*inch;            							// X coordinate
aRect[2] = aRect[0]+ .5*inch;    							// Width
aRect[1] -= 4.15*inch;										// Y coordinate
aRect[3] = aRect[1] - 12;       							// and 12 points high

var f = this.addField("StartTimeMinute", "combobox", 0, aRect )
f.setItems( ['', "00", "05", 10, 15, 20, 25, 30, 35, 40, 45, 50, 55] ); 
    f.borderStyle = border.s;
    f.strokeColor = color.black;
    f.lineWidth = 1;	  


//StartTimeAMorPM Drop down
var aRect = this.getPageBox();
aRect[0] += 3.35*inch;            							// X coordinate
aRect[2] = aRect[0]+ .5*inch;    							// Width
aRect[1] -= 4.15*inch;										// Y coordinate
aRect[3] = aRect[1] - 12;       							// and 12 points high

var f = this.addField("StartTimeAMorPM", "combobox", 0, aRect )
f.setItems( ['',"AM", "PM"] );   
    f.borderStyle = border.s;
    f.strokeColor = color.black;
    f.lineWidth = 1;	 

//StartTime
var aRect = this.getPageBox();
aRect[0] += 1*inch;             							// X coordinate
aRect[2] = aRect[0]+ .4*inch;    							// Width
aRect[1] -= 11*inch;										// Y coordinate
aRect[3] = aRect[1] - 12;       							// and 12 points high

var f = this.addField("StartTime", "text", 0, aRect )
f.setAction("Calculate", "var h = this.getField('StartTimeHour').value;\rvar m = this.getField('StartTimeMinute').value;\r\rvar h1 = String(h);\r\rif (m == 10){\rvar m1 = '.1700';}\r\relse\rif (m == 15){\rvar m1 = '.2500';}\r\relse \rif (m == 20){\rvar m1 = '.3300';}\r\relse \rif (m == 25){\rvar m1 = '.4200';}\r\relse\rif (m == 30){\rvar m1 = '.5000';}\r\relse\rif (m == 35){\rvar m1 = '.5800';}\r\relse	\rif (m == 40){\rvar m1 = '.6700';}\r\relse\rif (m == 45){\rvar m1 = '.7500';}\r\relse\rif (m == 50){\rvar m1 = '.8300';}\r\relse\rif (m == 55){\rvar m1 = '.9200';}\r\relse\rif (m == 0){\rvar m1 = '.0000';}\r\relse\rif (m == 5){\rvar m1 = '.0800';}\r\rvar a = h1 + m1;\rvar g = this.getField('StartTime');\rg.value = (a);");
f.textColor = color.white;	
f.fillColor = color.white;
    f.borderStyle = border.s;
    f.strokeColor = color.black;
    f.lineWidth = 1;	 


//ComletionTimeHour Drop down
var aRect = this.getPageBox();
aRect[0] += 6.55*inch;            							// X coordinate
aRect[2] = aRect[0]+ .5*inch;    							// Width
aRect[1] -= 4.15*inch;										// Y coordinate
aRect[3] = aRect[1] - 12;       							// and 12 points high

var f = this.addField("ComletionTimeHour", "combobox", 0, aRect )
f.setItems( ['',1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12] );   
    f.borderStyle = border.s;
    f.strokeColor = color.black;
    f.lineWidth = 1;	 

//ComletionTimeMinute Drop down
var aRect = this.getPageBox();
aRect[0] += 7.05*inch;            							// X coordinate
aRect[2] = aRect[0]+ .5*inch;    							// Width
aRect[1] -= 4.15*inch;										// Y coordinate
aRect[3] = aRect[1] - 12;       							// and 12 points high

var f = this.addField("ComletionTimeMinute", "combobox", 0, aRect )
f.setItems( ['',"00", "05", 10, 15, 20, 25, 30, 35, 40, 45, 50, 55] );   
    f.borderStyle = border.s;
    f.strokeColor = color.black;
    f.lineWidth = 1;	 

//ComletionTimeAMorPM Drop down
var aRect = this.getPageBox();
aRect[0] += 7.55*inch;            							// X coordinate
aRect[2] = aRect[0]+ .5*inch;    							// Width
aRect[1] -= 4.15*inch;										// Y coordinate
aRect[3] = aRect[1] - 12;       							// and 12 points high

var f = this.addField("ComletionTimeAMorPM", "combobox", 0, aRect )
f.setItems( ['',"AM", "PM"] );   
    f.borderStyle = border.s;
    f.strokeColor = color.black;
    f.lineWidth = 1;	 

//CompletionTime
var aRect = this.getPageBox();
aRect[0] += 1.5*inch;             							// X coordinate
aRect[2] = aRect[0]+ .4*inch;    							// Width
aRect[1] -= 11*inch;										// Y coordinate
aRect[3] = aRect[1] - 12;       							// and 12 points high

var f = this.addField("CompletionTime", "text", 0, aRect )
f.setAction("Calculate", "var hh = this.getField('ComletionTimeHour').value;\rvar mm = this.getField('ComletionTimeMinute').value;\r\rvar hh1 = String(hh);\r\rif (mm == 10){\rvar mm1 = '.1700';}\r\relse\rif (mm == 15){\rvar mm1 = '.2500';}\r\relse \rif (mm == 20){\rvar mm1 = '.3300';}\r\relse \rif (mm == 25){\rvar mm1 = '.4200';}\r\relse\rif (mm == 30){\rvar mm1 = '.5000';}\r\relse\rif (mm == 35){\rvar mm1 = '.5800';}\r\relse	\rif (mm == 40){\rvar mm1 = '.6700';}\r\relse\rif (mm == 45){\rvar mm1 = '.7500';}\r\relse\rif (mm == 50){\rvar mm1 = '.8300';}\r\relse\rif (mm == 55){\rvar mm1 = '.9200';}\r\relse\rif (mm == 0){\rvar mm1 = '.0000';}\r\relse\rif (mm == 5){\rvar mm1 = '.0800';}\r\rvar a = hh1 + mm1;\rvar g = this.getField('CompletionTime');\rg.value = (a);");
f.textColor = color.white;
f.fillColor = color.white;
    f.borderStyle = border.s;
    f.strokeColor = color.black;
    f.lineWidth = 1;	 
	
	
// Comments
var aRect = this.getPageBox();
aRect[0] += .3*inch;            							// X coordinate
aRect[2] = aRect[0]+ 7.8*inch;    							// Width
aRect[1] -= 4.33*inch;										// Y coordinate
aRect[3] = aRect[1] - 106;       							// and 106 points high

var f = this.addField("Comments", "text", 0, aRect )
f.multiline = true;  //This will allow the text to be on multiple lines
    f.borderStyle = border.s;
    f.strokeColor = color.black;
    f.lineWidth = 1;

// Date1
var aRect = this.getPageBox();
aRect[0] += .1*inch;            							// X coordinate
aRect[2] = aRect[0]+ .5*inch;    							// Width
aRect[1] -= 6.25*inch;										// Y coordinate
aRect[3] = aRect[1] - 12;       							// and 12 points high
var f = this.addField("Date1", "combobox", 0, aRect )
	f.setItems( date_list )
    f.borderStyle = border.s;
    f.strokeColor = color.black;
    f.lineWidth = 1;

//Employee1 Drop down
var aRect = this.getPageBox();
aRect[0] += .7*inch;            							// X coordinate
aRect[2] = aRect[0]+ 1.1*inch;    							// Width
aRect[1] -= 6.25*inch;										// Y coordinate
aRect[3] = aRect[1] - 12;       							// and 12 points high

var f = this.addField("Employee1", "combobox", 0, aRect )
f.setItems( employee );   
    f.borderStyle = border.s;
    f.strokeColor = color.black;
    f.lineWidth = 1;

// LaborHours1 
var aRect = this.getPageBox();
aRect[0] += 1.9*inch;            							// X coordinate
aRect[2] = aRect[0]+ .4*inch;    							// Width
aRect[1] -= 6.25*inch;										// Y coordinate
aRect[3] = aRect[1] - 12;       							// and 12 points high

var f = this.addField("LaborHours1", "text", 0, aRect )
    f.borderStyle = border.s;
    f.strokeColor = color.black;
    f.lineWidth = 1;
	
// LaborOT1 
var aRect = this.getPageBox();
aRect[0] += 2.4*inch;            							// X coordinate
aRect[2] = aRect[0]+ .4*inch;    							// Width
aRect[1] -= 6.25*inch;										// Y coordinate
aRect[3] = aRect[1] - 12;       							// and 12 points high

var f = this.addField("LaborOT1 ", "text", 0, aRect )
    f.borderStyle = border.s;
    f.strokeColor = color.black;
    f.lineWidth = 1;
	
// EquipmentNumber1a 
var aRect = this.getPageBox();
aRect[0] += 3*inch;            								// X coordinate
aRect[2] = aRect[0]+ .4*inch;    							// Width
aRect[1] -= 6.25*inch;										// Y coordinate
aRect[3] = aRect[1] - 12;       							// and 12 points high

var f = this.addField("EquipmentNumber1a", "combobox", 0, aRect )
f.setItems( equip1 );
    f.borderStyle = border.s;
    f.strokeColor = color.black;
    f.lineWidth = 1;
	
// EquipmentNumber1b 
var aRect = this.getPageBox();
aRect[0] += 3.4*inch;            							// X coordinate
aRect[2] = aRect[0]+ .4*inch;    							// Width
aRect[1] -= 6.25*inch;										// Y coordinate
aRect[3] = aRect[1] - 12;       							// and 12 points high

var f = this.addField("EquipmentNumber1b", "combobox", 0, aRect )
f.setItems( equip2 );
    f.borderStyle = border.s;
    f.strokeColor = color.black;
    f.lineWidth = 1;
	
// EquipmentHours1 
var aRect = this.getPageBox();
aRect[0] += 3.9*inch;             							// X coordinate
aRect[2] = aRect[0]+ .5*inch;    							// Width
aRect[1] -= 6.25*inch;										// Y coordinate
aRect[3] = aRect[1] - 12;       							// and 12 points high

var f = this.addField("EquipmentHours1", "text", 0, aRect )
    f.borderStyle = border.s;
    f.strokeColor = color.black;
    f.lineWidth = 1;
	
// MaterialItem1
var aRect = this.getPageBox();
aRect[0] += 4.6*inch;             							// X coordinate
aRect[2] = aRect[0]+ 1.9*inch;    							// Width
aRect[1] -= 6.25*inch;										// Y coordinate
aRect[3] = aRect[1] - 12;      								// and 12 points high

var f = this.addField("MaterialItem1", "text", 0, aRect )
    f.borderStyle = border.s;
    f.strokeColor = color.black;
    f.lineWidth = 1;
	
// MaterialQty1
var aRect = this.getPageBox();
aRect[0] += 6.6*inch;             							// X coordinate
aRect[2] = aRect[0]+ .4*inch;    							// Width
aRect[1] -= 6.25*inch;										// Y coordinate
aRect[3] = aRect[1] - 12;       							// and 12 points high

var f = this.addField("MaterialQty1", "combobox", 0, aRect )
f.setItems( [" ",1,2,3,4,5,6,7,8,9,10] );
    f.borderStyle = border.s;
    f.strokeColor = color.black;
    f.lineWidth = 1;
	
// MaterialCost1
var aRect = this.getPageBox();
aRect[0] += 7.1*inch;             							// X coordinate
aRect[2] = aRect[0]+ 1*inch;   	 							// Width
aRect[1] -= 6.25*inch;										// Y coordinate
aRect[3] = aRect[1] - 12;       							// and 12 points high

var f = this.addField("MaterialCost1", "text", 0, aRect )
    f.borderStyle = border.s;
    f.strokeColor = color.black;
    f.lineWidth = 1;
	
// Date2
var aRect = this.getPageBox();
aRect[0] += .1*inch;            							// X coordinate
aRect[2] = aRect[0]+ .5*inch;    							// Width
aRect[1] -= 6.5*inch;										// Y coordinate
aRect[3] = aRect[1] - 12;       							// and 12 points high
var f = this.addField("Date2", "combobox", 0, aRect )
	f.setItems( date_list )
    f.borderStyle = border.s;
    f.strokeColor = color.black;
    f.lineWidth = 1;
	
//Employee2 Drop down
var aRect = this.getPageBox();
aRect[0] += .7*inch;            							// X coordinate
aRect[2] = aRect[0]+ 1.1*inch;    							// Width
aRect[1] -= 6.5*inch;										// Y coordinate
aRect[3] = aRect[1] - 12;       							// and 12 points high

var f = this.addField("Employee2", "combobox", 0, aRect )
f.setItems( employee );   
    f.borderStyle = border.s;
    f.strokeColor = color.black;
    f.lineWidth = 1;
	
// LaborHours2 
var aRect = this.getPageBox();
aRect[0] += 1.9*inch;            							// X coordinate
aRect[2] = aRect[0]+ .4*inch;    							// Width
aRect[1] -= 6.5*inch;										// Y coordinate
aRect[3] = aRect[1] - 12;       							// and 12 points high

var f = this.addField("LaborHours2", "text", 0, aRect )
    f.borderStyle = border.s;
    f.strokeColor = color.black;
    f.lineWidth = 1;
	
// LaborOT2 
var aRect = this.getPageBox();
aRect[0] += 2.4*inch;            							// X coordinate
aRect[2] = aRect[0]+ .4*inch;    							// Width
aRect[1] -= 6.5*inch;										// Y coordinate
aRect[3] = aRect[1] - 12;       							// and 12 points high

var f = this.addField("LaborOT2 ", "text", 0, aRect )
    f.borderStyle = border.s;
    f.strokeColor = color.black;
    f.lineWidth = 1;
	
// EquipmentNumber2a 
var aRect = this.getPageBox();
aRect[0] += 3*inch;            								// X coordinate
aRect[2] = aRect[0]+ .4*inch;    							// Width
aRect[1] -= 6.5*inch;										// Y coordinate
aRect[3] = aRect[1] - 12;       							// and 12 points high

var f = this.addField("EquipmentNumber2a", "combobox", 0, aRect )
f.setItems( equip1 );
    f.borderStyle = border.s;
    f.strokeColor = color.black;
    f.lineWidth = 1;
	
// EquipmentNumber2b 
var aRect = this.getPageBox();
aRect[0] += 3.4*inch;            							// X coordinate
aRect[2] = aRect[0]+ .4*inch;    							// Width
aRect[1] -= 6.5*inch;										// Y coordinate
aRect[3] = aRect[1] - 12;       							// and 12 points high

var f = this.addField("EquipmentNumber2b", "combobox", 0, aRect )
f.setItems( equip2 )
    f.borderStyle = border.s;
    f.strokeColor = color.black;
    f.lineWidth = 1;
	
// EquipmentHours2
var aRect = this.getPageBox();
aRect[0] += 3.9*inch;             							// X coordinate
aRect[2] = aRect[0]+ .5*inch;    							// Width
aRect[1] -= 6.5*inch;										// Y coordinate
aRect[3] = aRect[1] - 12;       							// and 12 points high

var f = this.addField("EquipmentHours2", "text", 0, aRect )
    f.borderStyle = border.s;
    f.strokeColor = color.black;
    f.lineWidth = 1;
	
// MaterialItem2
var aRect = this.getPageBox();
aRect[0] += 4.6*inch;             							// X coordinate
aRect[2] = aRect[0]+ 1.9*inch;    							// Width
aRect[1] -= 6.5*inch;										// Y coordinate
aRect[3] = aRect[1] - 12;       							// and 12 points high

var f = this.addField("MaterialItem2", "text", 0, aRect )
    f.borderStyle = border.s;
    f.strokeColor = color.black;
    f.lineWidth = 1;
	
// MaterialQty2
var aRect = this.getPageBox();
aRect[0] += 6.6*inch;             							// X coordinate
aRect[2] = aRect[0]+ .4*inch;    							// Width
aRect[1] -= 6.5*inch;										// Y coordinate
aRect[3] = aRect[1] - 12;       							// and 12 points high

var f = this.addField("MaterialQty2", "combobox", 0, aRect )
f.setItems( [" ",1,2,3,4,5,6,7,8,9,10] );
    f.borderStyle = border.s;
    f.strokeColor = color.black;
    f.lineWidth = 1;
	
// MaterialCost2
var aRect = this.getPageBox();
aRect[0] += 7.1*inch;             							// X coordinate
aRect[2] = aRect[0]+ 1*inch;    							// Width
aRect[1] -= 6.5*inch;										// Y coordinate
aRect[3] = aRect[1] - 12;       							// and 12 points high

var f = this.addField("MaterialCost2", "text", 0, aRect )
    f.borderStyle = border.s;
    f.strokeColor = color.black;
    f.lineWidth = 1;
	
// Date3
var aRect = this.getPageBox();
aRect[0] += .1*inch;            							// X coordinate
aRect[2] = aRect[0]+ .5*inch;    							// Width
aRect[1] -= 6.75*inch;										// Y coordinate
aRect[3] = aRect[1] - 12;       							// and 12 points high
var f = this.addField("Date3", "combobox", 0, aRect )
	f.setItems( date_list )
    f.borderStyle = border.s;
    f.strokeColor = color.black;
    f.lineWidth = 1;
	


//Employee3 Drop down
var aRect = this.getPageBox();
aRect[0] += .7*inch;            							// X coordinate
aRect[2] = aRect[0]+ 1.1*inch;    							// Width
aRect[1] -= 6.75*inch;										// Y coordinate
aRect[3] = aRect[1] - 12;      		 						// and 12 points high

var f = this.addField("Employee3", "combobox", 0, aRect )
f.setItems( employee );   
    f.borderStyle = border.s;
    f.strokeColor = color.black;
    f.lineWidth = 1;
	
// LaborHours3
var aRect = this.getPageBox();
aRect[0] += 1.9*inch;            							// X coordinate
aRect[2] = aRect[0]+ .4*inch;    							// Width
aRect[1] -= 6.75*inch;										// Y coordinate
aRect[3] = aRect[1] - 12;       							// and 12 points high

var f = this.addField("LaborHours3", "text", 0, aRect )
    f.borderStyle = border.s;
    f.strokeColor = color.black;
    f.lineWidth = 1;
	
// LaborOT3
var aRect = this.getPageBox();
aRect[0] += 2.4*inch;            							// X coordinate
aRect[2] = aRect[0]+ .4*inch;    							// Width
aRect[1] -= 6.75*inch;										// Y coordinate
aRect[3] = aRect[1] - 12;       							// and 12 points high

var f = this.addField("LaborOT3 ", "text", 0, aRect )
    f.borderStyle = border.s;
    f.strokeColor = color.black;
    f.lineWidth = 1;
	
// EquipmentNumber3a 
var aRect = this.getPageBox();
aRect[0] += 3*inch;            								// X coordinate
aRect[2] = aRect[0]+ .4*inch;    							// Width
aRect[1] -= 6.75*inch;										// Y coordinate
aRect[3] = aRect[1] - 12;       							// and 12 points high

var f = this.addField("EquipmentNumber3a", "combobox", 0, aRect )
f.setItems( equip1 );
    f.borderStyle = border.s;
    f.strokeColor = color.black;
    f.lineWidth = 1;
	

// EquipmentNumber3b 
var aRect = this.getPageBox();
aRect[0] += 3.4*inch;            							// X coordinate
aRect[2] = aRect[0]+ .4*inch;    							// Width
aRect[1] -= 6.75*inch;										// Y coordinate
aRect[3] = aRect[1] - 12;       							// and 12 points high

var f = this.addField("EquipmentNumber3b", "combobox", 0, aRect )
f.setItems( equip2 )
    f.borderStyle = border.s;
    f.strokeColor = color.black;
    f.lineWidth = 1;
	
// EquipmentHours3
var aRect = this.getPageBox();
aRect[0] += 3.9*inch;             							// X coordinate
aRect[2] = aRect[0]+ .5*inch;    							// Width
aRect[1] -= 6.75*inch;										// Y coordinate
aRect[3] = aRect[1] - 12;       							// and 12 points high

var f = this.addField("EquipmentHours3", "text", 0, aRect )
    f.borderStyle = border.s;
    f.strokeColor = color.black;
    f.lineWidth = 1;
	
// MaterialItem3
var aRect = this.getPageBox();
aRect[0] += 4.6*inch;             							// X coordinate
aRect[2] = aRect[0]+ 1.9*inch;    							// Width
aRect[1] -= 6.75*inch;										// Y coordinate
aRect[3] = aRect[1] - 12;       							// and 12 points high

var f = this.addField("MaterialItem3", "text", 0, aRect )
    f.borderStyle = border.s;
    f.strokeColor = color.black;
    f.lineWidth = 1;
	
// MaterialQty3
var aRect = this.getPageBox();
aRect[0] += 6.6*inch;             							// X coordinate
aRect[2] = aRect[0]+ .4*inch;    							// Width
aRect[1] -= 6.75*inch;										// Y coordinate
aRect[3] = aRect[1] - 12;       							// and 12 points high

var f = this.addField("MaterialQty3", "combobox", 0, aRect )
f.setItems( [" ",1,2,3,4,5,6,7,8,9,10] );
    f.borderStyle = border.s;
    f.strokeColor = color.black;
    f.lineWidth = 1;
	
// MaterialCost3
var aRect = this.getPageBox();
aRect[0] += 7.1*inch;             							// X coordinate
aRect[2] = aRect[0]+ 1*inch;    							// Width
aRect[1] -= 6.75*inch;										// Y coordinate
aRect[3] = aRect[1] - 12;       							// and 12 points high

var f = this.addField("MaterialCost3", "text", 0, aRect )
    f.borderStyle = border.s;
    f.strokeColor = color.black;
    f.lineWidth = 1;
	
// Date4
var aRect = this.getPageBox();
aRect[0] += .1*inch;            							// X coordinate
aRect[2] = aRect[0]+ .5*inch;    							// Width
aRect[1] -= 7*inch;											// Y coordinate
aRect[3] = aRect[1] - 12;       							// and 12 points high
var f = this.addField("Date4", "combobox", 0, aRect )
	f.setItems( date_list )
    f.borderStyle = border.s;
    f.strokeColor = color.black;
    f.lineWidth = 1;
	
//Employee4 Drop down
var aRect = this.getPageBox();
aRect[0] += .7*inch;            							// X coordinate
aRect[2] = aRect[0]+ 1.1*inch;    							// Width
aRect[1] -= 7*inch;											// Y coordinate
aRect[3] = aRect[1] - 12;       							// and 12 points high

var f = this.addField("Employee4", "combobox", 0, aRect )
f.setItems( employee );   
    f.borderStyle = border.s;
    f.strokeColor = color.black;
    f.lineWidth = 1;
	
// LaborHours4
var aRect = this.getPageBox();
aRect[0] += 1.9*inch;            							// X coordinate
aRect[2] = aRect[0]+ .4*inch;    							// Width
aRect[1] -= 7*inch;											// Y coordinate
aRect[3] = aRect[1] - 12;       							// and 12 points high

var f = this.addField("LaborHours4", "text", 0, aRect )
    f.borderStyle = border.s;
    f.strokeColor = color.black;
    f.lineWidth = 1;
	
// LaborOT4
var aRect = this.getPageBox();
aRect[0] += 2.4*inch;            							// X coordinate
aRect[2] = aRect[0]+ .4*inch;    							// Width
aRect[1] -= 7*inch;											// Y coordinate
aRect[3] = aRect[1] - 12;       							// and 12 points high

var f = this.addField("LaborOT4 ", "text", 0, aRect )
    f.borderStyle = border.s;
    f.strokeColor = color.black;
    f.lineWidth = 1;
	
// EquipmentNumber4a 
var aRect = this.getPageBox();
aRect[0] += 3*inch;            								// X coordinate
aRect[2] = aRect[0]+ .4*inch;    							// Width
aRect[1] -= 7*inch;											// Y coordinate
aRect[3] = aRect[1] - 12;       							// and 12 points high

var f = this.addField("EquipmentNumber4a", "combobox", 0, aRect )
f.setItems( equip1 );
    f.borderStyle = border.s;
    f.strokeColor = color.black;
    f.lineWidth = 1;
	
// EquipmentNumber4b 
var aRect = this.getPageBox();
aRect[0] += 3.4*inch;            							// X coordinate
aRect[2] = aRect[0]+ .4*inch;    							// Width
aRect[1] -= 7*inch;											// Y coordinate
aRect[3] = aRect[1] - 12;       							// and 12 points high

var f = this.addField("EquipmentNumber4b", "combobox", 0, aRect )
f.setItems( equip2 )
    f.borderStyle = border.s;
    f.strokeColor = color.black;
    f.lineWidth = 1;
	
// EquipmentHours4
var aRect = this.getPageBox();
aRect[0] += 3.9*inch;             							// X coordinate
aRect[2] = aRect[0]+ .5*inch;    							// Width
aRect[1] -= 7*inch;											// Y coordinate
aRect[3] = aRect[1] - 12;       							// and 12 points high

var f = this.addField("EquipmentHours4", "text", 0, aRect )
    f.borderStyle = border.s;
    f.strokeColor = color.black;
    f.lineWidth = 1;
	
// MaterialItem4
var aRect = this.getPageBox();
aRect[0] += 4.6*inch;             							// X coordinate
aRect[2] = aRect[0]+ 1.9*inch;    							// Width
aRect[1] -= 7*inch;											// Y coordinate
aRect[3] = aRect[1] - 12;       							// and 12 points high

var f = this.addField("MaterialItem4", "text", 0, aRect )
    f.borderStyle = border.s;
    f.strokeColor = color.black;
    f.lineWidth = 1;
	
// MaterialQty4
var aRect = this.getPageBox();
aRect[0] += 6.6*inch;             							// X coordinate
aRect[2] = aRect[0]+ .4*inch;    							// Width
aRect[1] -= 7*inch;											// Y coordinate
aRect[3] = aRect[1] - 12;       							// and 12 points high

var f = this.addField("MaterialQty4", "combobox", 0, aRect )
f.setItems( [" ",1,2,3,4,5,6,7,8,9,10] );
    f.borderStyle = border.s;
    f.strokeColor = color.black;
    f.lineWidth = 1;
	
// MaterialCost4
var aRect = this.getPageBox();
aRect[0] += 7.1*inch;             							// X coordinate
aRect[2] = aRect[0]+ 1*inch;    							// Width
aRect[1] -= 7*inch;											// Y coordinate
aRect[3] = aRect[1] - 12;       							// and 12 points high

var f = this.addField("MaterialCost4", "text", 0, aRect )
    f.borderStyle = border.s;
    f.strokeColor = color.black;
    f.lineWidth = 1;
	
// Date5
var aRect = this.getPageBox();
aRect[0] += .1*inch;            							// X coordinate
aRect[2] = aRect[0]+ .5*inch;    							// Width
aRect[1] -= 7.25*inch;										// Y coordinate
aRect[3] = aRect[1] - 12;       							// and 12 points high
var f = this.addField("Date5", "combobox", 0, aRect )
	f.setItems( date_list )
    f.borderStyle = border.s;
    f.strokeColor = color.black;
    f.lineWidth = 1;
	
//Employee5 Drop down
var aRect = this.getPageBox();
aRect[0] += .7*inch;            							// X coordinate
aRect[2] = aRect[0]+ 1.1*inch;    							// Width
aRect[1] -= 7.25*inch;										// Y coordinate
aRect[3] = aRect[1] - 12;       							// and 12 points high

var f = this.addField("Employee5", "combobox", 0, aRect )
f.setItems( employee );   
    f.borderStyle = border.s;
    f.strokeColor = color.black;
    f.lineWidth = 1;
	
// LaborHours5
var aRect = this.getPageBox();
aRect[0] += 1.9*inch;            							// X coordinate
aRect[2] = aRect[0]+ .4*inch;    							// Width
aRect[1] -= 7.25*inch;										// Y coordinate
aRect[3] = aRect[1] - 12;       							// and 12 points high

var f = this.addField("LaborHours5", "text", 0, aRect )
    f.borderStyle = border.s;
    f.strokeColor = color.black;
    f.lineWidth = 1;
	
// LaborOT5
var aRect = this.getPageBox();
aRect[0] += 2.4*inch;            							// X coordinate
aRect[2] = aRect[0]+ .4*inch;    							// Width
aRect[1] -= 7.25*inch;										// Y coordinate
aRect[3] = aRect[1] - 12;       							// and 12 points high

var f = this.addField("LaborOT5 ", "text", 0, aRect )
    f.borderStyle = border.s;
    f.strokeColor = color.black;
    f.lineWidth = 1;
	
// EquipmentNumber5a 
var aRect = this.getPageBox();
aRect[0] += 3*inch;            								// X coordinate
aRect[2] = aRect[0]+ .4*inch;    							// Width
aRect[1] -= 7.25*inch;										// Y coordinate
aRect[3] = aRect[1] - 12;       							// and 12 points high

var f = this.addField("EquipmentNumber5a", "combobox", 0, aRect )
f.setItems( equip1 );
    f.borderStyle = border.s;
    f.strokeColor = color.black;
    f.lineWidth = 1;
	
// EquipmentNumber5b 
var aRect = this.getPageBox();
aRect[0] += 3.4*inch;            							// X coordinate
aRect[2] = aRect[0]+ .4*inch;    							// Width
aRect[1] -= 7.25*inch;										// Y coordinate
aRect[3] = aRect[1] - 12;       							// and 12 points high

var f = this.addField("EquipmentNumber5b", "combobox", 0, aRect )
f.setItems( equip2 )
    f.borderStyle = border.s;
    f.strokeColor = color.black;
    f.lineWidth = 1;
	
// EquipmentHours5
var aRect = this.getPageBox();
aRect[0] += 3.9*inch;             							// X coordinate
aRect[2] = aRect[0]+ .5*inch;    							// Width
aRect[1] -= 7.25*inch;										// Y coordinate
aRect[3] = aRect[1] - 12;       							// and 12 points high

var f = this.addField("EquipmentHours5", "text", 0, aRect )
    f.borderStyle = border.s;
    f.strokeColor = color.black;
    f.lineWidth = 1;
	
// MaterialItem5
var aRect = this.getPageBox();
aRect[0] += 4.6*inch;             							// X coordinate
aRect[2] = aRect[0]+ 1.9*inch;    							// Width
aRect[1] -= 7.25*inch;										// Y coordinate
aRect[3] = aRect[1] - 12;       							// and 12 points high

var f = this.addField("MaterialItem5", "text", 0, aRect )
    f.borderStyle = border.s;
    f.strokeColor = color.black;
    f.lineWidth = 1;
	
// MaterialQty5
var aRect = this.getPageBox();
aRect[0] += 6.6*inch;             							// X coordinate
aRect[2] = aRect[0]+ .4*inch;    							// Width
aRect[1] -= 7.25*inch;										// Y coordinate
aRect[3] = aRect[1] - 12;       							// and 12 points high

var f = this.addField("MaterialQty5", "combobox", 0, aRect )
f.setItems( [" ",1,2,3,4,5,6,7,8,9,10] );
    f.borderStyle = border.s;
    f.strokeColor = color.black;
    f.lineWidth = 1;
	
// MaterialCost5
var aRect = this.getPageBox();
aRect[0] += 7.1*inch;             							// X coordinate
aRect[2] = aRect[0]+ 1*inch;    							// Width
aRect[1] -= 7.25*inch;										// Y coordinate
aRect[3] = aRect[1] - 12;       							// and 12 points high

var f = this.addField("MaterialCost5", "text", 0, aRect )
    f.borderStyle = border.s;
    f.strokeColor = color.black;
    f.lineWidth = 1;
	
// Date6
var aRect = this.getPageBox();
aRect[0] += .1*inch;            							// X coordinate
aRect[2] = aRect[0]+ .5*inch;    							// Width
aRect[1] -= 7.5*inch;										// Y coordinate
aRect[3] = aRect[1] - 12;       							// and 12 points high
var f = this.addField("Date6", "combobox", 0, aRect )
	f.setItems( date_list )
    f.borderStyle = border.s;
    f.strokeColor = color.black;
    f.lineWidth = 1;
	
//Employee6 Drop down
var aRect = this.getPageBox();
aRect[0] += .7*inch;            							// X coordinate
aRect[2] = aRect[0]+ 1.1*inch;    							// Width
aRect[1] -= 7.5*inch;										// Y coordinate
aRect[3] = aRect[1] - 12;       							// and 12 points high

var f = this.addField("Employee6", "combobox", 0, aRect )
f.setItems( employee );   
    f.borderStyle = border.s;
    f.strokeColor = color.black;
    f.lineWidth = 1;
	
// LaborHours6 
var aRect = this.getPageBox();
aRect[0] += 1.9*inch;            							// X coordinate
aRect[2] = aRect[0]+ .4*inch;    							// Width
aRect[1] -= 7.5*inch;										// Y coordinate
aRect[3] = aRect[1] - 12;       							// and 12 points high

var f = this.addField("LaborHours6", "text", 0, aRect )
    f.borderStyle = border.s;
    f.strokeColor = color.black;
    f.lineWidth = 1;
	
// LaborOT6 
var aRect = this.getPageBox();
aRect[0] += 2.4*inch;            							// X coordinate
aRect[2] = aRect[0]+ .4*inch;    							// Width
aRect[1] -= 7.5*inch;										// Y coordinate	
aRect[3] = aRect[1] - 12;       							// and 12 points high

var f = this.addField("LaborOT6 ", "text", 0, aRect )
    f.borderStyle = border.s;
    f.strokeColor = color.black;
    f.lineWidth = 1;
	
// EquipmentNumber6a 
var aRect = this.getPageBox();
aRect[0] += 3*inch;            								// X coordinate
aRect[2] = aRect[0]+ .4*inch;    							// Width
aRect[1] -= 7.5*inch;										// Y coordinate
aRect[3] = aRect[1] - 12;       							// and 12 points high

var f = this.addField("EquipmentNumber6a", "combobox", 0, aRect )
f.setItems( equip1 );
    f.borderStyle = border.s;
    f.strokeColor = color.black;
    f.lineWidth = 1;
	
// EquipmentNumber6b 
var aRect = this.getPageBox();
aRect[0] += 3.4*inch;            							// X coordinate
aRect[2] = aRect[0]+ .4*inch;    							// Width
aRect[1] -= 7.5*inch;										// Y coordinate
aRect[3] = aRect[1] - 12;       							// and 12 points high

var f = this.addField("EquipmentNumber6b", "combobox", 0, aRect )
f.setItems( equip2 )
    f.borderStyle = border.s;
    f.strokeColor = color.black;
    f.lineWidth = 1;
	
// EquipmentHours6
var aRect = this.getPageBox();
aRect[0] += 3.9*inch;             							// X coordinate
aRect[2] = aRect[0]+ .5*inch;    							// Width
aRect[1] -= 7.5*inch;										// Y coordinate
aRect[3] = aRect[1] - 12;       							// and 12 points high

var f = this.addField("EquipmentHours6", "text", 0, aRect )
    f.borderStyle = border.s;
    f.strokeColor = color.black;
    f.lineWidth = 1;
	
// MaterialItem6
var aRect = this.getPageBox();
aRect[0] += 4.6*inch;             							// X coordinate
aRect[2] = aRect[0]+ 1.9*inch;    							// Width
aRect[1] -= 7.5*inch;										// Y coordinate
aRect[3] = aRect[1] - 12;       							// and 12 points high

var f = this.addField("MaterialItem6", "text", 0, aRect )
    f.borderStyle = border.s;
    f.strokeColor = color.black;
    f.lineWidth = 1;
	
// MaterialQty6
var aRect = this.getPageBox();
aRect[0] += 6.6*inch;             							// X coordinate
aRect[2] = aRect[0]+ .4*inch;    							// Width
aRect[1] -= 7.5*inch;										// Y coordinate
aRect[3] = aRect[1] - 12;       							// and 12 points high

var f = this.addField("MaterialQty6", "combobox", 0, aRect )
f.setItems( [" ",1,2,3,4,5,6,7,8,9,10] );
    f.borderStyle = border.s;
    f.strokeColor = color.black;
    f.lineWidth = 1;
	
// MaterialCost6
var aRect = this.getPageBox();
aRect[0] += 7.1*inch;             							// X coordinate
aRect[2] = aRect[0]+ 1*inch;    							// Width
aRect[1] -= 7.5*inch;										// Y coordinate
aRect[3] = aRect[1] - 12;       							// and 12 points high

var f = this.addField("MaterialCost6", "text", 0, aRect )
    f.borderStyle = border.s;
    f.strokeColor = color.black;
    f.lineWidth = 1;
	

//4. Add Stamp
// Adds the Text for Water Services Stamp
this.addWatermarkFromText({ 
	cText: "WATER SERVICES\r   Grass\r   Irrigation\r   Concrete\r   Asphalt\r   Fence", 
	nTextAlign: app.constants.align.left,
	nHorizAlign: app.constants.align.right, 
	nVertAlign: app.constants.align.top, 
	nHorizValue: -5*inch, 
	nVertValue: -8*inch
});

// Grass
var aRect = this.getPageBox();
aRect[0] += .5*inch;             							// X coordinate
aRect[2] = aRect[0]+ 12;    								// Width
aRect[1] -= 8.45*inch;										// Y coordinate
aRect[3] = aRect[1] - 12;       							// and 12 points high

var f = this.addField("Grass", "checkbox", 0, aRect )
f.borderStyle = border.s;
f.strokeColor = color.black;
f.lineWidth = 3;

// GrassOther
var aRect = this.getPageBox();
aRect[0] += 1.75*inch;             							// X coordinate
aRect[2] = aRect[0]+ 1.75*inch;    							// Width
aRect[1] -= 8.45*inch;										// Y coordinate
aRect[3] = aRect[1] - 20;       							// and 12 points high

var f = this.addField("GrassOther", "text", 0, aRect )
    f.borderStyle = border.s;
    f.strokeColor = color.black;
    f.lineWidth = 1;
	
// Irrigation
var aRect = this.getPageBox();
aRect[0] += .5*inch;             							// X coordinate
aRect[2] = aRect[0]+ 12;    								// Width
aRect[1] -= 8.8*inch;										// Y coordinate
aRect[3] = aRect[1] - 12;       							// and 12 points high

var f = this.addField("Irrigation", "checkbox", 0, aRect )
f.borderStyle = border.s;
f.strokeColor = color.black;
f.lineWidth = 3;

	
// IrrigationOther
var aRect = this.getPageBox();
aRect[0] += 2.25*inch;             							// X coordinate
aRect[2] = aRect[0]+ 1.25*inch;    							// width
aRect[1] -= 8.8*inch;										// Y coordinate
aRect[3] = aRect[1] - 20;       							// and 12 points high

var f = this.addField("IrrigationOther", "text", 0, aRect )
    f.borderStyle = border.s;
    f.strokeColor = color.black;
    f.lineWidth = 1;
	
// Concrete
var aRect = this.getPageBox();
aRect[0] += .5*inch;             							// X coordinate
aRect[2] = aRect[0]+ 12;    								// Width
aRect[1] -= 9.15*inch;										// Y coordinate
aRect[3] = aRect[1] - 12;       							// and 12 points high

var f = this.addField("Concrete", "checkbox", 0, aRect )
f.borderStyle = border.s;
f.strokeColor = color.black;
f.lineWidth = 3;

	
// ConcreteOther
var aRect = this.getPageBox();
aRect[0] += 2.25*inch;             							// X coordinate
aRect[2] = aRect[0]+ 1.25*inch;    							// Width
aRect[1] -= 9.15*inch;										// Y coordinate
aRect[3] = aRect[1] - 20;       							// and 12 points high

var f = this.addField("ConcreteOther", "text", 0, aRect )
    f.borderStyle = border.s;
    f.strokeColor = color.black;
    f.lineWidth = 1;
	
// Asphalt
var aRect = this.getPageBox();
aRect[0] += .5*inch;             							// X coordinate
aRect[2] = aRect[0]+ 12;    								// Width
aRect[1] -= 9.5*inch;										// Y coordinate
aRect[3] = aRect[1] - 12;       							// and 12 points high

var f = this.addField("Asphalt", "checkbox", 0, aRect )
f.borderStyle = border.s;
f.strokeColor = color.black;
f.lineWidth = 3;

// AsphaltOther
var aRect = this.getPageBox();
aRect[0] += 2*inch;             							// X coordinate
aRect[2] = aRect[0]+ 1.5*inch;    							// width
aRect[1] -= 9.5*inch;										// Y coordinate
aRect[3] = aRect[1] - 20;       							// and 12 points high

var f = this.addField("AsphaltOther", "text", 0, aRect )
    f.borderStyle = border.s;
    f.strokeColor = color.black;
    f.lineWidth = 1;
	
// Fence
var aRect = this.getPageBox();
aRect[0] += .5*inch;             							// X coordinate
aRect[2] = aRect[0]+ 12;    								// Width
aRect[1] -= 9.85*inch;										// Y coordinate
aRect[3] = aRect[1] - 12;       							// and 12 points high

var f = this.addField("Fence", "checkbox", 0, aRect )
f.borderStyle = border.s;
f.strokeColor = color.black;
f.lineWidth = 3;

// FenceOther
var aRect = this.getPageBox();
aRect[0] += 1.75*inch;             							// X coordinate
aRect[2] = aRect[0]+ 1.75*inch;    							// width
aRect[1] -= 9.85*inch;										// Y coordinate
aRect[3] = aRect[1] - 20;       							// and 12 points high

var f = this.addField("FenceOther", "text", 0, aRect );
    f.borderStyle = border.s;
    f.strokeColor = color.black;
    f.lineWidth = 1;
	

//5. Save the File
//This will only work correctly if the document is level (may have problems with scanned documents)
var path = "/c/users/erentschlar/desktop/"
var folder = "ToDistribute/"

var wf = this.getPageNthWord(0,0,true); //first page, first word, only text
var wo = this.getPageNthWord(0,2,true); //first page, third word, only text

var ckWord, numWords;
var	numWords = this.getPageNumWords(0);
var loc = "LOCATION";
var cat = "CATEGORY";

//Loop goes through index of the words on the page to find LOCATION and then defines the following three words to use in the saving name
for (var j = 0; j < numWords; j++) {
	var ckWord = this.getPageNthWord(0, j)
	if( ckWord == loc ){
		j++;
		var a = this.getPageNthWord(0, j++,true); //first word after Location 
		var dd = this.getPageNthWord(0,j++,true); //second word after Location 
		var r = this.getPageNthWord(0, j++,true); //third word after Location 
		break;
	}
}


var name = (wf + '-' + wo + '-' + a + dd + r + + '_' + month + '-' + day + '-' + year + '.pdf');
this.saveAs( path + folder + name);
