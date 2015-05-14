//This was intended for saving the Adobe Form with a name based on the Address and the WO# that are produced by HTE and then brought into Adobe to be OCRed 
//Save to new folder
//This will only work correctly if the document is level (may have problems with scanned documents)
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


//Loop goes through index of the words on the page to find CATEGORY and then defines the following three words to use in the saving name
for (var j = 0; j < numWords; j++) 
{
	var ckWord = this.getPageNthWord(0, j)
	if( ckWord == cat )
	{
		j++;
		var c = this.getPageNthWord(0, j++,true); //category type
		if ( c == "PWWD" )
		{
			var folder = "AAAAA"
			app.alert( folder );
		}
		else if ( c == "something")
		{
			var folder = "BBBBB"		
		}
		else 
		{
		var folder = "ManualAssignment" 
		}
		break;
	}
}

var name = (wf + '-' + wo + '-' + a + dd + r + '.pdf')
this.saveAs("/c/users/erentschlar/desktop/" + folder + "/" + name);
