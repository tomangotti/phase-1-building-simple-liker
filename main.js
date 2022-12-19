// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const errorMessage = document.querySelector('#modal');
errorMessage.className = 'hidden';

const articalHearts = document.querySelectorAll(".like-glyph");
function callBack(e){
  const heartStatus = e.target;
  mimicServerCall()
  .then(() => {
    if( heartStatus.textContent === EMPTY_HEART){
      heartStatus.classList.toggle('activated-heart');
      heartStatus.textContent = FULL_HEART;
    } else {
      heartStatus.classList.toggle('activated-heart');
      heartStatus.textContent = EMPTY_HEART;
    }
    
  })
  .catch((errorStatus) => {
    errorMessage.className = '';
    const message = document.querySelector('#modal-message');
    message.textContent = errorStatus;
    setTimeout(() => {errorMessage.className = 'hidden';}, 3000)
  })
};

for (const glyph of articalHearts) {
  glyph.addEventListener('click', callBack)
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
