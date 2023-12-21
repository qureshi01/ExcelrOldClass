let salary= parseInt(prompt("Enter your salary"));
console.log("salary entered by user",salary);

let result =document.getElementById("sumDemo");
let z=parseInt(salary)+(parseInt(salary)*0.5);
setTimeout(function() {
    result.innerHTML="<h2>Total salary is</h2>" + z;
}, 2000) //2000 is 2sec(2000ms)


