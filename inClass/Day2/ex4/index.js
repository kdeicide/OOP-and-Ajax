function conversion() {
    let grade = [];

    grade[0]= parseFloat(document.getElementById('grade_1').value);
    grade[1]= parseFloat(document.getElementById('grade_2').value);
    grade[2]= parseFloat(document.getElementById('grade_3').value);
    grade[3]= parseFloat(document.getElementById('grade_4').value);

    let sum = grade[0]+grade[1]+grade[2]+grade[3];
    let result = sum/4;

    document.getElementById("the_display").innerHTML =  result;

}




