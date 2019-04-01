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
    var right=0;

    for (var i = 0; i < q1.length; i++) {
        if (q1[i].checked) {
            opt1 = q1[i].value;
        }
        if (opt1=="opt1"){
            right = right+1;
        }
    }
    for (var i = 0; i < q2.length; i++) {
        if (q2[i].checked) {
            opt2 = q2[i].value;
        }
        if (opt2=="opt3"){
            right = right+1;
        }
    }
    for (var i = 0; i < q3.length; i++) {
        if (q3[i].checked) {
            opt3 = q3[i].value;
        }
        if (opt3=="opt2"){
            right = right+1;
        }
    }
    for (var i = 0; i < q4.length; i++) {
        if (q4[i].checked) {
            opt4 = q4[i].value;
        }
        if (opt4=="opt2"){
            right = right+1;
        }
    }
    for (var i = 0; i < q5.length; i++) {
        if (q5[i].checked) {
            opt5 = q5[i].value;
        }
        if (opt5=="opt2"){
            right = right+1;
        }
    }
    for (var i = 0; i < q6.length; i++) {
        if (q6[i].checked) {
            opt6 = q6[i].value;
        }
        if (opt6=="opt1"){
            right = right+1;
        }
    }

    alert(right);

}
