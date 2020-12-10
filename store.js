
var createdUsername;
var createdPassword;
var phoneNumber;
var email;
var phoneNumberRegX;
var emailRegX;
let count = 0;
phoneNumberRegX = /\d{10}/;
emailRegX = /^([a-z A-Z 0-9\.-]+)@([a-z A-Z 0-9 -]+).([a-z]+).([a-z]+)$/;
//Store username and password function
function storeInfo() { 
    createdUsername = document.getElementById("createUname").value;
    createdPassword = document.getElementById("createPword").value;
    phoneNumber = document.getElementById("createNum").value;
    email = document.getElementById("createEmail").value;

    let createdNumber = 
    "("+phoneNumber[0]+phoneNumber[1]+
    phoneNumber[2]+")"+"-"+phoneNumber[3]+
    phoneNumber[4]+phoneNumber[5]+"-"+
    phoneNumber[6]+phoneNumber[7]+
    phoneNumber[8]+phoneNumber[9];

    let createdEmail = email;
    //Control statements to make sure username and password are greater than
    //6 characters
    if (createdUsername.length < 6) {
        createdUsername = null;
        document.getElementById("label1").style.color = "red";
        document.getElementById("label1").style.visibility = "visible";
        document.getElementById("label1").innerHTML = "Username too short";
        return false;
    }
    else if (createdPassword.length < 6) {
        createdPassword = null;
        document.getElementById("label1").style.color = "red";
        document.getElementById("label1").style.visibility = "visible";
        document.getElementById("label1").innerHTML = "Password too short";
        return false;
    }
    else if (createdUsername.length >= 6 && createdPassword.length >= 6) {
        localStorage.setItem('createdPassword', createdPassword);
        localStorage.setItem('createdUsername', createdUsername);
        count+=2;
    }
    //Store phone number and email
    //Control statements to make sure phone number and email are valid
    if (phoneNumberRegX.test(phoneNumber)) {
        localStorage.setItem('createdNumber', createdNumber);
        count++;
    }
    else {
        document.getElementById("label1").style.color = "red";
        document.getElementById("label1").style.visibility = "visible";
        document.getElementById("label1").innerHTML = "Phone number incorrect";
        return false;
    }
    if (emailRegX.test(email)) {
        localStorage.setItem('createdEmail', createdEmail);
        count++;
    }
    else {
        document.getElementById("label1").style.visibility = "visible";
        document.getElementById("label1").style.color = "red";
        document.getElementById("label1").innerHTML = "Invalid email";
    }
    if (count == 4) {
        document.getElementById("label1").style.visibility = "visible";
        document.getElementById("label1").style.color = "lawngreen";
        document.getElementById("label1").innerHTML = "Information Stored";
    }
    count = 0;
}


