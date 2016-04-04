$( document ).ready(function() {
    $('#letter-input-button').prop('letter-input', false);
  var wordsArray =["KROMPIR", "TEST", "JABOLKO"]
  var usedLetters = [];
  var word = [];
  var showWord = [];
  var numberOfGuesses = 0;
  var inputtedLetter;
  var counter;
  var potentialWrongGuess
    var livesLeft = 10;
    $("#lives-left").text(livesLeft);

    
    
$("#choose-word").click(function chooseWord() {
    $('#letter-input-button').prop('letter-input', false);
        $("#hangman").text("")
        showWard = [];
        var wordsArrayIndex = Math.floor((Math.random() * wordsArray.length));
        word = wordsArray[wordsArrayIndex];
        word = word.split("");
        
    
        for (var i = 0; i < word.length; i++){
            
            
            if (i == 0){
                showWord.push(word[0]);
            }
            else if (i == word.length-1){
            showWord.push(word[i])
            }
            
            else if (word[0] == word[i]){
             showWord.push(word[i])
            }
            else if (word[word.length-1] == word[i]){
             showWord.push(word[i])
            }
            else
            {
            showWord.push("_");
            
            }
        }

        $("#hangman").text(showWord);
}); 
    
$("#letter-input-button").click(function(){ 
    console.log(word.length);
        inputtedLetter = $("#letter-input").val();
    
        potentialWrongGuess = 0;
    
for (var i = 0; i < word.length; i++ ){
        if (inputtedLetter == word[i])
            {
             showWord.splice(i,1,word[i]);
             counter++;
            }
        else {
            potentialWrongGuess++;
            console.log(potentialWrongGuess + "potential wrong guesses");
            if (potentialWrongGuess == word.length)
            {
                    numberOfGuesses++;
                    livesLeft --;
                    console.log(livesLeft);
                    $("#lives-left").text(livesLeft);
                    usedLetters.push(inputtedLetter);
                if (livesLeft == 0){
                         alert("you failed finding the word");
                        $('#letter-input-button').prop('letter-input', true);
        
        }
            }
            }


    };

    
    
  $("#hangman").text(showWord);
  $("#used-letters").text(usedLetters);
   
}); 
}); 