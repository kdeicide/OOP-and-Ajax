
var hotel = {
    name: 'koorosh',
    rooms: 25,
    availableRooms : 20,
    reserevedRooms: 5,
    availability: function () {
        return this.availableRooms - this.reserevedRooms;
    },
}


function checkaAvailable() {
$('#av_rooms').text(hotel.availability());
}

function hName() {
$('#hotel_name').text(hotel.name);
}

function cancel() {

}
function reserve() {
    
}