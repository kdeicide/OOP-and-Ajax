function conversion() {
    let mile = document.getElementById("mile_value").value
    let gallons = document.getElementById("gallon_value").value

    //Changing it float

    let floated_mile = parseFloat(mile);
    let floated_gallons = parseFloat(gallons);
    let mpg = floated_mile/floated_gallons;
    let result = parseInt(mpg);

    //print the final relut

    document.getElementById("the_display").innerHTML = result
}