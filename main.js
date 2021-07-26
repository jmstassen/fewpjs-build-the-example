// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
let elementHearts = document.querySelectorAll(".like-glyph");

function clickCallback(e) {
  let heart = e.target;
  mimicServerCall()
    .then(function(){
      // STEP 2: Uncomment the next 3 lines.
      // We'll use Pillar 1 (DOM Manipulation) to update the screen and
      // mimic Pillar 3 (Server Communication) to only update the screen if the
      // sending of information to the server succeeds.
      if (heart.innerText === EMPTY_HEART) {
        heart.innerText = FULL_HEART;
        heart.classList.add("activated-heart")
      } else {
        heart.innerText = EMPTY_HEART  
        heart.classList.remove("activated-heart")
      }
    })
    .catch(function(error) {
      let modal = document.querySelector("#modal");
      modal.classList.remove("hidden")
      modal.innerHTML = error;
      window.setTimeout(clearError, 3000)
    });
}

function clearError() {
  modal.classList.add("hidden")
}

for (let glyph of elementHearts) {
  glyph.addEventListener("click", clickCallback);
}


//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
