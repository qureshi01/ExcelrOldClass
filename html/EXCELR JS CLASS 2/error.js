// console.log(age);
// console.log("It was a happy execution");

//Above piece is a example error handling.the second code doesnt execeute because error happens in first line


// function fun(){
//     let age=10;
//     console.log(age);
// }
// console.log(age+10);
// console.log("It was a happy execution");

//Again causes a error because of local scope variable


try{
    console.log(age);
}catch(error){
    console.log("Oops! Error Occurs!")
    let age=10;
    console.log(age);
}
console.log("It was a happy execution");
try{function fun(a,b){
    let c=(a+b);
    let avg=c/2;
    console.log(avg);
}
}catch(e){
    function fun(a,b){
        let c=(a+b);                  // Since NaN is not a error this does not get executed.
        console.log(c);
    }
}

fun(10,20);
fun(-10,-20);
fun("Happy"," Ending")

console.log("It was a happy execution number 2");



//ERROR HANDLING TRY CATCH THROW

function startGame(){
    try{
        playGame();
    }catch(error){
        alert("This IS Wrong")
    }
}

startGame();

function playGame(){
let i = prompt("Give me a number below 10 :");
let j=0;
if(i<10){
 j= i*10+15;
}else{
    throw new Error("Please enter correct number :");
}
console.log("You won "+j+" Money");

}



