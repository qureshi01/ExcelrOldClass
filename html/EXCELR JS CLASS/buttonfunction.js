// function demoFunction(){
//     alert("Inside demoFuction"); //Testing the function is called.
//     let element = document.getElementById("sumDemo");

//     let input=100;

//     if(input>50){
//         element.style.backgroundColor="green";
//     }
//     else{
//         element.style.backgroundColor="red";
//     }


//eventlistener

document.addEventListener("click",getStarted);

function getStarted(){
    alert("Hello World");
}

    function demoFunction(){

    let element = document.getElementById("sumDemo");

    let input= Math.floor(Math.random(100)*100); //math.floor used to remove decimal part
    console.log(input);

    if(input>50){
        element.classList.add("showStyle");
        element.classList.remove("changeStyle");

    }
    else{
        element.classList.add("changeStyle");
        element.classList.remove("showStyle");

    }


}