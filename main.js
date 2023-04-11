// take button length
//  if click the buttons

let numberOfDrumButtons = document.querySelectorAll("button").length;

for (let i = 0; i < numberOfDrumButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    // if button pressed, checking innerHTML
    var buttonInnerHTML = this.innerHTML; // take all button innerHTML
    // console.log(buttonInnerHTML); // w,a,s,d,j,k,l
    // call makeSound function
    // play sound
    makeSound(buttonInnerHTML);

    buttonAnimation(buttonInnerHTML);
  });
}

// if press the keyboard

document.addEventListener("keypress", (e) => {
  // check Keyboardevent
  // console.log(e);
  // get key from Keyboardevent
  // console.log(e.key);
  makeSound(e.key); // w,a,s,d,j,k,l

  buttonAnimation(e.key);
});

// sound function
function makeSound(key) {
  switch (key) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;
    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;
    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;
    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;
    case "j":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;
    case "k":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;
    case "l":
      var kickBass = new Audio("sounds/kick-bass.mp3");
      kickBass.play();
      break;
    default:
      console.log(buttonInnerHTML);
      break;
  }
}

function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);

  activeButton.classList.add("pressed");
  // console.log(activeButton);

  setTimeout(() => {
    activeButton.classList.remove("pressed");
  }, 100);
}
