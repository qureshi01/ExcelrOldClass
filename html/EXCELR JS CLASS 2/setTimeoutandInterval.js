let a = setTimeout(function() {
    console.log("I am done")
}, 2000)
console.log("printing : "+a); //This a prints the object value of timeout.


setTimeout(function() {
    console.log("I am done")
}, 2000)



var sum = function(a,b){
    let c = a+b+10;
    console.log(c);
    return c;
}
setTimeout(sum,3000,10,20); //(function,time,parameters)



setTimeout(function(a,b){
    let c = a+b+10;
    console.log(c);
    return c;
},2000,10,20);


//SET INTERVAL

let c1= setInterval(function(){
    console.log("Ok");
}, 2000);

setTimeout(function(){
    clearInterval(c1);  // used to stop the iteration
},11000);

function *idGenerator(){

};
