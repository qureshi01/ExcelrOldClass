let arr=["red","yellow","green"]
let salary =1000;
paint();

function sleep(ms){
    return new Promise(resolve=>setTimeout(resolve,ms));

}

async function paint(){
    let result = document.getElementById("sumDemo");
    for (let i = 0; i < arr.length; i++) {
        if (i % 2 == 0) {
            result.innerHTML = "<h5 style='background-color:"+arr[i]+"'>This is Even bcz i is:"+i+"</h5>";
        }
        else {
            result.innerHTML = "<h5 style='background-color:"+arr[i]+"'>This is Odd bcz i is" +i+"</h5>";
        }
        await sleep(6000);
    }
}

