var usernamereg="";
var passwordreg="";
function matchPassword(txt)
{
    
}
function passwordValidation(txt) {
    var decimal = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{6,12}$/;
    if (txt.value.match(decimal)) {
        return true;
    }
    else {
        alert("Please insert valid password");
        return false;
    }
}
function registerStore()
{
    usernamereg = document.registration.username.value;
    passwordreg = document.registration.password.value;

}
function authentication()
{
    var usernamel = document.login.userName.value;
    var passwordl = document.login.password.value;
    alert(usernamel+" "+passwordl);

}