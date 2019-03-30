var element = document.getElementById(main);

var i = 0;
for ( i = 0; i < data.length; i++) {
    console.log(data[i].Images[1] + "hello");
    document.writeln("<div class=\"container card card-film\">");
    // element.innerHTML("<div class=\"container card card-film\">");
    document.writeln("<div class=\"row\">");

    document.writeln("<div class=\"col-md-3 col-sm-12 cont-poster\">");
    document.writeln("<img alt=\"poster\" src=\"" + data[i].Poster + "\"/>");
    document.writeln("</div>");

    document.writeln("<div class=\"col-md-9 col-sm-12 inner-card-right\">");
    document.writeln("<div class=\"card-body\">");

    document.writeln("<h3 class=\"card-title\">" + data[i].Title + "</h3>");
    document.writeln("<p class=\"card-text\">" + data[i].Plot + "</p>");

    document.writeln("<div class=\"row minicard text-center\">");

    document.writeln("<div class=\"card text-white bg-primary text-center\">");
    document.writeln(data[i].Year);
    document.writeln("</div>");
    
    if  ( data[i].Director !=  undefined && data[i].Director != "N/A" ) {
	document.writeln("<div class=\"card text-white bg-primary text-center\">");
	console.log("hello");
	document.writeln(data[i].Director);
	document.writeln("</div>");
    }


    if  ( data[i].Runtime !=  undefined ) {
	document.writeln("<div class=\"card text-white bg-primary text-center\">");
	document.writeln(data[i].Runtime);
	document.writeln("</div>");

    }

    if  ( data[i].imdbRating !=  undefined ) {
	document.writeln("<div class=\"card text-white bg-primary text-center\">");
	document.writeln(data[i].imdbRating + " ٭");
	document.writeln("</div>");

    }
    document.writeln("</div>");

    /* document.writeln("<div id=\"carousel" + i + "\" class=\"carousel slide\" data-ride=\"carousel\">"); */
    document.writeln("<div id=\"carousel\" class=\"carousel slide\" data-ride=\"carousel\">");
    document.writeln("<div class=\"carousel-inner\">");
    document.writeln("<div class=\"carousel-item active\">");
    document.writeln("<img class=\"d-block\" src=\"" + data[i].Images[0] + "\" alt=\"" + data[i].Title + "\">");
    document.writeln("</div>");
    data[i].Images.forEach(function(e) {
	console.log(e + "BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBXS");
	document.writeln("<div class=\"carousel-item\">");
	document.writeln("<img class=\"d-block\" src=\"" + e + "\" alt=\"" + data[i].Title + "\">");
	document.writeln("</div>");
    });

    document.writeln("</div>");

    
    document.writeln("</div>");
    
    document.writeln("</div>");
    document.writeln("</div>");
    
    document.writeln("</div>");
    document.writeln("</div>");


}
