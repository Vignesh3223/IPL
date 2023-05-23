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
                trHTML += "<td>" + object["id"] + "</td>";
                trHTML += "<td>" + object["Year"] + "</td>";
                trHTML += "<td>" + object["Winner"] + "</td>";
                trHTML += "<td>" + object["Won_by"] + "</td>";
                trHTML += "<td>" + object["Runner_Up"] + "</td>";
                trHTML += "<td>" + object["Venue"] + "</td>";
                trHTML += "</tr>";
            }
            document.getElementById("record1").innerHTML = trHTML;
        }
    }
}
loadTable();

/*new record creation in winners and runners table*/
function CreateWinnerBox() {
    Swal.fire({
        title: "ADD WINNER & RUNNER",
        html:
            '<input id="id" type="hidden">' +
            '<input id="Year" class="swal2-input" placeholder="Year" required>' +
            '<input id="Winner" class="swal2-input" placeholder="Winner (Team Name)" required>' +
            '<input id="Won_by" class="swal2-input" placeholder="Won by" required>' +
            '<input id="Runner_Up" class="swal2-input" placeholder="Runner Up (Team Name)" required>' +
            '<input id="Venue" class="swal2-input" placeholder="Venue" required>',
        focusConfirm: false,
        showCancelButton: true,
        cancelButtonColor: '#d33',
        preConfirm: () => {
            const Year = document.getElementById("Year").value;
            const Winner = document.getElementById("Winner").value;
            const Won_by = document.getElementById("Won_by").value;
            const Runner_Up = document.getElementById("Runner_Up").value;
            const Venue = document.getElementById("Venue").value;
            if (!Year || !Winner || !Won_by || !Runner_Up || !Venue) {
                Swal.showValidationMessage("Please fill in all the fields");
            } else {
                addWinner();
            }
        }
    });
}

function addWinner() {
    const Year = document.getElementById("Year").value;
    const Winner = document.getElementById("Winner").value;
    const Won_by = document.getElementById("Won_by").value;
    const Runner_Up = document.getElementById("Runner_Up").value;
    const Venue = document.getElementById("Venue").value;
    const xhttp = new XMLHttpRequest();
    xhttp.open("POST", "http://localhost:3000/Winners");
    xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhttp.send(
        JSON.stringify({
            Year: Year,
            Winner: Winner,
            Won_by: Won_by,
            Runner_Up: Runner_Up,
            Venue: Venue,
        })
    );
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            const objects = JSON.parse(this.responseText);
            Swal.fire({
                icon: 'success',
                title: 'Record added',
                text: objects["message"]
            });
            loadTable();
        }
    };
}


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
                trHTML += "<td>" + object["id"] + "</td>";
                trHTML += "<td>" + object["Year"] + "</td>";
                trHTML += "<td>" + object["Winner"] + "</td>";
                trHTML += "<td>" + object["Captain"] + "</td>";
                trHTML += "<td>" + object["Man_of_the_Match"] + "</td>";
                trHTML += "<td>" + object["Player_of_the_Series"] + "</td>";
                trHTML += "</tr>";
            }
            document.getElementById("record2").innerHTML = trHTML;
        }
    }
}
loadTable2();

function CreatePlayersBox() {
    Swal.fire({
        title: "ADD CAPTAIN, MAN OF THE MATCH & PLAYER OF THE SERIES",
        html:
            '<input id="id" type="hidden">' +
            '<input id="Year" class="swal2-input" placeholder="Year" required>' +
            '<input id="Winner" class="swal2-input" placeholder="Winner" required>' +
            '<input id="Captain" class="swal2-input" placeholder="Captain" required>' +
            '<input id="Man_of_the_Match" class="swal2-input" placeholder="Man of the Match" required>' +
            '<input id="Player_of_the_Series" class="swal2-input" placeholder="Player of the Series" required>',
        focusConfirm: false,
        showCancelButton: true,
        cancelButtonColor: '#d33',
        preConfirm: () => {
            const Year = document.getElementById("Year").value;
            const Winner = document.getElementById("Winner").value;
            const Captain = document.getElementById("Captain").value;
            const Man_of_the_Match = document.getElementById("Man_of_the_Match").value;
            const Player_of_the_Series = document.getElementById("Player_of_the_Series").value;
            if (!Year || !Winner || !Captain || !Man_of_the_Match || !Player_of_the_Series) {
                Swal.showValidationMessage("Please fill in all the fields");
            } else {
                addPlayers();
            }
        }
    });
}

function addPlayers() {
    const Year = document.getElementById("Year").value;
    const Winner = document.getElementById("Winner").value;
    const Captain = document.getElementById("Captain").value;
    const Man_of_the_Match = document.getElementById("Man_of_the_Match").value;
    const Player_of_the_Series = document.getElementById("Player_of_the_Series").value;
    const xhttp = new XMLHttpRequest();
    xhttp.open("POST", "http://localhost:3000/Captains");
    xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhttp.send(
        JSON.stringify({
            Year: Year,
            Winner: Winner,
            Captain: Captain,
            Man_of_the_Match: Man_of_the_Match,
            Player_of_the_Series: Player_of_the_Series,
        })
    );
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            const objects = JSON.parse(this.responseText);
            Swal.fire({
                icon: 'success',
                title: 'Record added',
                text: objects["message"]
            });
            loadTable2();
        }
    };
}

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
                trHTML += "<td>" + object["id"] + "</td>";
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


function CreateTeamBox() {
    Swal.fire({
        title: "ADD WINNING TEAM STATS",
        html:
            '<input id="id" type="hidden">' +
            '<input id="Team" class="swal2-input" placeholder="Team Name" required>' +
            '<input id="Trophy" class="swal2-input" placeholder="Trophy Count" required>' +
            '<input id="Year" class="swal2-input" placeholder="Year" required>',
        focusConfirm: false,
        showCancelButton: true,
        cancelButtonColor: '#d33',
        preConfirm: () => {
            const Team = document.getElementById("Team").value;
            const Trophy = document.getElementById("Trophy").value;
            const Year = document.getElementById("Year").value;
            if (!Team || !Trophy || !Year) {
                Swal.showValidationMessage("Please fill in all the fields");
            } else {
                addTeamstats();
            }
        }
    });
}

/*orange cap winners display*/
function loadTable4() {
    const xhttp = new XMLHttpRequest
    xhttp.open("GET", "http://localhost:3000/Orange_Cap");
    xhttp.send();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            console.log(this.responseText);
            var trHTML = "";
            const objects = JSON.parse(this.responseText);
            for (let object of objects) {
                trHTML += "<tr>";
                trHTML += "<td>" + object["id"] + "</td>";
                trHTML += "<td>" + object["Year"] + "</td>";
                trHTML += "<td>" + object["Winner"] + "</td>";
                trHTML += "<td>" + object["Innings"] + "</td>";
                trHTML += "<td>" + object["Runs"] + "</td>";
                trHTML += "<td>" + object["Highest_Score"] + "</td>";
                trHTML += "<td>" + object["Average"] + "</td>";
                trHTML += "<td>" + object["Strike_Rate"] + "</td>";
                trHTML += "<td>" + object["fifties"] + "</td>";
                trHTML += "<td>" + object["hundreds"] + "</td>";
                trHTML += "<td>" + object["fours"] + "</td>";
                trHTML += "<td>" + object["sixes"] + "</td>";
                trHTML += "</tr>";
            }
            document.getElementById("record4").innerHTML = trHTML;
        }
    }
}
loadTable4();

function CreateBatsmanBox() {
    Swal.fire({
        title: "ADD ORANGE CAP WINNER",
        html:
            '<input id="id" type="hidden">' +
            '<input id="Year" class="swal2-input" placeholder="Year" required>' +
            '<input id="Winner" class="swal2-input" placeholder="Winner (Player Name)" required>' +
            '<input id="Innings" class="swal2-input" placeholder="Matches Played" required>' +
            '<input id="Runs" class="swal2-input" placeholder="Total Runs Scored" required>' +
            '<input id="Highest_Score" class="swal2-input" placeholder="Highest Score" required>' +
            '<input id="Average" class="swal2-input" placeholder="Average" required>' +
            '<input id="Strike_Rate" class="swal2-input" placeholder="Strike Rate" required>' +
            '<input id="fifties" class="swal2-input" placeholder="Total number of 50s" required>' +
            '<input id="hundreds" class="swal2-input" placeholder="Total number of 100s" required>' +
            '<input id="fours" class="swal2-input" placeholder="Total number of Fours" required>' +
            '<input id="sixes" class="swal2-input" placeholder="Total number of Sixes" required>',
        focusConfirm: false,
        showCancelButton: true,
        cancelButtonColor: '#d33',
        preConfirm: () => {
            const Year = document.getElementById("Year").value;
            const Winner = document.getElementById("Winner").value;
            const Innings = document.getElementById("Innings").value;
            const Runs = document.getElementById("Runs").value;
            const Highest_Score = document.getElementById("Highest_Score").value;
            const Average = document.getElementById("Average").value;
            const Strike_Rate = document.getElementById("Strike_Rate").value;
            const fifties = document.getElementById("fifties").value;
            const hundreds = document.getElementById("hundreds").value;
            const fours = document.getElementById("fours").value;
            const sixes = document.getElementById("sixes").value;
            if (!Year || !Winner || !Innings || !Runs || !Highest_Score || !Average || !Strike_Rate || !fifties || !hundreds || !fours || !sixes) {
                Swal.showValidationMessage("Please fill in all the fields");
            } else {
                addBatsman();
            }
        }
    });
}
function addBatsman() {
    const Year = document.getElementById("Year").value;
    const Winner = document.getElementById("Winner").value;
    const Innings = document.getElementById("Innings").value;
    const Runs = document.getElementById("Runs").value;
    const Highest_Score = document.getElementById("Highest_Score").value;
    const Average = document.getElementById("Average").value;
    const Strike_Rate = document.getElementById("Strike_Rate").value;
    const fifties = document.getElementById("fifties").value;
    const hundreds = document.getElementById("hundreds").value;
    const fours = document.getElementById("fours").value;
    const sixes = document.getElementById("sixes").value;
    const xhttp = new XMLHttpRequest();
    xhttp.open("POST", "http://localhost:3000/Orange_Cap");
    xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhttp.send(
        JSON.stringify({
            Year: Year,
            Winner: Winner,
            Innings: Innings,
            Runs: Runs,
            Highest_Score: Highest_Score,
            Average: Average,
            Strike_Rate: Strike_Rate,
            fifties: fifties,
            hundreds: hundreds,
            fours: fours,
            sixes: sixes,
        })
    );
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            const objects = JSON.parse(this.responseText);
            Swal.fire({
                icon: 'success',
                title: 'Record added',
                text: objects["message"]
            });
            loadTable4();
        }
    };
}

/*orange cap winners display*/
function loadTable5() {
    const xhttp = new XMLHttpRequest
    xhttp.open("GET", "http://localhost:3000/Purple_Cap");
    xhttp.send();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            console.log(this.responseText);
            var trHTML = "";
            const objects = JSON.parse(this.responseText);
            for (let object of objects) {
                trHTML += "<tr>";
                trHTML += "<td>" + object["id"] + "</td>";
                trHTML += "<td>" + object["Year"] + "</td>";
                trHTML += "<td>" + object["Winner"] + "</td>";
                trHTML += "<td>" + object["Team"] + "</td>";
                trHTML += "<td>" + object["Matches"] + "</td>";
                trHTML += "<td>" + object["Wickets"] + "</td>";
                trHTML += "</tr>";
            }
            document.getElementById("record5").innerHTML = trHTML;
        }
    }
}
loadTable5();

function CreateBowlerBox() {
    Swal.fire({
        title: "ADD PURPLE CAP WINNER",
        html:
            '<input id="id" type="hidden">' +
            '<input id="Year" class="swal2-input" placeholder="Year" required>' +
            '<input id="Winner" class="swal2-input" placeholder="Winner (Player Name)" required>' +
            '<input id="Team" class="swal2-input" placeholder="Team" required>' +
            '<input id="Matches" class="swal2-input" placeholder="Matches Played" required>' +
            '<input id="Wickets" class="swal2-input" placeholder="Wickets" required>',
        focusConfirm: false,
        showCancelButton: true,
        cancelButtonColor: '#d33',
        preConfirm: () => {
            const Year = document.getElementById("Year").value;
            const Winner = document.getElementById("Winner").value;
            const Team = document.getElementById("Team").value;
            const Matches = document.getElementById("Matches").value;
            const Wickets = document.getElementById("Wickets").value;
            if (!Year || !Winner || !Team || !Matches || !Wickets) {
                Swal.showValidationMessage("Please fill in all the fields");
            } else {
                addPlayers();
            }
        }
    });
}

function addPlayers() {
    const Year = document.getElementById("Year").value;
    const Winner = document.getElementById("Winner").value;
    const Team = document.getElementById("Team").value;
    const Matches = document.getElementById("Matches").value;
    const Wickets = document.getElementById("Wickets").value;
    const xhttp = new XMLHttpRequest();
    xhttp.open("POST", "http://localhost:3000/Purple_Cap");
    xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhttp.send(
        JSON.stringify({
            Year: Year,
            Winner: Winner,
            Team: Team,
            Matches: Matches,
            Wickets: Wickets,
        })
    );
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            const objects = JSON.parse(this.responseText);
            Swal.fire({
                icon: 'success',
                title: 'Record added',
                text: objects["message"]
            });
            loadTable5();
        }
    };
}
