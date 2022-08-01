// const Data = JSON.parse(localStorage.getItem('Data'));
// console.log(Data);
// const { firstname, city,mobile, email, psw} = Data;
// console.log({
//   firstname, mobile, email,city,psw
// })
// document.getElementById('disTable tbody').append('<tr class="child"><td>' + firstname + '</td><td>' + city + '</td><td>' + mobile + 
// '</td><td>' + email+ '</td><td>');
function generate_table() {
  // creates a <table> element and a <tbody> element
   const tbl = document.createElement("table");
   const tblBody = document.createElement("tbody");
 
   // creating all cells
   for (let i = 0; i < 1; i++) {
     // creates a table row
     const row = document.createElement("tr");
 
     for (let j = 0; j < 1; j++) {
       // Create a <td> element and a text node, make the text
       // node the contents of the <td>, and put the <td> at
       // the end of the table row
       const cell = document.createElement("td");

       cell.innerHTML=(localStorage.getItem('firstname'));
       console.log(cell);
      //  const cellText = document.createTextNode(localStorage.getItem('firstname'));
      //  console.log(cellText);
      //  cell.appendChild(cellText);
       row.appendChild(cell);
     }
 
     // add the row to the end of the table body
     tblBody.appendChild(row);
   }
 
   // put the <tbody> in the <table>
   tbl.appendChild(tblBody);
   // appends <table> into <body>
   document.body.appendChild(tbl);
   // sets the border attribute of tbl to '2'
   tbl.setAttribute("border", "2");
 }
 