function conversion() {
    let g1 = document.getElementById("grade_1").value;
    let g2 = document.getElementById("grade_2").value;
    let g3 = document.getElementById("grade_3").value;
    let g4 = document.getElementById("grade_4").value;

    //change it to float



    let Phrase = "You are " + g1 + " " + g2 + " " + g3 + " and you like " + g4;



    document.getElementById("the_display").innerHTML =  Phrase;

}




