function validate(x){
    x.preventDefault();


    let emailId = document.getElementById("inputEmail4").value; //CAPTURING DATA FROM INPUT BOX
    let password = document.getElementById("inputPassword4").value; //CAPTURING DATA FROM INPUT BOX
    let confirmPassword = document.getElementById("inputPassword5").value; //CAPTURING DATA FROM INPUT BOX
    let phoneNumber = document.getElementById("inputPhonenumber4").value; //CAPTURING DATA FROM INPUT BOX
    let errorElement = document.getElementById("errorInfo");
    let errors=[];

    if(password !== confirmPassword){
        let confirmPasswordElement = document.getElementById("confirmPasswordErrorInfo");
        confirmPasswordElement.innerHTML ="Password Mismatch";
        confirmPasswordElement.style.color="red";
        // console.log("Password Mismatches")
        errors+="Password Mismatches";
        }

    // console.log(emailId);
    // console.log(password);
    // console.log(confirmPassword);
    // console.log(PhoneNumber);

    if(isNaN(phoneNumber)){
        let phoneNumberElement = document.getElementById("phoneErrorInfo");
        phoneNumberElement.innerHTML = "Wrong Number";
        phoneNumberElement.style.color="red";
        errors+="Wrong Number";
    }

    if(errors.length >0){
    errorElement.innerHTML=errors;
    errorElement.style.color="red";
    return false;
    }

        return true;
    }

    document.getElementById("submitButton").addEventListener('click',function(){console.log("funny")},true); //1ST APPROACH better one approach

    document.getElementById("submitButton").onclick=function(){    //2ND APPROACH
        console.log("funny");
    }
