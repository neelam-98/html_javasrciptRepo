function add(){
    var num=Number(document.getElementById('number').value);
    num++;
    document.getElementById("number").value=num;
}
function sub(){
    var num=Number(document.getElementById('number').value);
    num--;
    document.getElementById("number").value=num;
}
function reset(){
    var num=0;
    document.getElementById("number").value=num;
}