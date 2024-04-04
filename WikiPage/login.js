function validation() {
    let user1 = document.getElementById("user").value;
    let pass1 = document.getElementById("pass").value;

    let userName = localStorage.getItem("userName");
    let password = localStorage.getItem("password");

    if(userName == user1 && pass1 == password){
      console.log("Succesful");
      window.location.href = "index.html";
    }else{
      console.log("Failed");
    }
}
