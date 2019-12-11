const fs = require('fs');
var jsonFile = require('jsonfile')
var current_file = 'Places_Visited.json'
var current_file_1 = './public/javascripts/Locations.js'

jsonFile.readFile(current_file, function(err, jsonData) {
  if (err) throw err;
//   for (var i = 0; i < jsonData.length; ++i) {
//
//     console.log("title: "+jsonData[i].title);
//     console.log("lat: "+jsonData[i].lat);
//     console.log("lng: "+jsonData[i].lng);
//     console.log("description: "+jsonData[i].description);
//     console.log("title: "+jsonData[i].title);
//     console.log("----------------------------------");
//   }

//     var obj = jsonData.splice(0,1);

    jsonData.push({"title":"33","lat":"-34.9228964","lng":"138.5966951","description":"11"});

    jsonFile.writeFile(current_file, jsonData, 'utf8', function (err) {
        if (err) {
            return console.log(err);
        }

        console.log("The file was saved!");
    });

    fs.readFile(current_file, 'utf8', function (err,data) {
        if (err) {
        return console.log(err);
        }
        var new_file = "var locations = " + data;
        fs.writeFile('./public/javascripts/Location.js', new_file);
    });

});
