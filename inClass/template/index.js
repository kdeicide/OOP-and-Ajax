var now = 2020

var man = {
    name: 'koorosh',
    lastName: 'goodarzi',
    yBorn: 1986,
    age: function () {
        return this.yBorn - now;
    },
    interest: ['dance', 'boxing', 'programming'],
}


//document.getElementById("my_name").innerHTML = man.name;
$('#my_name').html(man.name)


//document.getElementById('my_last_name').innerText = man.lastName;
var myInt = document.getElementById('my_int');
var myAge = document.getElementById('my_age');

