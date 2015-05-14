# Mobile_Forms
The JavaScripts that were used in Adobe Acrobat to create the work forms

Notes on Maintaining JavaScript for Action Wizard
Edit JavaScript in Action Wizard by clicking on tools then Action Wizard.  Select manage actions, which will open a dialogue box, click on the Action you wish to edit and then hit the edit button.  In this box you may change the files and folders to be processed.  To change the JavaScript click on Execute JavaScript this will revile the Specify Settings option, clicking this opens the JavaScript Editor.  Please make changes to the script in the .js that is saved in the Mobile forms folder and copy and paste the new form into the edit dialoged box (be sure you delete the old script).  The .js can be opened and edited in notepad, do NOT use word.
JavaScript

1.	Variables 
inch – Should not need to change, converts points to inches.
employee – This will need to be updated, this is an array (a fancy word for list) of the employees that will be used in all of the employee dropdown menus in the document.  When adding or removing names be sure to put the name in “parenthesis” and separate the names with a comma.
equip2 – This will need to be updated, list of the second half of the equipment numbers.
date_list – This should not need to be edited, the code block finds todays date and the next 10 days. 

2.	Add Text  
this.addWatermarkFromText({
cText: is where the text that will be displayed is kept.  \r is the register return, aka new line.  
nFontSize: sets the font size
nHorizAlign: the default horizontal location is the center of the page, positive numbers adjust it right and negative numbers adjust it left
nTextAlign: This sets the text alignment
nVertValue: the default vertical location is the center of the page, positive numbers adjust it up and negative numbers adjust it down

3.	Add Fields	
Each field added shares several components, for brevity each field will not be listed
var aRect is the location and size of the field, there is an X coordinate, a Y coordinate, a width and a height. 
var f = this.addField("Field Name", "Field Type", Page numbe (index base 0), aRect is the location )
Field Type:
text - filled in by the end user, if the 
button – buttons call an action, it can be a javascript or a menu item, unfortunately the javascripts in buttons (which are the only thing that can be called when creating a button with javascript) do not work in the mobile App (written 2/26/2015).
combobox- another name for dropdown box, the dropdown options are set by the line f.setItems( array/list ); if the array is defined elsewhere just put the name of the list, if it is a new list be sure to use [“item1”, “item2”]
listbox – 
checkbox-
radiobutton-
signature – 
f.setAction( “Calculate”, cScript);
cScript – The code that you want in the field calculate option is feed to the JavaScript as a string.  JavaScript mostly views new lines and semicolons the same way, so a multi-line code can be turned into a single line.  This is necessary to create the JavaScript that run in the form after the forms creation. 
Other Commands that are used:
f.textColor = color.white;	
f.fillColor = color.white;
f.borderStyle = border.s;
f.strokeColor = color.black;
f.lineWidth = 3;
4.	Add Stamp
The stamp is a combination text and fields, this is where the JavaScript differ for the different action choices. 
5.	Save the File
This uses the index of the words in the form.  Why we need adobe to OCR the form. 
Pulls the first two worlds to use for save. 
Loops through all of the words on the page looking for “Location” then pulls the three words following the word Location to use in the save. 
Strings the first two words together, the three words following Location, and the date to save the file in a folder that is defined in the code.

Dig-Tess Stamp (should also have Water Services) 
this.addWatermarkFromText({ 
	cText: "          Dig-Tess\rID #:\rDate:\rTime:", 
	nTextAlign: app.constants.align.left,
	nHorizAlign: app.constants.align.right, 
	nVertAlign: app.constants.align.top, 
	nHorizValue: -.8*inch, nVertValue: -8.3*inch
});

// DigTessNumber
// DigTessDate
//DigTessTimeHour Drop down
//DigTessTimeMinute Drop down
//DigTessTimeAMorPM Drop down

Water Services Stamp 
this.addWatermarkFromText({ 
	cText: "WATER SERVICES\r   Grass\r   Irrigation\r   Concrete\r   Asphalt\r   Fence", 
	nTextAlign: app.constants.align.left,
	nHorizAlign: app.constants.align.right, 
	nVertAlign: app.constants.align.top, 
	nHorizValue: -5*inch, 
	nVertValue: -8*inch
});

// Grass
// GrassOther
// Irrigation
// IrrigationOther
// Concrete
// ConcreteOther
// Asphalt
// AsphaltOther
// Fence
// FenceOther
