
/* This script and many more are available free online at
The JavaScript Source!! http://www.javascriptsource.com
Created by: Michael J. Damato | http://developing.damato.net/ */
// State lists
var region = new Array();

region["North America "] = new Array("Canada", "Mexico", "United States");
region["Central America & Caribbean"] = new Array("Antigua and Barbuda", "Bahamas", "Barbados", "Belize", "Cayman Islands", "Costa Rica"
	, "Cuba", "Dominica", "Dominican Republic", "El Salvador", "Grenada", "Guadeloupe", "Guatemala", "Haiti");
region[" South America "] = new Array("Argentina", "Bolivia", "Brazil", "Chile", "Colombia", "Ecuador", "Falkland Islands", "French Guiana", "Guyana", "Paraguay", "Peru", "Suriname", "Uruguay", "Venezuela");
region[" East Asia "] = new Array("China", "Hong Kong", "Japan", "Macau", "North Korea", "South Korea", "Taiwan ");
region["Southeast Asia"] = new Array("Brunei", "Cambodia", "East Timor", "Indonesia", "Laos", "Malaysia", "Myanmar", "Philippines", "Singapore", "South Vietnam", "Thailand", "Vietnam");
region["South Asia"] = new Array("Afghanistan", "Bangladesh", "Bhutan", "India", "Maldives", "Mauritius", "Nepal", "Pakistan", "Sri Lanka");
region["Central Asia"] = new Array("Armenia", "Azerbaijan", "Georgia", "Kazakhstan", "Kyrgyzstan", "Tajikistan", "Turkmenistan", "Uzbekistan");
region["Western Europe"] = new Array("Andorra, Austria", "Belgium", "Cyprus", "Denmark", "Finland, France", "Germany", "Gibraltar", "Greece", "Iceland", "Ireland", "Italy", "Luxembourg", "Malta", "Netherlands", "Norway", "Portugal", "Spain", "Sweden", "Switzerland", "United Kingdom", "Vatican City", "West Germany (FRG)");



function setStates() {
  cntrySel = document.getElementById(‘country’);
  stateList = states[cntrySel.value];
  changeSelect(‘state’, stateList, stateList);
  
}


function changeSelect(fieldID, newOptions, newValues) {
  selectField = document.getElementById(fieldID);
  selectField.options.length = 0;
  for (i=0; i<newOptions.length; i++) {
    selectField.options[selectField.length] = new Option(newOptions[i], newValues[i]);
  }
}

// Multiple onload function created by: Simon Willison
// http://simonwillison.net/2004/May/26/addLoadEvent/
function addLoadEvent(func) {
  var oldonload = window.onload;
  if (typeof window.onload != ‘function’) {
    window.onload = func;
  } else {
    window.onload = function() {
      if (oldonload) {
        oldonload();
      }
      func();
    }
  }
}

addLoadEvent(function() {
  setStates();
});
