const sumFunction = new Function('num1','num2','return num1 + num2');


console.log(sumFunction(10,20));

(function fun(name){
    console.log("This Was An IIFE "+name)  //IMEDIATELY INVOKED FUNCTION (IIFE)
})("Hashim");


fun1();
function fun1(){
    console.log("Function Statement") //HOISTING IS DONE SO WE CAN CALL BEFORE FUNCTION DECLARATION
};


//fun2();  THIS WILL CAUSE ERROR SINCE HOISTING IS NOT DONE
var fun2=function(){
    console.log("Function Expression")
}
fun2();

//ARROW FUNCTION

const fun = () => console.log("ARROW FUNCTION");
fun();


const sumResult = function(val1, val2){
    return val1+val2;
}
console.log(sumResult(20,30));


const sumResult2 = (val1,val2) =>(val1+val2); //IMPLICIT RETURN
console.log(sumResult2(30,50));

((name)=> console.log((name)))("Hashim"); //IIFE AND ARROW FUNCTION IMPLEMENTATION
((v1,v2)=> console.log(v1+v2))(10,20);