// CATCH BINDING 

try{
    console.log("Before the error");
    console.log(a);
    console.log("after the error");
}catch(error){
    
}

////
console.log("-----");

try{
    console.log("Before the error");
    console.log(a);
    console.log("after the error");
}catch(error){                           // HERE ERROR IS CONSIDERED AS AN OBJECT
    console.log(error.name);
    console.log(error.message);
}

////
console.log("-----");

try{
    console.log("Before the error");
    console.log(a);
    console.log("after the error");
}catch({name,message}){ // HERE WE CAN NAME VALUE NAME DIRECTLY WITHOUT OBJECT NAME
    console.log(name);
    console.log(message);
}

