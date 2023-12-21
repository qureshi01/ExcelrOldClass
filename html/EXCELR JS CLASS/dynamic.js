let favAnimal = prompt("Give Me Your Favourite Animal");
console.log(favAnimal);


function doSomething(){
    let element = document.getElementById("animalList");
    const animalListNode=document.createElement("li"); // IF WE HAVE TO CREATE A NODE WITH A ATTRIBUTE USE THIS TWO LINES
    animalListNode.innerText = favAnimal;
    element.appendChild(animalListNode);
    // element.removeChild(element.firstElementChild); // removes the first child
    // element.removeChild(element.children[2]); //to remove index 2 

    let newNode= document.createTextNode("Rhino") // IF U WANT TO CREATE JST A TEXT NODE THIS CAN BE USED
    let specificElement = document.getElementById("animalList").children[1];
    element.replaceChild(newNode,specificElement) // (THE THING WE NEED TO CHANGE , WHAT WE WANT TO CHANGE)


}