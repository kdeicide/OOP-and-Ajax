function conversion() {
    let g1 = document.getElementById("grade_1").value;
    let success = "Congrats! You guessed right!!!";
    let lower = "Guess a higher number...";
    let higher = "Guess a lower number...";
    let magic_number = 77;

    //Convert to integer
    g1 = parseFloat(g1)

    //condition


    if (g1 > magic_number && g1 < 100) {
        document.getElementById("the_display").innerHTML =  higher;
    }

    if (g1 < magic_number) {
        document.getElementById("the_display").innerHTML =  lower;
    }

    if (g1 > 100) {
        document.getElementById("the_display").innerHTML =  "Between 0 - 100 you dummy!";
    }

    if (g1 === magic_number) {
        document.getElementById("the_display").innerHTML =  success;
        document.getElementById("the_display").style.backgroundColor = "red";
    }















}




