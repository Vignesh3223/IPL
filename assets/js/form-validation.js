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

/*winners and runners table display*/
function loadTable() {
    const xhttp = new XMLHttpRequest
    xhttp.open("GET", "http://localhost:3000/Winners");
    xhttp.send();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            console.log(this.responseText);
            var trHTML = "";
            const objects = JSON.parse(this.responseText);
            for (let object of objects) {
                trHTML += "<tr>";
                trHTML += "<td>" + object["Year"] + "</td>";
                trHTML += "<td>" + object["Winner"] + "</td>";
                trHTML += "<td>" + object["Won by"] + "</td>";
                trHTML += "<td>" + object["Runner Up"] + "</td>";
                trHTML += "<td>" + object["Venue"] + "</td>";
                trHTML += "</tr>";
            }
            document.getElementById("record1").innerHTML = trHTML;
        }
    }
}
loadTable();

/*winners and captains table display*/
function loadTable2() {
    const xhttp = new XMLHttpRequest
    xhttp.open("GET", "http://localhost:3000/Captains");
    xhttp.send();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            console.log(this.responseText);
            var trHTML = "";
            const objects = JSON.parse(this.responseText);
            for (let object of objects) {
                trHTML += "<tr>";
                trHTML += "<td>" + object["Year"] + "</td>";
                trHTML += "<td>" + object["Winner"] + "</td>";
                trHTML += "<td>" + object["Captain"] + "</td>";
                trHTML += "<td>" + object["Man of the Match"] + "</td>";
                trHTML += "<td>" + object["Player of the Series"] + "</td>";
                trHTML += "</tr>";
            }
            document.getElementById("record2").innerHTML = trHTML;
        }
    }
}
loadTable2();

/*most wins table display*/
function loadTable3() {
    const xhttp = new XMLHttpRequest
    xhttp.open("GET", "http://localhost:3000/Most_Wins");
    xhttp.send();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            console.log(this.responseText);
            var trHTML = "";
            const objects = JSON.parse(this.responseText);
            for (let object of objects) {
                trHTML += "<tr>";
                trHTML += "<td>" + object["Team"] + "</td>";
                trHTML += "<td>" + object["Trophy"] + "</td>";
                trHTML += "<td>" + object["Year"] + "</td>";
                trHTML += "</tr>";
            }
            document.getElementById("record3").innerHTML = trHTML;
        }
    }
}
loadTable3();

/*orange cap winners display*/
function loadTable4() {
    const xhttp = new XMLHttpRequest
    xhttp.open("GET", " http://localhost:3000/Orange_Cap");
    xhttp.send();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            console.log(this.responseText);
            var trHTML = "";
            const objects = JSON.parse(this.responseText);
            for (let object of objects) {
                trHTML += "<tr>";
                trHTML += "<td>" + object["Year"] + "</td>";
                trHTML += "<td>" + object["Winner"] + "</td>";
                trHTML += "<td>" + object["Innings"] + "</td>";
                trHTML += "<td>" + object["Runs"] + "</td>";
                trHTML += "<td>" + object["Highest Score"] + "</td>";
                trHTML += "<td>" + object["Average"] + "</td>";
                trHTML += "<td>" + object["Strike Rate"] + "</td>";
                trHTML += "<td>" + object["50s"] + "</td>";
                trHTML += "<td>" + object["100s"] + "</td>";
                trHTML += "<td>" + object["4s"] + "</td>";
                trHTML += "<td>" + object["6s"] + "</td>";
                trHTML += "</tr>";
            }
            document.getElementById("record4").innerHTML = trHTML;
        }
    }
}
loadTable4();
