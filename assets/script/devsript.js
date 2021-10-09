
    var saveScore = function () {
      //ax' da' playa' ta' enta' da' sco'
      var promptSave = window.prompt("Your answered __ questions corretly in __ seconds. Please record you score here and initials to compare your score against others who have taken this quiz.");
    
      // validate save score
      if (promptSave === "" || promptSave === null) {
          window.alert("I really appreciate you! Your doing great! But you left something blank. Could you please try again?");
          // return to top of fucntion cycle 
          return saveScore();
      }
  
      //convert promptSave to all blah blah...
      promptSave = promptSave.toLowerCase();
    
      if (promptSave === "enter SCORE here somehow...") {
          // ax' playa' ta' enta' da' INITIALS
          var initials = window.confirm("ENTER INITIALS HERE");
    
          // if what ever i want this to show me my ranking of score compared to others in a pop up box
          if (initials) {
              window.alert("SHOW SCORES HERE");
    
              // COULD THIS BE USED TO SUBTRACT THE ORIGINAL TIME VALUE OF 100 FROM THE TIME LEFT TO GIVE THE PLAYER A 'TIME SCORE'
              //
              //
              //
              //TIMELEFT = Math.max(0, 100 - TIMELEFT);
              //
              //
              //
              // stop while() loop using break; and enter next fight
              // return true if player wants to leave
              return true;
            }
            
              return false;
          }
          };