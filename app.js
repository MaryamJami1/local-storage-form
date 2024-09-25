let rgstrBtn = document.getElementById("register");
let userArray = [];

rgstrBtn && rgstrBtn.addEventListener("click", function () {
    let userName = document.getElementById("accountName")
    let userEmail = document.getElementById("accountEmail")
    let userPass = document.getElementById("accountPassword")

    let userObj = {
        name: userName.value,
        email: userEmail.value,
        password: userPass.value,
    }

    userArray.push(userObj);

    userName.value = ""
    userEmail.value = ""
    userPass.value = ""


    console.log(userArray);

    window.location.href = "login.html"
    localStorage.setItem("users", JSON.stringify(userArray))

});


let loginBtn = document.getElementById("login");


loginBtn && loginBtn.addEventListener("click", function () {
    let loginEmail = document.getElementById("loginEmail");
    let loginPass = document.getElementById("loginPass");
    console.log(loginEmail.value, loginPass.value);

    var users = JSON.parse(localStorage.getItem("users"));


    let isRegistered = false;

    for (var user of users) {
        if (user.email == loginEmail.value && user.password == user.password) {
            console.log("login succesfully");
            isRegistered=true;
            break;
        } 
        else if(user.email == loginEmail && user.password != loginPass  ){
            console.log("Email is correct but Password is not matched", "email");
            isRegistered=true;
            break;
        }
        else if(user.password == user.password && user.email != loginEmail){
            console.log("Password is correct but Email is not matched" , "password");

            isRegistered=true;
            break;
        }


    }
    if(!isRegistered){
        console.log("You are not registered");
        
    }


    loginEmail.value = "";
    loginPass.value = ""

})


