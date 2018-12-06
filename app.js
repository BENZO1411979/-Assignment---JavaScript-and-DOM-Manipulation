//var tbody = d3.select("tbody");
//const inputData = data; // from the file 
// var tableData = data;
// data.forEach((weatherReport) => {
//     var row = tbody.append("tr");
//     Object.entries(weatherReport).forEach(([key, value]) => {
//       var cell = row.append("td");
//       cell.text(value);
//     });
//   });
//var  tableData = data; // from the file 
var $tbody = document.querySelector("tbody");
var $dateInput = document.querySelector("#datetime");
var $searchBtn = document.querySelector("#submit");

$searchBtn.addEventListener("click", handleSearchButtonClick);
var  tableData = data;
function renderTable() {
    $tbody.innerHTML = "";
    console.log("render is happening")
    for (var i = 0; i < tableData.length; i++) {
    
        // Get get the current sighting object and its fields
        var sighting = tableData[i];
        var fields = Object.keys(sighting);
        // Create a new row in the tbody, set the index to be i + startingIndex
        var $row = $tbody.insertRow(i);
        for (var j = 0; j < fields.length; j++) {
          // For every field in the address object, create a new cell at set its inner text to be the current value at the current address's field
          var field = fields[j];
          var $cell = $row.insertCell(j);
          $cell.innerText = sighting[field];
        }
      }
}
    // input_data.forEach(element => {
    //     let newTr = d3.select('tbody').append('tr')
    //     newTr.append('td').text(element.datetime)
    //     newTr.append('td').text(element.city)
    //     newTr.append('td').text(element.state)
    //     newTr.append('td').text(element.country)
    //     newTr.append('td').text(element.shape)
    //     newTr.append('td').text(element.durationMinutes)
    //     newTr.append('td').text(element.comments)
    // })
// end renderTable

//renderTable(tableData) // render it from the global data variable

function handleSearchButtonClick() {
    // Format the user's search by removing leading and trailing whitespace, lowercase the string
    var filterDate = $dateInput.value.trim();

    if (filterDate.length != 0){
      tableData = data.filter(function(x) {
        var sightingDate = x.datetime;
         return sightingDate === filterDate;
           });
    }
    else {
        tableData = data
    }
    d3.event.preventDefault();

    renderTable();
  }
  
  // Render the table for the first time on page load
  renderTable();










// // from data.js
// //var tableData = data;
// // Get references to the tbody element, input field and button


//      var $tbody = document.querySelector('tbody');
//      var $dateInput = document.querySelector('#datetime');
//      var $searchBtn = document.querySelector('#filter-btn');

//  // Add an event listener to the searchButton, call handleSearchButtonClick when clicked
//  $searchBtn.addEventListener('click', handleSearchButtonClick);

//  var tableData = data;
// // Fill the empty table with data from data
// function renderTable() {
    
//     $tbody.innerHTML = '';
//     for (var i = 0; i < tableData.length; i++) {
//       // Get get the current address object and its fields
//       var address = tableData[i];
//       var fields = Object.keys(address);
//       // Create a new row in the tbody, set the index to be i + startingIndex
//       var $row = $tbody.insertRow(i);
//       for (var j = 0; j < fields.length; j++) {
//         // For every field in the address object, create a new cell at set its inner text to be the current value at the current address's field
//         var field = fields[j];
//         var $cell = $row.insertCell(j);
//         $cell.innerText = address[field];
//       }
//     }
//   }
//   renderTable();

//   function handleSearchButtonClick() {
//     var filterdate = $dateInput.value;
   
//     tableData = data.filter(function(data1) {
//       var datetime1 = data1.datetime;
//       return datetime1 === filterdate;
//     });

//     renderTable();
//     };

//     // function handleResetButtonClick() {
//     //   filteredAddresses = addressData;
//     //   $cityInput.value = '';
//     //   $stateInput.value = '';
//     //   renderTable();
//     // };
  
//   // Render the table for the first time on page load
//   //renderTable();
