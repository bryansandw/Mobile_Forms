// Variables derived from  fields
var h = this.getField("ArrivalTimeHour").value; //Arrival Time Hour
var m = this.getField("ArrivalTimeMinute").value; //Arrival Time Minute

var hh = this.getField("DepartureTimeHour").value; // Departure Time Hour
var mm = this.getField("DepartureTimeMinute").value; // Departure Time Minute

var g = this.getField("Hours Worked 1"); //Where the time laps will be displayed

//Correct the Arrival time
var h1 = String(h);
if (m == 10){
var m1 = ".1700";
}

else
if (m == 15){
var m1 = ".2500";
}

else
if (m == 20){
var m1 = ".3300";
}

else
if (m == 25){
var m1 = ".4200";
}

else
if (m == 30){
var m1 = ".5000";
}

else
if (m == 35){
var m1 = ".5800";
}

else
if (m == 40){
var m1 = ".6700";
}

else
if (m == 45){
var m1 = ".7500";
}

else
if (m == 50){
var m1 = ".8300";
}

else
if (m == 55){
var m1 = ".9200";
}

else
if (m == 0){
var m1 = ".0000";
}

else
if (m == 5){
var m1 = ".0800";
}

//Correct the Departure time
var hh1 = String(hh);

if (mm == 10){
var mm1 = ".1700";
}

else
if (mm == 15){
var mm1 = ".2500";
}

else
if (mm == 20){
var mm1 = ".3300";
}

else
if (mm == 25){
var mm1 = ".4200";
}

else
if (mm == 30){
var mm1 = ".5000";
}

else
if (mm == 35){
var mm1 = ".5800";
}

else
if (mm == 40){
var mm1 = ".6700";
}

else
if (mm == 45){
var mm1 = ".7500";
}

else
if (mm == 50){
var mm1 = ".8300";
}

else
if (mm == 55){
var mm1 = ".9200";
}

else
if (mm == 0){
var mm1 = ".0000";
}

else
if (mm == 5){
var mm1 = ".0800";
}


var a = h1 + m1 // Arrival Time 
var b = hh1 + mm1 // Departure Time 
var c = b - a // Difference in Time

//Correct for AM to PM changes
if (c<0) {
c = c + 12; 
g.value = (c + " hrs");
}
else{
g.value = (c + " hrs");
}
