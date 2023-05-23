$(document).ready(function () {
    $('form').validate({
        rules: {
            'username': {
                required: true,
                minlength: 2,
                maxlength: 15,
                pattern: /^[A-Za-z ]+$/
            },
            'password': {
                required: true,
                minlength: 8,
                maxlength: 16,
                pattern: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#@$])/
            }
        },
        messages: {
            'username': {
                required: "<br> Please enter a Username.",
                minlength: "<br> Username is too small",
                maxlength: "<br> Username is too large",
                pattern: "<br> Username must contain only alpabets"
            },
            'password': {
                required: "<br> Please enter a valid Password",
                minlength: "<br> Password is too small",
                maxlength: "<br> Password is too large",
                pattern: "<br> Password must follow conditions"
            }
        }
    });
});
