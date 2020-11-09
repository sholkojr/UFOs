// from data.js
const tableData = data;

// get table references
var tbody = d3.select("tbody");

function buildTable(data) {
  // First, clear out any existing data
  tbody.html("");

  // Next, loop through each object in the data
  // and append a row and cells for each value in the row
  data.forEach((dataRow) => {
    // Append a row to the table body
    let row = tbody.append("tr");

    // Loop through each field in the dataRow and add
    // each value as a table cell (td)
    Object.values(dataRow).forEach((val) => {
      let cell = row.append("td");
      cell.text(val);
    });
  });
}

// 1. Create a variable to keep track of all the filters as an object.
let currentFilter = {}


// 3. Use this function to update the filters. 
function updateFilters() {

    // 4a. Save the element that was changed as a variable.

    let changedElement = d3.select(this);
    console.log(changedElement);
      

    // 4b. Save the value that was changed as a variable.
    let elementValue = changedElement.property("value");
    console.log(elementValue);

    // 4c. Save the id of the filter that was changed as a variable.
    let filterId = changedElement.property("id");
    console.log(filterId);
  
    // 5. If a filter value was entered then add that filterId and value
    // to the filters list. Otherwise, clear that filter from the filters object.
    // d3.selectAll("li").on("keypress", function() {
    /*    if(d3.event.keyCode === 13 && d3.select(this) != ""){
            currentFilter.push([filterId, elementValue]);
            console.log(currentFilter);
        }    
        else if (d3.event.keyCode === 13 && d3.select(this) == "") {
            currentFilter={}
        } */    
    // });
    if (elementValue) {
        currentFilter[filterId]=elementValue;
    }
    else{ 
        delete currentFilter[filterId];
    }

  
    // 6. Call function to apply all filters and rebuild the table


    filterTable();
  
}
  
  // 7. Use this function to filter the table when data is entered.
function filterTable() {
    console.log(filterTable);
    // 8. Set the filtered data to the tableData.
    let filteredData = tableData;

    // 9. Loop through all of the filters and keep any data that
    // matches the filter values
/*
    if (elementFilter === "datetime") {
        filteredData = filteredData.filter(row => row.datetime === filterTable.datetime);
    }    
    else if (elementFilter === "city" ) {
        filteredData = filteredData.filter(row => row.city === filterTable.city);
    }    
    else if (elementFilter === "state") {
        filteredData = filteredData.filter(row => row.state === filterTable.state);
    }
    else if (elementFilter === "country") {
        filteredData = filteredData.filter(row => row.country === filterTable.country);
    }
    else if (elementFilter === "shape") {
        filteredData = filteredData.filter(row => row.shape === filterTable.shape);
    }
    else {console.log("No change entered in filters - reset filters")}

*/
    Object.entries(currentFilter).forEach(([key, value]) => {
        filteredData = filteredData.filter(row => row[key] === value);
    });

    //filteredData
    
  
    // 10. Finally, rebuild the table using the filtered data
    buildTable(filteredData);
    }
  
  // 2. Attach an event to listen for changes to each filter
d3.selectAll("input").on("change", updateFilters);
  
// Build the table when the page loads
buildTable(tableData);
