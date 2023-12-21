const res=prompt("Enter A Value");
console.log(res);
let elementClass = document.getElementsByTagName("div");

if (res>50){
    elementClass[1].style.backgroundColor="green";
}
else{
    elementClass[1].style.backgroundColor="red";
}