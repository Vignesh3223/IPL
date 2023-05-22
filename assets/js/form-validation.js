/*Form validation and response*/
// function comment() {
//     var name = document.getElementById("name").value;
//     var email = document.getElementById("email").value;
//     var comments = document.getElementById("comments").value;
//     var letters = /^([A-Za-z ]{2,20})+$/;
//     var filter = /^[a-z0-9]+@[a-z]+\.[a-z]{2,4}$/;
//     if (name == "") {
//         alert("Please enter a Name");
//         return false;
//     }
//     else if (!(letters).test(name)) {
//         alert("Name must contain only alphabets");
//         return false;
//     }
//     else if(email == ""){
//         alert("Please enter a valid E-mail");
//         return false;
//     }
//     else if(!(filter).test(email)){
//         alert("E-mail must be in the proper format");
//         return false;
//     }
//     else if(comments == ""){
//         alert("Please enter some comments")
//         return false;
//     }
//     else{
//         alert("THANK YOU FOR YOUR COMMENTS"); 
//         document.getElementById("comment").reset();
//         return false;
//     }
//  }

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
