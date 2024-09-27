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
    const Toast = Swal.mixin({
        toast: true,
        position: "center",
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
        }
    });
    Toast.fire({
        icon: "success",
        title: "Sign up successfully"
    });

    setTimeout(function () {
        window.location.href = "login.html"
    }, 2000)


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
        if (user.email == loginEmail.value) {

            if (user.password == loginPass.value) {
                const Toast = Swal.mixin({
                    toast: true,
                    position: "center",
                    showConfirmButton: false,
                    timer: 1000,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                      toast.onmouseenter = Swal.stopTimer;
                      toast.onmouseleave = Swal.resumeTimer;
                    }
                  });
                  Toast.fire({
                    icon: "success",
                    title: "Signed in successfully"
                  });


                  setInterval(() => {
                    window.location.href="dashboard.html"
                  }, 1000);
                
                isRegistered = true;
                break;

            }
            else {
                Swal.fire({
                    icon: "error",
                    title: "Incorrect Password",
                    text: "Please double-check your password and try again.",
                  });
                isRegistered = true;
                break;
            }

        }
        else {
            if (loginPass.value == user.password) {
                Swal.fire({
                    icon: "error",
                    title: "Invalid Email",
                    text: "It looks like you’ve entered the wrong email. Please try again.",
                  });
                    isRegistered = true;
                break;
            }

        }

    }
    if (!isRegistered) {
        Swal.fire({
            position: "center",
            icon: "error",
            title: "Account Not Found",
            text: "It seems like you haven't registered yet. Please sign up first.",
            showConfirmButton: false,
            timer: 2000
          });

    }
    loginEmail.value = "";
    loginPass.value = ""
})