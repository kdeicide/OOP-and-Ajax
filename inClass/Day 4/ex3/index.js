function Hotel (name, rooms, booked){
    this.name = name,
    this.rooms = rooms,
    this.booked = booked
    this.availability = function () {
        return this.rooms - this.booked
    }
}



var myH = new Hotel('kk', 17, 3);
var aHotel = new Hotel('Abbas', 23, 2)






function hName() {
$('#hotel_name').text(aHotel.name);
}

function checkaAvailable() {
    $('#av_rooms').text(aHotel.availability());
}

function footerYear () {
    var d = new Date();
    var n = d.getFullYear();
    $('#my_footer').text(n)

}