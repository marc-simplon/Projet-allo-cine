function removeEmptyButton() {
    let idDirectorBtn = "directorBtn" + i;
    let directorEl = document.getElementById(idDirectorBtn);
    let idRuntimeBtn = "runtimeBtn" + i;
    let runtimeEl = document.getElementById(idRuntimeBtn);
    if  ( typeof data[i].Director == 'undefined' || data[i].Director == "N/A" ) {
	directorEl.remove();
    }
    if  ( typeof data[i].Runtime == 'undefined' || data[i].Runtime == "N/A" ) {
	runtimeEl.remove();
    }
}

var funcs = [];
function createfunc(i) {
    return function() {
	for ( var e = 1; e < data[i].Images.length - 1; e++) {
	    var id = 'carouselInner' + i;
    	    var elementCarouselInner = document.getElementById(id);
    	    elementCarouselInner.innerHTML +=
    		"<div class=\"carousel-item\">" +
    		"<img class=\"d-block w-100\" src=\"" + data[i].Images[e] + "\" alt=\"" + data[i].Title + "\">" +
    		"</div>";
	}
	removeEmptyButton();
    };
}

for ( let i = 0; i < data.length; i++) {
    var element = document.getElementById("main");


    // TO READ : https://coderwall.com/p/o9ws2g/why-you-should-always-append-dom-elements-using-documentfragments

    element.innerHTML +=
	"<div class=\"container card card-film\">" +
          "<div class=\"row\">" +
            "<div class=\"col-md-3 col-sm-12 cont-poster\">" +
                 "<img alt=\"poster\" src=\"" + data[i].Poster + "\">" +
             "</div>" +
             "<div class=\"col-md-9 col-sm-12 inner-card-right\">" +
                "<div class=\"card-body\">" +
                   "<h3 class=\"card-title\">" + data[i].Title + "</h3>" +
                   "<p class=\"card-text\">"  + data[i].Plot + "</p>" +

                   "<div class=\"row minicard text-center\">" +
                        "<div class=\"card text-white bg-primary text-center\">" +
                             data[i].Year +
                        "</div>" +
                        "<div id=\"directorBtn" + i +  "\" class=\"card text-white bg-primary text-center\">" +
                              data[i].Director +
                         "</div>" +

                    "<div id=\"runtimeBtn" + i + "\" class=\"card text-white bg-primary text-center\">" +
                          data[i].Runtime +
                    "</div>" +
                    "<div class=\"card text-white bg-primary text-center\">" +
                       data[i].imdbRating + "٭" +
                    "</div>" +
              "</div>" +
              "<div id=\"carousel" + i + "\" class=\"carousel slide\" data-ride=\"carousel\">" +
                    "<div id=\"carouselInner" + i + "\" class=\"carousel-inner\"" + ">" +
                        "<div class=\"carousel-item active\">" +
                           "<img class=\"d-block w-100\" src=\"" + data[i].Images[0] + "\" alt=\"Avatar\">" +
                        "</div>" +
                    "</div>" +
               "</div>" +
            "</div>" +
          "</div>" +
	 "</div>" +
	"</div>";

    funcs[i] = createfunc(i);
}

i = 0;
for (var i = 0; i < data.length; i++) {
    funcs[i]();
}


// Première méthode utilisé, le code fonctionne mais la solution est
// pas génial...
////////////////////////////////////////////////////////////////////
// var element = document.getElementById(main);

// var i = 0;
// for ( i = 0; i < data.length; i++) {
//     document.writeln("<div class=\"container card card-film\">");
//     document.writeln("<div class=\"row\">");

//     document.writeln("<div class=\"col-md-3 col-sm-12 cont-poster\">");
//     document.writeln("<img alt=\"poster\" src=\"" + data[i].Poster + "\"/>");
//     document.writeln("</div>");

//     document.writeln("<div class=\"col-md-9 col-sm-12 inner-card-right\">");
//     document.writeln("<div class=\"card-body\">");

//     document.writeln("<h3 class=\"card-title\">" + data[i].Title + "</h3>");
//     document.writeln("<p class=\"card-text\">" + data[i].Plot + "</p>");

//     document.writeln("<div class=\"row minicard text-center\">");

//     document.writeln("<div class=\"card text-white bg-primary text-center\">");
//     document.writeln(data[i].Year);
//     document.writeln("</div>");
    
//     if  ( data[i].Director !=  undefined && data[i].Director != "N/A" ) {
// 	document.writeln("<div class=\"card text-white bg-primary text-center\">");
// 	console.log("hello");
// 	document.writeln(data[i].Director);
// 	document.writeln("</div>");
//     }


//     if  ( data[i].Runtime !=  undefined ) {
// 	document.writeln("<div class=\"card text-white bg-primary text-center\">");
// 	document.writeln(data[i].Runtime);
// 	document.writeln("</div>");

//     }

//     if  ( data[i].imdbRating !=  undefined ) {
// 	document.writeln("<div class=\"card text-white bg-primary text-center\">");
// 	document.writeln(data[i].imdbRating + " ٭");
// 	document.writeln("</div>");

//     }
//     document.writeln("</div>");

//     /* document.writeln("<div id=\"carousel" + i + "\" class=\"carousel slide\" data-ride=\"carousel\">"); */
//     document.writeln("<div id=\"carousel\" class=\"carousel slide\" data-ride=\"carousel\">");
//     document.writeln("<div class=\"carousel-inner\">");
//     document.writeln("<div class=\"carousel-item active\">");
//     document.writeln("<img class=\"d-block\" src=\"" + data[i].Images[0] + "\" alt=\"" + data[i].Title + "\">");
//     document.writeln("</div>");
//     data[i].Images.forEach(function(e) {
// 	document.writeln("<div class=\"carousel-item\">");
// 	document.writeln("<img class=\"d-block\" src=\"" + e + "\" alt=\"" + data[i].Title + "\">");
// 	document.writeln("</div>");
//     });

//     document.writeln("</div>");

    
//     document.writeln("</div>");
    
//     document.writeln("</div>");
//     document.writeln("</div>");
    
//     document.writeln("</div>");
//     document.writeln("</div>");


// }
