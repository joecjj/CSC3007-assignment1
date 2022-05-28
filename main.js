
// api url
const api_url = 
      "https://api.data.gov.sg/v1/environment/psi";
// Defining async function
async function getapi(url,table) {
    // Storing response
    const response = await fetch(url);
    // Storing data in form of JSON
    var data = await response.json();
    show(data,table);
}
// Function to define innerHTML for HTML table
function show(data,table) {
    const tableHead =table.querySelector("thead");
    const tableBody = table.querySelector("tbody");
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
var readings = data.items[0].readings
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