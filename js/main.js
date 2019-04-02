function validate() {
    // alert("Hello Emelyne");
    var ready = document.getElementById("ready1").checked;
    var q1 = document.getElementsByName('q1');
    var q2 = document.getElementsByName('q2');
    var q3 = document.getElementsByName('q3');
    var q4 = document.getElementsByName('q4');
    var q5 = document.getElementsByName('q5');
    var q6 = document.getElementsByName('q6');
    var opt1, opt2, opt3, opt4, opt5, opt6;
    var right = 0;

    for (var i = 0; i < q1.length; i++) {
        if (q1[i].checked) {
            opt1 = q1[i].value;
        }
        if (opt1 == "opt1") {
            right = right + 1;
        }
    }
    for (var i = 0; i < q2.length; i++) {
        if (q2[i].checked) {
            opt2 = q2[i].value;
        }
        if (opt2 == "opt3") {
            right = right + 1;
        }
    }
    for (var i = 0; i < q3.length; i++) {
        if (q3[i].checked) {
            opt3 = q3[i].value;
        }
        if (opt3 == "opt2") {
            right = right + 1;
        }
    }
    for (var i = 0; i < q4.length; i++) {
        if (q4[i].checked) {
            opt4 = q4[i].value;
        }
        if (opt4 == "opt2") {
            right = right + 1;
        }
    }
    for (var i = 0; i < q5.length; i++) {
        if (q5[i].checked) {
            opt5 = q5[i].value;
        }
        if (opt5 == "opt2") {
            right = right + 1;
        }
    }
    for (var i = 0; i < q6.length; i++) {
        if (q6[i].checked) {
            opt6 = q6[i].value;
        }
        if (opt6 == "opt1") {
            right = right + 1;
        }
    }

    alert(right);

}
var checked = false;
var score = 0;
var wrong = 0;
var win = "q1opt2";
function check(id) {
    var clicked = document.getElementById(id);
    var right = document.getElementById(win);
    if (!checked) {
        if (win == id) {
            document.getElementById("feedback").innerHTML = "Congratulations, You've got it right!";
            score++;
            checked = true;
        } else {
            document.getElementById("feedback").innerHTML = "No, maybe next time. Right answer is highlighted in green";
            clicked.style.color = "red";
            wrong++;
            checked = true;
        }
        right.style.color = "#3D9970";
    } else {
        document.getElementById("feedback").innerHTML = "You've already responded to this question!";
    }
}
var checked2 = false;
var win2 = "q2opt1";
function check2(id) {
    var clicked = document.getElementById(id);
    var right = document.getElementById(win2);
    if (!checked2) {
        if (win2 == id) {
            document.getElementById("feedback2").innerHTML = "Congratulations, You've got it right!";
            score++;
            checked2 = true;
        } else {
            document.getElementById("feedback2").innerHTML = "No, maybe next time. Right answer is highlighted in green";
            clicked.style.color = "red";
            wrong++;
            checked2 = true;
        }
        right.style.color = "#3D9970";
    } else {
        document.getElementById("feedback2").innerHTML = "You've already responded to this question!";
    }
}
var checked3 = false;
var win3 = "q3opt2";
function check3(id) {
    var clicked = document.getElementById(id);
    var right = document.getElementById(win3);
    if (!checked3) {
        if (win3 == id) {
            document.getElementById("feedback3").innerHTML = "Congratulations, You've got it right!";
            score++;
            checked3 = true;
        } else {
            document.getElementById("feedback3").innerHTML = "No, maybe next time. Right answer is highlighted in green";
            clicked.style.color = "red";
            wrong++;
            checked3 = true;
        }
        right.style.color = "#3D9970";
    } else {
        document.getElementById("feedback3").innerHTML = "You've already responded to this question!";
    }
}

var checked4 = false;
var win4 = "q4opt2";
function check4(id) {
    var clicked = document.getElementById(id);
    var right = document.getElementById(win4);
    if (!checked4) {
        if (win4 == id) {
            document.getElementById("feedback4").innerHTML = "Congratulations, You've got it right!";
            score++;
            checked4 = true;
        } else {
            document.getElementById("feedback4").innerHTML = "No, maybe next time. Right answer is highlighted in green";
            clicked.style.color = "red";
            wrong++;
            checked4 = true;
        }
        right.style.color = "#3D9970";
    } else {
        document.getElementById("feedback4").innerHTML = "You've already responded to this question!";
    }
}

var checked5 = false;
var win5 = "q5opt3";
function check5(id) {
    var clicked = document.getElementById(id);
    var right = document.getElementById(win5);
    if (!checked5) {
        if (win5 == id) {
            document.getElementById("feedback5").innerHTML = "Congratulations, You've got it right!";
            score++;
            checked5 = true;
        } else {
            document.getElementById("feedback5").innerHTML = "No, maybe next time. Right answer is highlighted in green";
            clicked.style.color = "red";
            wrong++;
            checked5 = true;
        }
        right.style.color = "#3D9970";
    } else {
        document.getElementById("feedback5").innerHTML = "You've already responded to this question!";
    }
}
var checked6 = false;
var win6 = "q6opt4";
function check6(id) {
    var clicked = document.getElementById(id);
    var right = document.getElementById(win6);
    if (!checked6) {
        if (win6 == id) {
            document.getElementById("feedback6").innerHTML = "Congratulations, You've got it right!";
            score++;
            checked6 = true;
        } else {
            document.getElementById("feedback6").innerHTML = "No, maybe next time. Right answer is highlighted in green";
            clicked.style.color = "red";
            wrong++;
            checked6 = true;
        }
        document.getElementById("final-score").value = "Your final score is " + score;
        document.getElementById("final-message").style.visibility = "visible";
        right.style.color = "#3D9970";
    } else {
        document.getElementById("feedback6").innerHTML = "You've already responded to this question!";
    }
}

var quiz3score =0;

function checkTrue(){
    alert("Right answer ");
}
function wrong(){
    alert("Wrong answer ");
}
function imgCheck(n){
    if(n=="b"){
        alert("Right answer ")
    }
    alert("Wrong answer ");
   
}