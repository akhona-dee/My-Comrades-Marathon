function become () {
      let name = prompt ("What is your name?");
      let email = prompt ("What is your email address?");
      let raceIdentify = prompt ("What is your favourate marathon so far?");
       if (name + email) {
 alert ("Thank you " + name + "! We'll be in touch by email, in the meantime, enjoy running 🏃🏽‍♀️");
        } else {
        alert('No name & email address, no Comrades Marathon for you 🤷🏼‍♀️')
        }
      }
    let EnterButton = document.querySelector(".EnterButton");
    EnterButton.addEventListener("click", become)
    
function openTab(tabName) {
  var i, x;
  x = document.getElementsByClassName("containerTab");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  document.getElementById(tabName).style.display = "block";
}