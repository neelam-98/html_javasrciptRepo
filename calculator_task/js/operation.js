function add(){
    var a,b,c;
    
    a=Number(document.getElementById("first").value);
    console.log("num1",a);
    b=Number(document.getElementById("second").value);
    console.log("num2",b);
    c= a + b;
    // document.getElementById("answer").innerHTML= c;
    document.getElementById("answer").value= c;
    console.log("ans",c);
}
function sub(){
    var a,b,c;
    a=Number(document.getElementById("first").value);
    console.log("num1",a);
    b=Number(document.getElementById("second").value);
    console.log("num2",b);
    c= a - b;
    document.getElementById("answer").value= c;
    console.log("ans",c);
}
function multiply(){
    var a,b,c;
    a=Number(document.getElementById("first").value);
    console.log("num1",a);
    b=Number(document.getElementById("second").value);
    console.log("num2",b);
    c= a * b;
    document.getElementById("answer").value= c;
    console.log("ans",c);
}
function divide(){
    var a,b,c;
    a=Number(document.getElementById("first").value);
    console.log("num1",a);
    b=Number(document.getElementById("second").value);
    console.log("num2",b);
    c= a / b;
    document.getElementById("answer").value= c;
    console.log("ans",c);
}