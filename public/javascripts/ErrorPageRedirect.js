// Error Page redirect coutdown JavaScript Document

var count = 16;

function redirect(){
	if (count > 0) {
		count--;	   
		document.getElementById("errorcountdown").innerHTML = "You will be automatically redirected back in " + count + " seconds......";   
	}else if (count == 0) {  
		document.getElementById("errorcountdown").innerHTML = "Redirecting......"; 
		goBack(); 
	}
}