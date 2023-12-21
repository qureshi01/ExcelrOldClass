let result = document.getElementById("sumDemo");
let car=["maruti","tata","honda","mercedes","bmw"];

for(let i=0; i<car.length;i+=2){
    console.log("This car is from the maker :"+car[i]);
}
    console.log("------------------------------");

for (i in car){
    console.log("This "+ (parseInt(i)+1)+ " car is from the maker :"+car[i]);
}
    console.log("------------------------------");

for (i of car){
    console.log("This car is from the maker :"+i);
}
console.log("-------------For-Each-anonymous-----------------");

//for-each

car.forEach(function(i){ //anonymous function
    console.log("This car is from the maker :"+i);
})
console.log("-------------For-Each-----------------");

car.forEach(fun);
function fun(i){
    console.log("This car is from the maker :"+i);
}
