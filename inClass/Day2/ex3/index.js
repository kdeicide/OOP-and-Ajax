function conversion() {
    let fahrenheit = document.getElementById("f_value").value


    //Changing it float

    let floated_fahrenheit = parseFloat(fahrenheit);

    let formula = (floated_fahrenheit - 32) * 5 / 9;
    let result = parseInt(formula);

    //print the final result

    document.getElementById("c_value").value = result
}




//°F to °C	Deduct 32, then multiply by 5, then divide by 9
//°C to °F	Multiply by 9, then divide by 5, then add 32