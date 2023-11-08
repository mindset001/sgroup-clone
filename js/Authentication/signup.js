var input = document.querySelector("#phone");
window.intlTelInput(input, {
  separateDialCode: true
});

$(function(){
  $('.selectpicker').selectpicker();
});


function showlogin() {
 document.getElementById("login").style.display= 'block'
 document.getElementById("signup").style.display= 'none'
}
function showsignup() {
  document.getElementById("login").style.display= 'none'
  document.getElementById("signup").style.display= 'block'
 }