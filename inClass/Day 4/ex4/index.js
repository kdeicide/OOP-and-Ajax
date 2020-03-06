function changeColor() {
/*  var e1 = document.querySelectorAll('li.cold')
     if (e1.length > 0){
        for (var i=0; i< e1.length; i++){
        e1[i].className = 'hot';
        }
    } */
    
    //var c = document.getElementsByTagName('ul').firstChild.className ='hot'
   
    /*  for (var i = 0; i < c.length; i++) {
        c[i].className = 'hot';
    } */
  
    $( "li :first-child" )
    .removeClass( "cold" ).addClass('hot')

   
}




