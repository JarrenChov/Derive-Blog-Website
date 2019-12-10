// JavaScript Document to change the facebook, twitter, instagram and youtube footer icons from mouseover

function ChangeIcon(image)
{
	if (image.getAttribute('src')=="images/Icons/Facebook_Icon.png") {
		image.src="images/Icons/Facebook_Icon_hover.png";
	} 
	
	if (image.getAttribute('src')=="images/Icons/Twitter_Icon.png") {
		image.src="images/Icons/Twitter_Icon_hover.png";
	} 
	
	if (image.getAttribute('src')=="images/Icons/Instagram_Icon.png") {
		image.src="images/Icons/Instagram_Icon_hover.png";
	} 
	
	if (image.getAttribute('src')=="images/Icons/Youtube_Icon.png") {
		image.src="images/Icons/Youtube_Icon_hover.png";
	} 		
}

function ReturnIcon(image)
{
	if (image.getAttribute('src')=="images/Icons/Facebook_Icon_hover.png") {
		image.src="images/Icons/Facebook_Icon.png";
	}

	if (image.getAttribute('src')=="images/Icons/Twitter_Icon_hover.png") {
		image.src="images/Icons/Twitter_Icon.png";
	} 

	if (image.getAttribute('src')=="images/Icons/Instagram_Icon_hover.png") {
		image.src="images/Icons/Instagram_Icon.png";
	} 

	if (image.getAttribute('src')=="images/Icons/Youtube_Icon_hover.png") {
		image.src="images/Icons/Youtube_Icon.png";
	} 			 
}
