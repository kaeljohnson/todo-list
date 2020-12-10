function buttonClick() {
    let createdUsername = localStorage.getItem('createdUsername');
    let createdPassword = localStorage.getItem('createdPassword');
    let username = document.getElementById("text1").value;
    let password = document.getElementById("text2").value;
    
    if (username != createdUsername && password == createdPassword) {
        document.getElementById("text1").style.border = "solid 3px red";
        document.getElementById("label1").style.visibility = "visible";
        return false;
    }
    else if (password != createdPassword && username == createdUsername) {
        document.getElementById("text2").style.border = "solid 3px red";
        document.getElementById("label2").style.visibility = "visible";
        return false;
    }
    else if (username != createdUsername && password != createdPassword) {
        document.getElementById("text1").style.border = "solid 3px red";
        document.getElementById("label1").style.visibility = "visible";
        document.getElementById("text2").style.border = "solid 3px red";
        document.getElementById("label2").style.visibility = "visible";
        return false;
    }
    else {
        location.href = "userProfile.html";
        return true;
    }   
}