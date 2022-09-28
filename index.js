//console.log("Hi!");``
//Fetch all countries from the above url, and save the results in a variable - yes
// Create a ul element in your index.html -yes 
// Generate li elements for each country object and add the name of each country to the element's textContent value.
// Append the li elements to the ul element to display a list of country names
//https://restcountries.com/v3.1/all
//https://restcountries.com/v3.1/name/peru

window.addEventListener("DOMContentLoaded", () => {


fetch("https://restcountries.com/v3.1/all")
  .then((response) => response.json())
  .then((allCountries) => {


    console.log(allCountries); 
    
    const countryNames= allCountries.map((country)=>country.name.common);
    console.log(countryNames);

    countryNames.forEach((countryName) => {
    const countryNameList = document.createElement ("li");
    countryNameList.textContent = countryName;
    console.log(countryNameList);

    const CountryList = document.querySelector("ul");
    CountryList.appendChild(countryNameList);
        
    });
    

});

})













 // Extensions
// Add the flag next to the country's name, and resize it so it doesn't look ugly (use a .css file for this!)
// Create at the top of your index.html a new h2 tag
// Calculate the total population of all the countries, and display it in the h2 tag

