function validateForm(){
    document.getElementById('usernameError').innerText= "";
    document.getElementById('emailError').innerText= "";
    document.getElementById('passwordError').innerText= "";
    document.getElementById('confirmpasswordError').innerText= "";

    var username = document.getElementById("username").value;
var email = document.getElementById("email").value;
var password = document.getElementById("password").value;
var confirmpassword = document.getElementById("confirmpassword").value;


if(username.length < 3){
    document.getElementById("usernameError").innerText ="Username must be at least 3 characters";
    return false;
}
if(password.length < 6){
    document.getElementById("passworedError").innerText ="Password must be at least 6 characters";
    return false;
}
if(password !== confirmpassword){
    document.getElementById("confirmpasswordError").innerText ="Psswords does not match";
    return false
}
return true;


}
