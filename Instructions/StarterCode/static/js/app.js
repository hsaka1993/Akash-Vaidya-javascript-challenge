// from data.js
var tableData = data;

// YOUR CODE HERE!
var body = d3.select("tbody")
var i;
for (i = 0; i <tableData.length; i++) {
var row = body.append("tr")
row.append("td").text(tableData[i].datetime)
row.append("td").text(tableData[i].city)
row.append("td").text(tableData[i].state)
row.append("td").text(tableData[i].country)
row.append("td").text(tableData[i].shape)
row.append("td").text(tableData[i].durationMinutes)
row.append("td").text(tableData[i].comments)
}
function search(){

    alert("hello")
}
