// }//another way
function backgroundcolorchange()
{
    window.setTimeout( "backgroundcolorchange()", 2000); // background color change on every 5 sec
    var index = Math.round(Math.random() * 9);
    var ColorValue = "FFFFFF"; // default color - white (index = 0)
    if(index == 1)
    ColorValue = "FFCCCC"; //peach
    if(index == 2)
    ColorValue = "CCAFFF"; //violet
    if(index == 3)
    ColorValue = "A6BEFF"; //lt blue
    if(index == 4)
    ColorValue = "99FFFF"; //cyan
    if(index == 5)
    ColorValue = "D5CCBB"; //tan
    if(index == 6)
    ColorValue = "99FF99"; //lt green
    if(index == 7)
    ColorValue = "FFFF99"; //lt yellow
    if(index == 8)
    ColorValue = "FFCC99"; //lt orange
    if(index == 9)
    ColorValue = "CCCCCC"; //lt grey
    document.getElementsByTagName("body")[0].style.backgroundColor = "#" + ColorValue;
    document.getElementById('text').innerHTML="Hurray !!! color is changing..."
}

// const btn = document.getElementById('btn');

// btn.addEventListener('click', function onClick(event) {
//   // 👇️ change background color
//   document.body.style.backgroundColor = ' lightslategray';
//   

//   // 👇️ optionally change text color
//   // document.body.style.color = 'white';
// });
// function myFunction() {
//     document.body.style.backgroundColor = "red";
//   }
// function mycolor(){
//     window.setTimeout( "mycolor()", 1000); // background color change on every 5 sec
//     let colors=['violet ','yellow','orange','peach']
//     document.body.style.backgroundColor =  colors[Math.floor((Math.random() * 2) )]
