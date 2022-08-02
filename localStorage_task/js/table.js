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
 
    //  for (let j = 0; j < 2; j++) {
       // Create a <td> element and a text node, make the text
       // node the contents of the <td>, and put the <td> at
       // the end of the table row
       const cell1 = document.createElement("td");
       const cell2 = document.createElement("td");
       const cell3 = document.createElement("td");
       const cell4 = document.createElement("td");
       const cell5 = document.createElement("td");

       cell1.innerHTML=JSON.parse(localStorage.getItem('fullname'));
       console.log(cell1);
       cell2.innerHTML=JSON.parse(localStorage.getItem('city'));
       console.log(cell2);
       cell3.innerHTML=JSON.parse(localStorage.getItem('mobile'));
       console.log(cell3);
       cell4.innerHTML=JSON.parse(localStorage.getItem('email'));
       console.log(cell4);
       cell5.innerHTML=JSON.parse(localStorage.getItem('psw'));
       console.log(cell5);
      //  cell.innerHTML=JSON.parse(localStorage.getItem('mobile'));
      //  console.log(cell);
      //  cell.innerHTML=JSON.parse(localStorage.getItem('email'));
      //  console.log(cell);
      //  const cellText = document.createTextNode(localStorage.getItem('firstname'));
      //  console.log(cellText);
      //  cell.appendChild(cellText);
       row.appendChild(cell1);
       row.appendChild(cell2);
       row.appendChild(cell3);
       row.appendChild(cell4);
       row.appendChild(cell5);
    //  }
 
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
 