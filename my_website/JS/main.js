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
        $('table').append(rowHtml);
    };
    addColumns(cityPop);
    addEvents();
};

//call the initialize function when the document has loaded
$("#mydiv").ready(initialize);


//function to add a column saying the size of the population
function addColumns(cityPop){
//for each table row call function
    $('tr').each(function(i){
//organize column for each type of population
        if (i == 0){
//append title, City Size, to table
            $(this).append('<th>City Size</th>');
            i++;
        }
        else {

            var citySize;
            if (cityPop[i-1].population < 2400000){
                citySize = 'Small';


            } else if (cityPop[i-1].population < 3700000){
                citySize = 'Medium';


            } else {
                citySize = 'Large';

            };
//append citySize to table
            $(this).append('<td>' + citySize + '</td>');
        };
    });
};
//function to place a random color when you mouseover the table
function addEvents(){

//create mouseover function
    $('table').mouseover(function(){
//define color variable
        var color = "rgb(";
//selects random color
        for (var i = 0; i < 3; i++){

            var random = Math.round(Math.random() * 255);

            color += random;

            if (i < 2){
                color += ',';

            } else {
                color += ')';
        };

        $(this).css('color', color);
    };
});
//function that allows you to click elements of the table
function clickme(){
//initalizes the click me event
        alert('Hey, you clicked me!');
    };

    $('table').on('click', clickme);
    $('table').on('click', function(){
    });
};
