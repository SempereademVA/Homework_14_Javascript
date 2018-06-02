// Get references to the tbody element, input field and button
var $tbody = document.querySelector("tbody");
var $stateInput = document.querySelector("#datetime");
var $searchBtn = document.querySelector("#search");

// Add an event listener to the searchButton, call handleSearchButtonClick when clicked
$searchBtn.addEventListener("click", handleSearchButtonClick);

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

function handleSearchButtonClick() {
  // Format the user's search by removing leading and trailing whitespace.
  var filterState = $stateInput.value.trim();

  // Set filteredDatetimes to an array of all Datetimes whose "date" matches the filter
  filteredDatetimes = dataSet.filter(function(address) {
    var addressState = address.datetime;

    // If true, add the address to the filteredDatetimes, otherwise don't add it to filteredDatetimes
    return addressState === filterState;
  });
  renderTable();
}

// Render the table for the first time on page load
renderTable();
