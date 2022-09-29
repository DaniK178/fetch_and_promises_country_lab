//console.log("Hi!");``

window.addEventListener("DOMContentLoaded", () => {

    // async () => {
    //     const response = await fetch("https://restcountries.com/v3.1/all");
    //     const jsonData = await response.json();
    //     console.log(jsonData)
    // }  
    // console.log(jsonData);

fetch("https://restcountries.com/v3.1/all")
  .then((response) => response.json())
  .then((allCountries) => {

    console.log(allCountries); 
    
    const countryNames= allCountries.map((country)=>country.name.common);
    console.log(countryNames);

    countryNames.forEach((countryName) => {
        const countryNameList = document.createElement ("li");
        countryNameList.textContent = countryName;
        //console.log(countryNameList);

        const CountryList = document.querySelector("ul");
        CountryList.appendChild(countryNameList);    
    });

   

});

})


 


// Extensions
// Add the flag next to the country's name, and resize it so it doesn't look ugly (use a .css file for this!)
// Create at the top of your index.html a new h2 tag
// Calculate the total population of all the countries, and display it in the h2 tag

//     const totalPopulation= () => {allCountries
//         // const allCountryPopulation= allCountries.map((country)=>country.population)
//         .map((country)=>country.population)
//         //console.log(allCountriesPopulation())
//         .reduce((agg, current) => agg + current, 0);
//     }
   
//   //document.querySelector("h2").innerHTML = `Country Population ${totalPopulation()}`

 // const countryFlags= allCountries.map((country)=>country.flag);
    // console.log(countryFlags);
