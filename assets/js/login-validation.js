/*Login form Validation*/
function validateLogin() {
    Swal.fire({
        title: "LOGIN",
        html:
            '<input id="id" type="hidden">' +
            '<input id="name" class="swal2-input" placeholder="Enter Username" required>' +
            '<input id="password" class="swal2-input" placeholder="Enter Password" required>',
        focusConfirm: false,
        showCancelButton: true,
        cancelButtonColor: '#d33',
        preConfirm: () => {
            const uname = document.getElementById("name").value;
            const password = document.getElementById("password").value;
            const namePattern = /^[A-Za-z ]{2,}$/;
            const passwordPattern = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#@$%&*_]).{8,16}$/;
            if (!uname || !password) {
                return Swal.showValidationMessage("Please fill in all the fields");
            }
            else if (!namePattern.test(uname)) {
                return Swal.showValidationMessage("Name must exceed 2 characters and contain only alphabets");
            }
            else if (!passwordPattern.test(password)) {
                return Swal.showValidationMessage("Password must contain 8-16 characters with at least one uppercase letter, one lowercase letter, one digit, and one symbol");
            }
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
                            text: 'User not found, Create an Account',
                            confirmButtonText: 'OK'
                        });
                    }
                }
            };
        }
    });
}

/*SignUp form Validation*/
function validateSignUp() {
    Swal.fire({
        title: "CREATE ACCOUNT",
        html:
            '<input id="id" type="hidden">' +
            '<input id="fname" class="swal2-input" placeholder="Enter First Name" required>' +
            '<input id="email" class="swal2-input" placeholder="Enter Email" required>' +
            '<input id="passwd" class="swal2-input" placeholder="Enter Password" required>' +
            '<input id="confirmPassword" class="swal2-input" placeholder="Re-enter Password" required>' +
            '<input id="phone" class="swal2-input" placeholder="Enter Phone number" required>',
        focusConfirm: false,
        showCancelButton: true,
        cancelButtonColor: '#d33',
        preConfirm: () => {
            const fname = document.getElementById("fname").value;
            const email = document.getElementById("email").value;
            const passwd = document.getElementById("passwd").value;
            const confirmPassword = document.getElementById("confirmPassword").value;
            const phone = document.getElementById("phone").value;
            const namePattern = /^[A-Za-z ]{2,}$/;
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            const passwordPattern = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#@$%&*_]).{8,16}$/;
            const phonePattern = /^\+?\d+$/;
            if (!fname || !email || !passwd || !confirmPassword || !phone) {
                return Swal.showValidationMessage("Please fill in all the fields");
            } else if (!namePattern.test(fname)) {
                return Swal.showValidationMessage("Please enter a valid first name with at least 2 characters and only alphabets");
            } else if (!emailPattern.test(email)) {
                return Swal.showValidationMessage("Please enter a valid email address");
            } else if (!passwordPattern.test(passwd)) {
                return Swal.showValidationMessage("Please enter a valid password with 8-16 characters, including at least one uppercase letter, one lowercase letter, one digit, and one symbol");
            } else if (passwd !== confirmPassword) {
                return Swal.showValidationMessage("Passwords do not match");
            } else if (!phonePattern.test(phone)) {
                return Swal.showValidationMessage("Please enter a valid phone number");
            }
            const xhttp = new XMLHttpRequest();
            xhttp.open("POST", "http://localhost:3000/Users");
            xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
            xhttp.send(
                JSON.stringify({
                    username: fname,
                    email: email,
                    password: passwd,
                    confirmPassword: confirmPassword,
                    phone: phone,
                })
            );
            Swal.fire({
                icon: 'success',
                title: 'Sign Up Successful',
                text: 'Account Created Successfully, You can Login Now!',
            });
        }
    })
}
