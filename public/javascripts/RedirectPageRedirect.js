// Submission Page redirect coutdown JavaScript Document

var count = 6;

function redirect(){
	if (count > 0) {
		count--;	   
		document.getElementById("redirectcountdown").innerHTML = "You will be automatically redirected back in " + count + " seconds......";   
	}else if (count == 0) {  
		document.getElementById("redirectcountdown").innerHTML = "Redirecting......"; 
	}
}