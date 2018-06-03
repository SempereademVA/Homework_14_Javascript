// Get references to the tbody element, input field and button
var $tbody = document.querySelector("tbody");
var $dateInput = document.querySelector("#datetime");
var $cityInput = document.querySelector("#city");
var $stateInput = document.querySelector("#state");
var $countryInput = document.querySelector("#country");
var $shapeInput = document.querySelector("#shape");
var $searchBtn = document.querySelector("#search");
var $searchanyBtn = document.querySelector("#searchany");

// Add an event listener to the searchButton, call handleSearchButtonClick when clicked
$searchBtn.addEventListener("click", handleSearchButtonClick);
$searchanyBtn.addEventListener("click", handleSearchanyButtonClick);

// Set filteredDatetimes to data initially
var filteredDatetimes = dataSet;

// renderTable renders the filteredDatetimes to the tbody
function renderTable() {
  $tbody.innerHTML = "";
  for (var i = 0; i < filteredDatetimes.length; i++) {
    // Get get the current address object and its fields
    var address = filteredDatetimes[i];
    var fields = Object.keys(address);
    // Create a new row in the tbody, set the index to be i + startingIndex
    var $row = $tbody.insertRow(i);
    for (var j = 0; j < fields.length; j++) {
      // For every field in the address object, create a new cell at set its inner text to be the current value at the current address's field
      var field = fields[j];
      var $cell = $row.insertCell(j);
      $cell.innerText = address[field];
    }
  }
}

function handleSearchanyButtonClick() {
    // Format the user's search by removing leading and trailing whitespace.
    var filteranyDate = $dateInput.value.trim();
    var filteranyCity = $cityInput.value.trim().toLowerCase();
    var filteranyState = $stateInput.value.trim().toLowerCase();
    var filteranyCountry = $countryInput.value.trim().toLowerCase();
    var filteranyShape = $shapeInput.value.trim().toLowerCase();
  
   
    filteredDatetimes = dataSet.filter(function(entryany) {
      var entryanyDate = entryany.datetime;
      var entryanyCity = entryany.city;
      var entryanyState = entryany.state;
      var entryanyCountry = entryany.country;   
      var entryanyShape = entryany.shape;

      return ((entryanyDate === filteranyDate) || 
      (entryanyCity === filteranyCity) || 
      (entryanyState === filteranyState) ||
      (entryanyCountry === filteranyCountry) ||
      (entryanyShape === filteranyShape));
});

renderTable();
}

function handleSearchButtonClick() {
  // Format the user's search by removing leading and trailing whitespace.
  var filterDate = $dateInput.value.trim();
  var filterCity = $cityInput.value.trim().toLowerCase();
  var filterState = $stateInput.value.trim().toLowerCase();
  var filterCountry = $countryInput.value.trim().toLowerCase();
  var filterShape = $shapeInput.value.trim().toLowerCase(); 

  var search_results = dataSet;
  var search_results_Date = [];
  var search_results_City = [];



        if (filterDate != "")
                search_results = search_results.filter(function(entry) {
                                                var entryDate = entry.datetime;
                                                return entryDate === filterDate});
         if (filterCity != "")
                search_results = search_results.filter(function(entry) {
                                                var entryCity = entry.city;
                                                return entryCity === filterCity});
                                                
        if (filterState != "")
                search_results = search_results.filter(function(entry) {
                                                var entryState = entry.state;
                                                return entryState === filterState});       

        if (filterCountry != "")
                search_results = search_results.filter(function(entry) {
                                        var entryCountry = entry.country;
                                        return entryCountry === filterCountry}); 

        if (filterShape != "")
                search_results = search_results.filter(function(entry) {
                                        var entryShape = entry.shape;
                                        return entryShape=== filterShape}); 

                                        
filteredDatetimes = search_results;

 

  renderTable();
}

// Render the table for the first time on page load
renderTable();
