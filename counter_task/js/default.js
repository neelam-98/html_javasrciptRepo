let number = 0;
document.getElementById("number").value = number;
function increment() {
       number++;
       document.getElementById("number").value = number;
}
function decrement() {
       number--;
       document.getElementById("number").value = number;
}
function reset() {
       let number = 0;
       document.getElementById("number").value = number;
}