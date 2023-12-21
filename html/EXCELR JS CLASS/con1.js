let result = document.getElementById("sumDemo");

// switch(new Date().getDay()){
//     case 0:
//         result.innerHTML = "<h1>Today is:Sunday</h1>";
//         break;
//     case 1:
//         result.innerHTML = "<h1>Today is:Monday</h1>";
//         break;
//     case 2:
//         result.innerHTML = "<h1>Today is:Tuesday</h1>";
//         break;
//     case 3:
//         result.innerHTML = "<h1>Today is:Wednesday</h1>";
//         break;
//     case 4:
//         result.innerHTML = "<h1>Today is:Thursday</h1>";
//         break;
//     case 5:
//         result.innerHTML = "<h1>Today is:Friday</h1>";
//         break;
//     case 6:
//         result.innerHTML = "<h1>Today is:Saturday</h1>";   
//         break; 

// }

let x=prompt("Give me a Char btw A and D");
switch(x){
    case "A":
        console.log("a for apple");
        break;
    case "B":
        console.log("B for ball");
        break;
    case "C":
        console.log("C for Cat");
        break;
    case "D":
        console.log("D for Dog");
        break;
    case "E":
    case "F":
    case "G":
        console.log("Ok");
        break;
    default:
        console.log("Read The Sentence Properly")
}
