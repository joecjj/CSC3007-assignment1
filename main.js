//Date time library

// api url
const api_url = 
      "https://api.data.gov.sg/v1/environment/psi";
// Defining async function
async function getapi(url,table) {
    // Storing response
    const response = await fetch(url);
    // Storing data in form of JSON
    var data = await response.json();
    //console.log(data.items[0].timestamp)
    show(data,table);
}
// Function to define innerHTML for HTML table
function show(data,table) {
    var readings = data.items[0].readings
    var timestamp = data.items[0].timestamp
    const tableHead =table.querySelector("thead");
    const tableBody = table.querySelector("tbody");
    console.log(timestamp)
    var date= new Date(timestamp);
    //const dateFormatted = format(now, "EEEE',' MMMM d',' ha")
    document.getElementById("table_header").innerHTML="Last updated "+date
    tableHead.innerHTML = "<tr></tr>";
    tableBody.innerHTML ="";
    let tablehtml = 
        `<tr>
          <th>Metric</th>
          <th>National</th>
          <th>Central</th>
          <th>West</th>
          <th>East</th>
          <th>North</th>
          <th>South</th>
         </tr>`;

    tableHead.innerHTML = tablehtml;
// Loop to access all rows 

console.log(readings)
for (let r in readings) {
    tablehtml = `<tr> 
    <td>${r} </td>
    <td>${readings[r].national} </td>
    <td>${readings[r].central} </td>
    <td>${readings[r].west} </td>
    <td>${readings[r].east} </td>
    <td>${readings[r].north} </td>
    <td>${readings[r].south} </td>

</tr>`;
tableBody.innerHTML += tablehtml
}
}
getapi(api_url,document.querySelector("table"));