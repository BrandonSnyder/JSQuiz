Click to start using confirm



5 questions stored in an array of objects
object of questions= [
     {question: 'Which of the following is not apart of the content box model?',
      A:'padding',
      B: 'border',
      C: 'margin',
      D: 'class'}
]

Time interval 
    function setTime() {
  // Sets interval in variable
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = secondsLeft;
    if(secondsLeft === 0) {
      // Stops execution of action at set interval
      clearInterval(timerInterval);
      // Calls function to create and append image
      sendMessage();
    }
  }, 1000);

when storing high scores they will need to be in local storage in arrays/objects. Don't forget strigify() and parse(). 


Event listener....


High Score page and back to start page are done using <a> tags
