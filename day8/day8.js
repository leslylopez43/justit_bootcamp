// JavaScript code in day8.js

let timer;

function showSignUpPrompt() {
    alert("Sign up now!");
}

function showPopup() {
    const choice = confirm("Do you want to see the sign-up prompt again?");
    
    if (choice) {
        showSignUpPrompt();
    }
}

// Set an interval to show the confirm dialog every 10 seconds
setInterval(showPopup, 10000);

// Handle the subscribe button click
document.getElementById("subscribeButton").addEventListener("click", function() {
    // If the subscribe button is clicked, clear the timer
    clearTimeout(timer);
    alert("Thank you for subscribing!");
});

// Your other script
function hello() {
    console.log("This is the first hello in the console.");
}

function greet(name, byeText) {
    console.log(`Good Morning, ${name}, ${byeText}`);
}

hello();
setTimeout(hello, 10000);

greet("Fred", "See Ya");
let timeOutID = setTimeout(greet, 5000, "Rob", "Goodbye");
console.log(timeOutID);
clearTimeout(timeOutID);


function updateClock() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    
    const timeString = `${hours}:${minutes}:${seconds}`;
    document.getElementById("clock").textContent = timeString;
}

// Update the clock every second
setInterval(updateClock, 1000);

// Initial update
updateClock();

function feedback(){
    let userResponse = confirm("Would you like to register to our site?");
  
    if (userResponse == false){
      setInterval(popup, 60000);
    }
    else{
      let message = document.querySelector("#popup>p");
      message.innerText = "Thank for registering on our site"
      message.innerHTML +="<button> close </button>"
    }
  }

  function updatingClock() {
    var currentTime = new Date(),
        month = currentTime.getMonth() + 1,
        day = currentTime.getDate(),
        year = currentTime.getFullYear(),
        hours = currentTime.getHours(),
        minutes = currentTime.getMinutes(),
        seconds = currentTime.getSeconds(),
        text = (month + "/" + day + "/" + year + ' ' + hours + ':' + minutes + ':' + seconds);
    // here we get the element with the id of "date" and change the content to the text variable we made above
    document.getElementById('date').innerHTML = text;
  }
  
  // here we run the updatingClock function every 1000ms (1 second)
  setInterval(updatingClock, 1000);

  document.getElementById("dateForm").addEventListener("submit", function (event) {
    event.preventDefault();
    
    const year = parseInt(document.getElementById("year").value);
    const month = parseInt(document.getElementById("month").value);
    const day = parseInt(document.getElementById("day").value);

    if (isValidDate(year, month, day)) {
        const selectedDate = new Date(year, month, day);
        const resultElement = document.getElementById("result");
        resultElement.textContent = `Selected Date: ${selectedDate.toDateString()}`;
    } else {
        alert("Invalid date. Please check your selections.");
    }
});

function isValidDate(year, month, day) {
    const date = new Date(year, month, day);
    return (
        date.getFullYear() === year &&
        date.getMonth() === month &&
        date.getDate() === day
    );
}
