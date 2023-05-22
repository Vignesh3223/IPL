/*Form validation and response*/
$(document).ready(function () {
    $("#comment").validate({
        rules: {
            name: {
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
            comments: {
                required: true
            }
        },
        messages: {
            name: {
                required: "Please enter a Name",
                minlength: "Name must be at least 2 characters long",
                maxlength: "Name must not exceed 20 characters",
                pattern: " Username must contain only alpabets"
            },
            email: {
                required: "Please enter a valid Email",
                email: "Please enter a valid Email",
                pattern: "E-mail address should be in proper format"
            },
            comments: {
                required: "Please enter some comments"
            }
        },
        submitHandler: function (form) {
            alert("THANK YOU FOR YOUR COMMENTS");
            form.reset();
            return false;
        }
    });
});
