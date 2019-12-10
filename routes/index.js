var fs = require('fs');
var jsonFile = require('jsonfile')
var current_file = "Places_Visited.json";
var express = require('express');
var router = express.Router();

router.get('/redirect', function(req, res, next) {
    res.send(
"<!DOCTYPE html>" +
	"<html>" +
		"<head>" +
			'<meta charset="utf-8">' +
			'<meta http-equiv="refresh" content="7; url=/blog"/>' +
			'<link rel="stylesheet" type="text/css" href="stylesheets/font-stylesheet.css">' +
			'<link rel="stylesheet" type="text/css" href="stylesheets/navigation-stylesheet.css">' +       
			'<link rel="stylesheet" type="text/css" href="stylesheets/main-stylesheet.css">' +
			'<link rel="stylesheet" type="text/css" href="stylesheets/blog-stylesheet.css">' + 						  
			'<script type="text/javascript" src="javascripts/navigationBar.js"></script>' +
			'<script type="text/javascript" src="javascripts/navigationTimeDisplay.js"></script>' +
        	'<script type="text/javascript" src="javascripts/OnLoadFunction.js"></script> ' +			
        	'<script type="text/javascript" src="javascripts/RedirectPageRedirect.js"></script>' +	
			'<script type="text/javascript" src="javascripts/goback.js"></script>' +
			'<script>' + 
			'localStorage.removeItem("userStartPage");' +
			'</script>' +		
			'<link rel="shortcut icon" type="image/x-icon" href="images/Icons/Derive_Icon.ico">' + 		
			'<title>DÉRIVE</title>' +
		"</head>" +
		"<body>" +
			'<div class="navigationHead">' +  
				'<div class="nameNavigation">' +
					'<h1><a id="navigationLogo" href="/home">D<span style="color:#FFFFFF">É</span>RIVE</a></h1>' +
				'</div>' +                     
				'<div class="menuIconNavigation">' +
					'<h1 class="openNavigationBar" style="cursor: pointer" onclick="openNavigationBar()">&#9776;</h1>' +
				'</div>' + 
				'<div id="navigationBar" class="navigation">' +
					'<div class="leftNavigation">' +
						'<div class="leftNavigationText">' +   
							'<p><span id="userDate"></span><sup><span id="ordinalIndicator"></span></sup> <span id="userTimeHours"></span><span id="userTimeBlinker">:</span><span id="userTimeMinutes"></span> <br> <span id="timePeriod"></span>!</p>' +           
						'</div>' +
					'</div>' +
					'<div class="rightNavigation">' +
						'<div class="closeNavigationBar" style="cursor: pointer" href="javascript:void(0)" onclick="closeNavigationBar()">&#10005;</div>' +
						'<ul class="navigationLinks">' +
							'<li class="navigationLink navigationFont"> <a class="navigationLink" href="/home">Home</a></li>' + 
							'<li class="navigationLink navigationFont navSplitter">---</li>' +
							'<li class="navigationLink navigationFont"> <a class="navigationLink" href="/blog">Blog</a></li>' +
							'<li class="navigationLink navigationFont navSplitter">---</li>' +
							'<li class="navigationLink navigationFont"> <a class="navigationLink" href="/places-visited">Places Visited</a></li>' +
						'</ul>' +
					'</div>' +       
				'</div>' + 
			'</div>' + 
			'<div class = "contentContainer ContentText">' +   
				'<div id="content" style="padding-top:120px;padding-bottom:0px">' +
					'<div id="scrollableContent">' +
						'<div id="paddingContent">' +
							'<h3>Your blog submission has been successfully added.</h3>' +
                            '<h5><span id="redirectcountdown"><span></h5>' +	
							'<img class="pusheenCat" src="images/Images/pusheenRedirect.png"/>' +
						'</div>' +
					'</div>' +
				'</div>' +        
			'</div>' +				
		'</body>' +
	'</html>'
    );
});

router.get('/delete', function(req, res, next) {
    res.send(
"<!DOCTYPE html>" +
	"<html>" +
		"<head>" +
			'<meta charset="utf-8">' +
			'<meta http-equiv="refresh" content="7; url=/blog"/>' +
			'<link rel="stylesheet" type="text/css" href="stylesheets/font-stylesheet.css">' +
			'<link rel="stylesheet" type="text/css" href="stylesheets/navigation-stylesheet.css">' +       
			'<link rel="stylesheet" type="text/css" href="stylesheets/main-stylesheet.css">' +
			'<link rel="stylesheet" type="text/css" href="stylesheets/blog-stylesheet.css">' + 						  
			'<script type="text/javascript" src="javascripts/navigationBar.js"></script>' +
			'<script type="text/javascript" src="javascripts/navigationTimeDisplay.js"></script>' +
        	'<script type="text/javascript" src="javascripts/OnLoadFunction.js"></script> ' +			
        	'<script type="text/javascript" src="javascripts/RedirectPageRedirect.js"></script>' +	
			'<script type="text/javascript" src="javascripts/goback.js"></script>' +					
			'<link rel="shortcut icon" type="image/x-icon" href="images/Icons/Derive_Icon.ico">' + 		
			'<title>DÉRIVE</title>' +
		"</head>" +
		"<body>" +
			'<div class="navigationHead">' +  
				'<div class="nameNavigation">' +
					'<h1><a id="navigationLogo" href="/home">D<span style="color:#FFFFFF">É</span>RIVE</a></h1>' +
				'</div>' +                     
				'<div class="menuIconNavigation">' +
					'<h1 class="openNavigationBar" style="cursor: pointer" onclick="openNavigationBar()">&#9776;</h1>' +
				'</div>' + 
				'<div id="navigationBar" class="navigation">' +
					'<div class="leftNavigation">' +
						'<div class="leftNavigationText">' +   
							'<p><span id="userDate"></span><sup><span id="ordinalIndicator"></span></sup> <span id="userTimeHours"></span><span id="userTimeBlinker">:</span><span id="userTimeMinutes"></span> <br> <span id="timePeriod"></span>!</p>' +           
						'</div>' +
					'</div>' +
					'<div class="rightNavigation">' +
						'<div class="closeNavigationBar" style="cursor: pointer" href="javascript:void(0)" onclick="closeNavigationBar()">&#10005;</div>' +
						'<ul class="navigationLinks">' +
							'<li class="navigationLink navigationFont"> <a class="navigationLink" href="/home">Home</a></li>' + 
							'<li class="navigationLink navigationFont navSplitter">---</li>' +
							'<li class="navigationLink navigationFont"> <a class="navigationLink" href="/blog">Blog</a></li>' +
							'<li class="navigationLink navigationFont navSplitter">---</li>' +
							'<li class="navigationLink navigationFont"> <a class="navigationLink" href="/places-visited">Places Visited</a></li>' +
						'</ul>' +
					'</div>' +       
				'</div>' + 
			'</div>' + 
			'<div class = "contentContainer ContentText">' +   
				'<div id="content" style="padding-top:120px;padding-bottom:0px">' +
					'<div id="scrollableContent">' +
						'<div id="paddingContent">' +
							'<h3>Your blog post has been successfully deleted.</h3>' +
                            '<h5><span id="redirectcountdown"><span></h5>' +
							'<img class="pusheenCat" src="images/Images/pusheenDelete.png"/>' +
						'</div>' +
					'</div>' +
				'</div>' +        
			'</div>' +				
		'</body>' +
	'</html>'
    );
});

router.get('/error', function(req, res, next) {
    res.send(
"<!DOCTYPE html>" +
	"<html>" +
		"<head>" +
			'<meta charset="utf-8">' +
			'<link rel="stylesheet" type="text/css" href="stylesheets/font-stylesheet.css">' +
			'<link rel="stylesheet" type="text/css" href="stylesheets/navigation-stylesheet.css">' +       
			'<link rel="stylesheet" type="text/css" href="stylesheets/main-stylesheet.css">' + 
			'<link rel="stylesheet" type="text/css" href="stylesheets/blog-stylesheet.css">' + 			 
			'<script type="text/javascript" src="javascripts/navigationBar.js"></script>' +
			'<script type="text/javascript" src="javascripts/navigationTimeDisplay.js"></script>' +
        	'<script type="text/javascript" src="javascripts/OnLoadFunction.js"></script> ' +			
			'<script type="text/javascript" src="javascripts/goback.js"></script>' +
        	'<script type="text/javascript" src="javascripts/ErrorPageRedirect.js"></script>' +						
			'<link rel="shortcut icon" type="image/x-icon" href="images/Icons/Derive_Icon.ico">' + 		
			'<title>DÉRIVE</title>' +
		"</head>" +
		"<body>" +
			'<div class="navigationHead">' +  
				'<div class="nameNavigation">' +
					'<h1><a id="navigationLogo" href="/home">D<span style="color:#FFFFFF">É</span>RIVE</a></h1>' +
				'</div>' +                     
				'<div class="menuIconNavigation">' +
					'<h1 class="openNavigationBar" style="cursor: pointer" onclick="openNavigationBar()">&#9776;</h1>' +
				'</div>' + 
				'<div id="navigationBar" class="navigation">' +
					'<div class="leftNavigation">' +
						'<div class="leftNavigationText">' +   
							'<p><span id="userDate"></span><sup><span id="ordinalIndicator"></span></sup> <span id="userTimeHours"></span><span id="userTimeBlinker">:</span><span id="userTimeMinutes"></span> <br> <span id="timePeriod"></span>!</p>' +           
						'</div>' +
					'</div>' +
					'<div class="rightNavigation">' +
						'<div class="closeNavigationBar" style="cursor: pointer" href="javascript:void(0)" onclick="closeNavigationBar()">&#10005;</div>' +
						'<ul class="navigationLinks">' +
							'<li class="navigationLink navigationFont"> <a class="navigationLink" href="/home">Home</a></li>' + 
							'<li class="navigationLink navigationFont navSplitter">---</li>' +
							'<li class="navigationLink navigationFont"> <a class="navigationLink" href="/blog">Blog</a></li>' +
							'<li class="navigationLink navigationFont navSplitter">---</li>' +
							'<li class="navigationLink navigationFont"> <a class="navigationLink" href="/places-visited">Places Visited</a></li>' +
						'</ul>' +
					'</div>' +       
				'</div>' + 
			'</div>' + 
			'<div class = "contentContainer ContentText">' +   
				'<div id="content" style="padding-top:120px;padding-bottom:0px">' +
					'<div id="scrollableContent">' +
						'<div id="paddingContent">' +	
         					'<h3>Error!</h3>' +
                           	'<h5>Your blog submission could not be created, <span id="errorcountdown"><span></h5>' +		
        					'<h5>Check you have correctly entered in all details and location is enabled on your device. <br>Click "Return" to return to the previous page.<br>' +			
							'<button class="blog_post" onclick="goBack()">Return</button></h5>' +
							'<br>' +
							'<img class="pusheenCat" src="images/Images/pusheenError.png"/>' +
						'</div>' +
					'</div>' +
				'</div>' +        
			'</div>' +				
		'</body>' +
	'</html>'
    );
});

router.post('/submit', function(req, res){
  var current_n =  req.body.current_name;
  var current_p =  req.body.current_place;
  var lang_n = req.body.longitude_new;
  var long_n = req.body.latitude_new;
  var comment_location =  req.body.comment_now;
  var current_t = req.body.current_time;
  var json_data = {title: current_p, lat :long_n, lng : lang_n, description : comment_location, name : current_n, time : current_t};

  if(req.body.current_place == "" || req.body.longitude_new == "" || req.body.latitude_new == "")
    res.redirect('/error');
  else{
    fs.exists(current_file, function(exists) {
        if (!exists){
            fs.writeFile(current_file, "[]");
        }
        
        jsonFile.readFile(current_file, function(err, jsonData) {
            if (err) throw err;
                            
            jsonData.push(json_data);

            jsonFile.writeFile(current_file, jsonData, 'utf8', function (err) {
                if (err) return console.log(err);
            }); 

            fs.readFile(current_file, 'utf8', function (err,data) {
                if (err) return console.log(err);
                var new_file = "var locations = " + data;
                fs.writeFile('./public/javascripts/Location.js', new_file);
            });
        });
    });

    res.redirect('/redirect');
  }
});

router.post('/delete', function(req, res) {
    
    var counter_post_number =  req.body.post_number;

    jsonFile.readFile(current_file, function(err, jsonData) {
        if (err) throw err;

        var obj = jsonData.splice(counter_post_number,1);

        jsonFile.writeFile(current_file, jsonData, 'utf8', function (err) {
            if (err) return console.log(err);
        }); 

        fs.readFile(current_file, 'utf8', function (err,data) {
            if (err) return console.log(err);
            var new_file = "var locations = " + data;
            fs.writeFile('./public/javascripts/Location.js', new_file);
        });
    });
    
    res.redirect('/delete');

});

module.exports = router;

router.get('/', function(req, res, next) {
    res.sendFile('./index.html', {root: __dirname });
});

router.get('/blog', function(req, res, next) {
    res.sendFile('./blog.html', {root: __dirname });
});

router.get('/home', function(req, res, next) {
    res.sendFile('./home.html', {root: __dirname });
});

router.get('/places-visited', function(req, res, next) {
    res.sendFile('./places-visited.html', {root: __dirname });
});


/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
    
});

