var verify = document.getElementById("to_add_it");

verify.addEventListener("click", function() {
  myfunction(6);
});

function myfunction(e,min) {
  var userName = document.getElementById("user_name").value;
  var character = userName.length;
  if (character <= min) {
    alert("its less");
  } else {
    alert("nice");
  }
}


