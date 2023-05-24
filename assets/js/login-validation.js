$(document).ready(function () {
    $("#login-form").validate({
        rules: {
            name: {
                required: true,
                minlength: 2,
                maxlength: 20,
                pattern: /^[A-Za-z ]+$/
            },
            password: {
                required: true,
                minlength: 8,
                maxlength: 16,
                pattern: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#@$])/
            }
        },
        messages: {
            name: {
                required: "Please enter the Username",
                minlength: "Username must be atleast 2 characters long",
                maxlength: "Username must not exceed 20 characters",
                pattern: "Username must contain only alpabets"
            },
            password: {
                required: "Please enter a valid Password",
                minlength: "Password must be at least 8 characters long",
                maxlength: "Password must not exceed 16 charcters",
                pattern: "Password must follow conditions"
            }
        }
    });
})
$(document).ready(function () {
    $('#signup-form').validate({
        rules: {
            fname: {
                required: true,
                minlength: 2,
                maxlength: 20,
                pattern: /^[A-Za-z ]+$/
            },
            email: {
                required: true,
                email: true,
                pattern: /^[a-z0-9]+@[a-z]+\.[a-z]{2,4}$/
            },
            passwd: {
                required: true,
                minlength: 8,
                maxlength: 16,
                pattern: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#@$])/
            },
            confirmPassword: {
                required: true,
                equalTo: '#passwd'
            },
            phone: {
                required: true,
                minlength: 10,
                pattern: /^\d{10}$/
            }
        },
        messages: {
            fname: {
                required: "Please enter your full name",
                minlength: "Name must be atleast 2 characters long",
                maxlength: "Name must not exceed 20 characters",
                pattern: "Name must contain only alpabets"
            },
            email: {
                required: "Please enter your email",
                email: "Please enter a valid email address",
                pattern: "E-mail address should be in proper format"
            },
            passwd: {
                required: "Please enter a password",
                minlength: "Password must be at least 8 characters long",
                maxlength: "Password must not exceed 16 charcters",
                pattern: "Password must follow conditions"
            },
            confirmPassword: {
                required: "Please confirm your password",
                equalTo: "Passwords do not match"
            },
            phone: {
                required: "Please enter your phone number",
                minlength: "Phone number must be at least 10 characters long",
                pattern: "Phone umber must contain only digits"
            }
        },
    })
})
function validateLogin() {
    const uname = document.getElementById("name").value;
    const password = document.getElementById("password").value;
    const xhttp = new XMLHttpRequest();
    xhttp.open("GET", "http://localhost:3000/Users");
    xhttp.send();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            const users = JSON.parse(this.responseText);
            let validCredentials = false;
            for (const validUser of users) {
                if (validUser['username'] == uname && validUser['password'] == password) {
                    validCredentials = true;
                    break;
                }
            }
            if (validCredentials) {
                Swal.fire({
                    icon: 'success',
                    title: 'Login Successful',
                    text: 'Redirecting to index.html...',
                    showConfirmButton: false,
                    timer: 2000,
                    timerProgressBar: true
                }).then(() => {
                    window.location.replace("index.html");
                });
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Login Failed',
                    text: 'Invalid username or password',
                    confirmButtonText: 'OK'
                });
            }
        }
    };
}

function validateSignUp() {
    const fname = document.getElementById("fname").value;
    const email = document.getElementById("email").value;
    const passwd = document.getElementById("passwd").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    const phone = document.getElementById("phone").value;
    console.log("hi")
    const xhttp = new XMLHttpRequest();
    xhttp.open("POST", "http://localhost:3000/Users");
    xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhttp.send(
        JSON.stringify({
            fname: fname,
            email: email,
            passwdn: passwd,
            confirmPassword: confirmPassword,
            phone: phone,
        })
    );
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            const users = JSON.parse(this.responseText);
            Swal.fire({
                icon: 'success',
                title: 'Login Successful',
                text: 'Redirecting to index.html...',
                showConfirmButton: false,
                timer: 2000,
                timerProgressBar: true
            }).then(() => {
                window.location.replace("index.html");
            });
        }
    };
}