function chooseCountry(){
    var countries = [
        "United States", 
        "Canada", 
        "Italy", 
        "France", 
        "Russia", 
        "Mexico", 
        "Australia", 
        "Brasil", 
        "United Kingom", 
        "Germany", 
        "Egypt", 
        "China", 
        "Japan", 
        "Spain", 
        "Luxembourg", 
        "Iceland",
        "Afganistan",
        "Belgium",
        "Greenland",
    ]
    var chosenCountry = contries[Math.floor(Math.random()*countries.length)]

    console.log(chosenCountry)
    console.log(countries.length)
}