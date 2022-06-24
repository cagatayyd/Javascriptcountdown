var mins = "00";
var seconds = "00";
var secondInput = document.getElementById("inputx")
var startingSecond
var remainingTime = 0;
document.getElementById("minutes").innerHTML = mins
document.getElementById("seconds").innerHTML = seconds
var appendMins = document.getElementById("minutes")
var appendSecs = document.getElementById("seconds")
var buttonStart = document.getElementById("button-start")
var buttonStop = document.getElementById("button-stop")
var buttonReset = document.getElementById("button-reset")
var interval;

secondInput.addEventListener("keypress", function(event) {
    console.log(event)
    if (event.key === "Enter") {

      buttonStart.click();
    }
  });

function startTimer () {

    if (minutes.innerHTML === "0-1"){
      clearInterval(interval);
      alert ("Yeniden sayı giriniz")
      mins = "00";
      seconds = "00";
      appendSecs.innerHTML = "00";
      appendMins.innerHTML = "00";
      return
    }
    seconds--

    if (seconds<0) {
        mins--
        seconds += 60 
    }

    appendSecs.innerHTML = seconds;
    appendMins.innerHTML = mins;

    if (seconds<10) {

    appendSecs.innerHTML = "0" + seconds;
    }
    if (mins<10) {

    appendMins.innerHTML = "0" + mins;
    }
}
buttonStart.onclick = function () {
    if (remainingTime === 0){
        startingSecond = secondInput.value
        mins = Math.floor(startingSecond / 60) ;
        seconds = startingSecond % 60 ;
    }
    else {
      mins = Math.floor(remainingTime / 60) ;
      seconds = remainingTime % 60 ;
    }
    appendSecs.innerHTML = seconds;
    appendMins.innerHTML = mins;

    if (seconds == 00 && mins == 00){
      alert("Sayı giriniz")
      mins = "00";
      seconds = "00";
      appendSecs.innerHTML = "00";
      appendMins.innerHTML = "00";
      return
    }

    if (seconds<10) {

    appendSecs.innerHTML = "0" + seconds;
    }
    if (mins<10) {

    appendMins.innerHTML = "0" + mins;
    }
    interval = setInterval(startTimer, 1000);
};
buttonStop.onclick = function () {
    if (buttonStop.innerHTML === "Stop") {
        buttonStop.innerHTML = "Continue"
        interval = clearInterval(interval)
    }else {
        buttonStop.innerHTML = "Stop"
        remainingTime = (mins*60) + seconds
        buttonStart.click()
    }
    if (buttonStop.innerHTML ==="Continue"){
      if (buttonStart.style.display === "none") {
      } else {
        buttonStart.style.display = "none";
      }
    }
    if (buttonStop.innerHTML ==="Stop"){
      if (buttonStart.style.display === "") {
      } else {
        buttonStart.style.display = "";
      }
    }
};
buttonReset.onclick = function() {
  if (buttonStop.innerHTML === "Continue") {
    buttonStop.innerHTML = "Stop"
  }
    if (buttonStart.style.display === "") {
    } else {
    buttonStart.style.display = "";
    }
    clearInterval(interval);
    mins = "00";
    seconds = "00";
    appendMins.innerHTML = mins;
    appendSecs.innerHTML = seconds;
    alert("Sayı giriniz")
    return
}