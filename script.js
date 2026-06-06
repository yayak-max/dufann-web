const form = document.getElementById("bookingForm");

if(form){
form.addEventListener("submit", function(e){

e.preventDefault();

alert("Tiket berhasil dipesan!");

});
}