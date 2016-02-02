//Example 2.3 line 6...function to create a table with cities and their populations
function cities(){
    //define an array of objects for cities and population
    var cityPop = [
        { 
            city: 'Madison',
            population: 233209
        },
        {
            city: 'Milwaukee',
            population: 594833
        },
        {
            city: 'Green Bay',
            population: 104057
        },
        {
            city: 'Superior',
            population: 27244
        }
    ];

    //...

    //Example 2.3 line 41...loop to add a new row for each city
    for (var i = 0; i < cityPop.length; i++){
        var tr = document.createElement("tr");

        var city = document.createElement("td");
        city.innerHTML = cityPop[i].city; //NOTE DIFFERENT SYNTAX
        tr.appendChild(city);

        var pop = document.createElement("td");
        pop.innerHTML = cityPop[i].population; //NOTE DIFFERENT SYNTAX
        tr.appendChild(pop);

        table.appendChild(tr);
    };
};

cities();