var subcategory = {
          Central_Asia:["Armenia", "Azerbaijan", "Georgia", "Kazakhstan", "Kyrgyzstan", "Tajikistan", "Turkmenistan", "Uzbekistan"],
            North_America :["Canada", "Mexico", "United States"],
            
            Western_Europe:["Andorra", "Austria", "Belgium", "Cyprus", "Denmark", "Finland, France", "Germany", "Gibraltar", "Greece", "Iceland", "Ireland", "Italy", "Luxembourg", "Malta", "Netherlands", "Norway", "Portugal", "Spain", "Sweden", "Switzerland", "United Kingdom", "Vatican City", "West Germany (FRG)"],
            Southeast_Asia:["Brunei", "Cambodia", "East Timor", "Indonesia", "Laos", "Malaysia", "Myanmar", "Philippines", "Singapore", "South Vietnam", "Thailand", "Vietnam"],
            East_Asia:["China", "Hong Kong", "Japan", "Macau", "North Korea", "South Korea", "Taiwan "],      
            South_Asia:["Afghanistan", "Bangladesh", "Bhutan", "India", "Maldives", "Mauritius", "Nepal", "Pakistan", "Sri Lanka"],
            South_America: ["Argentina", "Bolivia", "Brazil", "Chile", "Colombia", "Ecuador", "Falkland Islands", "French Guiana", "Guyana", "Paraguay", "Peru", "Suriname", "Uruguay", "Venezuela"],
            Central_America_Caribbean :["Antigua and Barbuda", "Bahamas", "Barbados", "Belize", "Cayman Islands", 
            "CostaRica", "Cuba", "Dominica", "Dominican Republic", "El Salvador", "Grenada", "Guadeloupe", "Guatemala", "Haiti"], 
        }

function makeSubmenu(value) {
    if (value.length == 0) document.getElementById("categorySelect").innerHTML = "<option></option>";
    else {
        var citiesOptions = "";
      for (categoryId in subcategory[value]) {
            citiesOptions += "<option>" + subcategory[value][categoryId] + "</option>";
        }
        document.getElementById("categorySelect").innerHTML = citiesOptions;
  }
}
function displaySelected() {
  var country = document.getElementById("category").value;
  var city = document.getElementById("categorySelect").value;
   alert(country + "\n" + city);
   }
function resetSelection() {
  document.getElementById("category").selectedIndex = 0;
  document.getElementById("categorySelect").selectedIndex = 0;
}