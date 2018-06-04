// Get references to the tbody element, input field and button
var $tbody = document.querySelector("tbody");



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


// Render the table for the first time on page load
renderTable();
$(document).ready( function () {
  $('#main-table').DataTable();
} );