function validation() {
    let name = document.getElementById("name").value;
    let user = document.getElementById("user").value;
    let pass = document.getElementById("pass").value;
    let confirmpass = document.getElementById("conpass").value;
    let mobileNumber = document.getElementById("mobileNumber").value;
    let emails = document.getElementById("emails").value;

    if (name == "") {
      document.getElementById("Name").innerHTML =
        " ** Please fill the Name field";
      return false;
    }

    if (emails == "") {
      document.getElementById("emailids").innerHTML =
        " ** Please fill the email id field";
      return false;
    }
    if (emails.indexOf("@") <= 0) {
      document.getElementById("emailids").innerHTML = " ** Invalid Email";
      return false;
    }

    if (
      emails.charAt(emails.length - 4) != "." &&
      emails.charAt(emails.length - 3) != "."
    ) {
      document.getElementById("emailids").innerHTML = " ** Invalid Email";
      return false;
    }

    if (user == "") {
      document.getElementById("username").innerHTML =
        " ** Please fill the username field";
      return false;
    }
    if (user.length <= 3 || user.length > 20) {
      document.getElementById("username").innerHTML =
        " ** Username lenght must be between 3 and 20";
      return false;
    }
    if (!isNaN(user)) {
      document.getElementById("username").innerHTML =
        " ** only characters are allowed";
      return false;
    }

    if (pass == "") {
      document.getElementById("passwords").innerHTML =
        " ** Please fill the password field";
      return false;
    }
    if (pass.length <= 5 || pass.length > 20) {
      document.getElementById("passwords").innerHTML =
        " ** Passwords lenght must be between  5 and 20";
      return false;
    }

    if (pass != confirmpass) {
      document.getElementById("confrmpass").innerHTML =
        " ** Password Mismatch";
      return false;
    }

    if (confirmpass == "") {
      document.getElementById("confrmpass").innerHTML =
        " ** Please fill the confirmpassword field";
      return false;
    }

    if (mobileNumber == "") {
      document.getElementById("mobileno").innerHTML =
        " ** Please fill the mobile NUmber field";
      return false;
    }
    if (isNaN(mobileNumber)) {
      document.getElementById("mobileno").innerHTML =
        " ** user must write digits only not characters";
      return false;
    }
    if (mobileNumber.length != 10) {
      document.getElementById("mobileno").innerHTML =
        " ** Mobile Number must be 10 digits only";
      return false;
    }

    localStorage.setItem("userName", user);
    localStorage.setItem("password", pass);

    
  }