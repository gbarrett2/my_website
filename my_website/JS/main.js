//initialize function called when the script loads
function initialize(){
    cities();
};

//function to create a table with cities and their populations
function cities(){
    //define two arrays for cities and population
    var cityPop = [
        { 
            city: 'Tokyo',
            population:  8949447
        },
        {
            city: 'Yokohama',
            population: 3689603
        },
        {
            city: 'Osaka',
            population: 2666371
        },
        {
            city: 'Nagoya',
            population: 2263907
        }
    ];

        //append the table element to the div
    $("#mydiv").append("<table>");

    //append a header row to the table
    $("table").append("<tr>");

    //add the "City" and "Population" columns to the header row
    $("tr").append("<th>City</th><th>Population</th>");


    //loop to add a new row for each city
    for (var i = 0; i < cityPop.length; i++){
        //assign longer html strings to a variable
        var rowHtml = "<tr><td>" + cityPop[i].city + "</td><td>" + cityPop[i].population + "</td></tr>";
        //add the row's html string to the table
        $("table").append(rowHtml);
    };

$.getScript("debug.js", function(){

   alert("Script loaded but not necessarily executed.");

});


};

//call the initialize function when the window has loaded
$(document).ready(initialize);
function addColumns(cityPop){
    
    $('tr').each(function(i){

        if (i == 0){

            $(this).append('<th>City Size</th>');
        } else {

            var citySize;

            if (cityPop[i-1].population < 2400000){
                citySize = 'Small';

            } else if (cityPop[i-1].population < 370000){
                citysize = 'Medium';

            } else {
                citySize = 'Large';
            };

            $(this).append('<td' + citySize + '</td>');
        };
    });
};

function addEvents(){

    $('#table').mouseover(function(){
        
        var color = "rgb(";

        for (var i=0; i<3; i++){

            var random = Math.round(Math.random() * 255);

            color += "random";

            if (i<2){
                color += ",";
            
            } else {
                color += ")";
        };

        $(this).css('color', color);
    };

    function clickme(){

        alert('Hey, you clicked me!');
    };

    $('table').on('click', clickme);
});









