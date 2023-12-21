//CASE 1

fun();

function fun() {

    try {
        console.log("Going Inside Try");
        fun1();
        console.log("Try Done");
    } catch (e){
        console.log("Provide a proper input");
        console.log("Catch Done");
    }finally{
        console.log("This Execution is Done");
    }
    console.log("We are learning hardcore error handling");
}

function fun1(){
    //PROMPT WHERE USER CAN PROVIDE WRONG INPUT AND GET ERROR
    throw new Error("Wrong Input")
}
function fun2(){
    console.log("Inside Fun2");
}
function fun3(){
    console.log("Inside Fun3");
}

//CASE 2 EVEN RETURN IS BEING EXECUTED , FINALLY CODE WILL BE EXECUTED
console.log("-------------")
fun();

function fun() {

    try {
        console.log("Going Inside Try");
        fun1();
        console.log("Try Done");
    } catch (e){
        console.log("Provide a proper input");
        console.log("Catch Done");
        return;
    }finally{
        console.log("This Execution is Done");
    }
    console.log("We are learning hardcore error handling");
}

function fun1(){
    //PROMPT WHERE USER CAN PROVIDE WRONG INPUT AND GET ERROR
    throw new Error("Wrong Input")
}
function fun2(){
    console.log("Inside Fun2");
}
function fun3(){
    console.log("Inside Fun3");
}

//CASE 3

console.log("-------------")
fun();

function fun() {

    try {
        console.log("Going Inside Try");
        fun2();
        console.log("Try Done");
        throw new Error("Throwing error inside try");
    }catch (e){
        console.log("Provide a proper input");
        console.log("Catch Done");
    }finally{
        console.log("This Execution is Done");
    }
    console.log("We are learning hardcore error handling");
}

function fun1(){
    //PROMPT WHERE USER CAN PROVIDE WRONG INPUT AND GET ERROR
    throw new Error("Wrong Input")
}
function fun2(){
    console.log("Inside Fun2");
}
function fun3(){
    console.log("Inside Fun3");
}

//CASE 4

// console.log("-------------")
// fun();

// function fun() {

//     try {
//         console.log("Going Inside Try");
//         fun1();
//         console.log("Try Done");
//     } catch (e){
//         console.log("Provide a proper input");
//         console.log("Catch Done");
//         throw new Error("Throwing error inside try");
//     }finally{
//         console.log("This Execution is Done");
//     }
//     console.log("We are learning hardcore error handling");
// }

// function fun1(){
//     //PROMPT WHERE USER CAN PROVIDE WRONG INPUT AND GET ERROR
//     throw new Error("Wrong Input")
// }
// function fun2(){
//     console.log("Inside Fun2");
// }
// function fun3(){
//     console.log("Inside Fun3");
// }