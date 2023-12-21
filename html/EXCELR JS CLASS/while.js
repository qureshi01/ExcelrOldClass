let result = document.getElementById("sumDemo");

let carMakers =["maruti","tata","honda","mercedes","bmw"];

// let carMaker=0;
// let finalHtml='';

// while(carMaker<carMakers.length){
//     finalHtml+="<h2> This car is from "+carMakers[carMaker]+"</h2><br>";
//     carMaker++;
// }
// result.innerHTML=finalHtml;

let carMaker=0;
let finalHtml='';

do{
    finalHtml+="<h2> This car is from "+carMakers[carMaker]+"</h2><br>";
    carMaker++;
}
while(carMaker>carMakers.length);

result.innerHTML=finalHtml;