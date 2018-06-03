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

 
  filteredDatetimes = dataSet.filter(function(entry) {
    var entryDate = entry.datetime;
    var entryCity = entry.city;
    var entryState = entry.state;
    var entryCountry = entry.country;   
    var entryShape = entry.shape;

    if ((filterDate != "") &&
        (filterCity == "") && 
        (filterState == "") && 
        (filterCountry == "") && 
        (filterShape == "") )
      return ( (entryDate === filterDate) );

    
      else if ((filterDate != "") &&
              (filterCity != "") && 
              (filterState == "") && 
              (filterCountry == "") && 
              (filterShape == "") ) 
      return ( (entryDate === filterDate) && (entryCity === filterCity) );

      else if ((filterDate != "") &&
              (filterCity == "") && 
              (filterState != "") && 
              (filterCountry == "") && 
              (filterShape == "") ) 
      return ( (entryDate === filterDate) && (entryState === filterState) );

      else if ((filterDate != "") &&
              (filterCity == "") && 
              (filterState == "") && 
              (filterCountry != "") && 
              (filterShape == "") ) 
      return ( (entryDate === filterDate) && (entryCountry === filterCountry) );

      else if ((filterDate != "") &&
              (filterCity == "") && 
              (filterState == "") && 
              (filterCountry == "") && 
              (filterShape != "") ) 
      return ( (entryDate === filterDate) && (entryShape === filterShape) );

      else if ((filterDate != "") &&
              (filterCity != "") && 
              (filterState != "") && 
              (filterCountry == "") && 
              (filterShape == "") ) 
      return ( (entryDate === filterDate) && (entryCity === filterCity) && (entryState === filterState) );

      else if ((filterDate != "") &&
              (filterCity != "") && 
              (filterState == "") && 
              (filterCountry != "") && 
              (filterShape == "") ) 
      return ( (entryDate === filterDate) && (entryCity === filterCity) && (entryCountry === filterCountry) );

      else if ((filterDate != "") &&
              (filterCity != "") && 
              (filterState == "") && 
              (filterCountry == "") && 
              (filterShape != "") ) 
      return ( (entryDate === filterDate) && (entryCity === filterCity) && (entryShape === filterShape) );

      else if ((filterDate != "") &&
              (filterCity == "") && 
              (filterState != "") && 
              (filterCountry != "") && 
              (filterShape == "") ) 
      return ( (entryDate === filterDate) && (entryState === filterState) && (entryCountry === filterCountry) );

      else if ((filterDate != "") &&
              (filterCity == "") && 
              (filterState != "") && 
              (filterCountry == "") && 
              (filterShape != "") ) 
      return ( (entryDate === filterDate) && (entryState === filterState) && (entryShape === filterShape) );

      else if ((filterDate != "") &&
              (filterCity == "") && 
              (filterState == "") && 
              (filterCountry != "") && 
              (filterShape != "") ) 
      return ( (entryDate === filterDate) && (entryCountry === filterCountry) && (entryShape === filterShape) );

      else if ((filterDate != "") &&
              (filterCity != "") && 
              (filterState != "") && 
              (filterCountry != "") && 
              (filterShape == "") ) 
      return ( (entryDate === filterDate) && (entryCity === filterCity) && (entryState === filterState) && (entryCountry === filterCountry) );

      else if ((filterDate != "") &&
              (filterCity != "") && 
              (filterState != "") && 
              (filterCountry == "") && 
              (filterShape != "") ) 
      return ( (entryDate === filterDate) && (entryCity === filterCity) && (entryState === filterState) && (entryShape === filterShape) );

      else if ((filterDate != "") &&
              (filterCity != "") && 
              (filterState == "") && 
              (filterCountry != "") && 
              (filterShape != "") ) 
      return ( (entryDate === filterDate) && (entryCity === filterCity) && (entryShape === filterShape) && (entryCountry === filterCountry) );

      else if ((filterDate != "") &&
              (filterCity == "") && 
              (filterState != "") && 
              (filterCountry != "") && 
              (filterShape != "") ) 
      return ( (entryDate === filterDate) && (entryShape === filterShape) && (entryState === filterState) && (entryCountry === filterCountry) );


      if ((filterDate == "") &&
      (filterCity != "") && 
      (filterState == "") && 
      (filterCountry == "") && 
      (filterShape == "") )
    return ( (entryCity === filterCity) );

 
    else if ((filterDate == "") &&
    (filterCity != "") && 
    (filterState != "") && 
    (filterCountry == "") && 
    (filterShape == "") ) 
return ( (entryState === filterState) && (entryCity === filterCity) );

else if ((filterDate == "") &&
(filterCity != "") && 
(filterState == "") && 
(filterCountry != "") && 
(filterShape == "") ) 
return ( (entryCountry === filterCountry) && (entryCity === filterCity) );


      else if ((filterDate == "") &&
      (filterCity != "") && 
      (filterState == "") && 
      (filterCountry == "") && 
      (filterShape != "") ) 
       return ( (entryShape === filterShape) && (entryCity === filterCity) );

       else if ((filterDate == "") &&
       (filterCity != "") && 
       (filterState != "") && 
       (filterCountry != "") && 
       (filterShape == "") ) 
        return ( (entryState === filterState) && (entryCity === filterCity) && (entryCountry === filterCountry) );
 
        else if ((filterDate == "") &&
        (filterCity != "") && 
        (filterState != "") && 
        (filterCountry == "") && 
        (filterShape != "") ) 
         return ( (entryState === filterState) && (entryCity === filterCity) && (entryShape === filterShape) );
 
         else if ((filterDate == "") &&
         (filterCity != "") && 
         (filterState == "") && 
         (filterCountry != "") && 
         (filterShape != "") ) 
          return ( (entryShape === filterShape) && (entryCity === filterCity) && (entryCountry === filterCountry) );

          else if ((filterDate == "") &&
          (filterCity != "") && 
          (filterState != "") && 
          (filterCountry != "") && 
          (filterShape != "") ) 
  return ( (entryShape === filterShape) && (entryCity === filterCity) && (entryState === filterState) && (entryCountry === filterCountry) );

        
          if ((filterDate == "") &&
          (filterCity == "") && 
          (filterState != "") && 
          (filterCountry == "") && 
          (filterShape == "") )
        return ( (entryState === filterState) );

        else if ((filterDate == "") &&
        (filterCity == "") && 
        (filterState != "") && 
        (filterCountry != "") && 
        (filterShape == "") ) 
    return ( (entryState === filterState) && (entryCountry === filterCountry) );
    
    else if ((filterDate == "") &&
    (filterCity == "") && 
    (filterState != "") && 
    (filterCountry == "") && 
    (filterShape != "") ) 
return ( (entryState === filterState) && (entryShape === filterShape) );

        else if ((filterDate == "") &&
        (filterCity == "") && 
        (filterState != "") && 
        (filterCountry != "") && 
        (filterShape != "") ) 
        return ( (entryState === filterState) && (entryShape === filterShape) && (entryCountry === filterCountry) );
        
        if ((filterDate == "") &&
        (filterCity == "") && 
        (filterState == "") && 
        (filterCountry != "") && 
        (filterShape == "") )
      return ( (entryCountry === filterCountry) );


      else if ((filterDate == "") &&
      (filterCity == "") && 
      (filterState == "") && 
      (filterCountry != "") && 
      (filterShape != "") ) 
  return ( (entryShape === filterShape) && (entryCountry === filterCountry) );
   
  if ((filterDate == "") &&
  (filterCity == "") && 
  (filterState == "") && 
  (filterCountry == "") && 
  (filterShape != "") )
return ( (entryShape === filterShape) );



    else return ((entryDate === filterDate) && 
                (entryCity === filterCity) && 
                (entryState === filterState) &&
                (entryCountry === filterCountry) &&
                (entryShape === filterShape));
  });

  renderTable();
}

// Render the table for the first time on page load
renderTable();
