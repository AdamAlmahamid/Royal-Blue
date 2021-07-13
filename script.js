function chooseCountry() {
    correctCountry = countries[Math.floor(Math.random()*countries.length)];
    console.log(correctCountry)
}

function choices() {
    for(let i = 0; i < 4; i++) {
        var choiceIsNotValid = true;
        while(choiceIsNotValid) {
            var alternate = countries[Math.floor(Math.random() * countries.length)];
            //check that this country does not equal the current country and it is not already in the alternates array
            if(alternate !== correctCountry && !alternates.some(country => country == alternate)) {
                alternates.push(alternate);
                choicesIsNotValid = false;
            }
        }
    }
    console.log(alternates)	
}
var correctCountry = null
var alternates = [];
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
];