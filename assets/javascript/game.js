var dictionary = ['thailand', 'france', 'mexico', 'kenya', 'colombia'];
var wordsList, input, placeHolder, letterUsed = []; 
var totalGuesses = 10;

    function startGame(){
        placeHolder = "";
        totalGuesses = 10; 
        document.getElementById("totalGuesses").innerHTML= totalGuesses;

        wordsList = dictionary[Math.floor(Math.random() * dictionary.length)];
        console.log(wordsList);

        var buttonText = document.getElementById("button").innerHTML = "Guess";

        for(var i = 0; i < wordsList.length; i++){
            placeHolder += "_";

        }

        document.getElementById("placeHolder").innerHTML = placeHolder;
        document.getElementById("gamestatus").innerHTML = "Pack your bags and let's go!";

    }

        function guess(){
            var correctGuess = false;
            var ip = document.getElementById("letterGuess");
            input = ip.value;

            for(var i = 0; i < wordsList.length; i++)
            {
                if(input == wordsList.substring(i, i + 1)){
                    correctGuess = true;
                    placeHolder = placeHolder.substring(0, i) + input + placeHolder.substring(i + 1, placeHolder.length + 1);
                    document.getElementById("placeHolder").innerHTML = placeHolder;
                    console.log(placeHolder);
                }
            }

            letterUsed.push(input);
            document.getElementById("letter").innerHTML = letterUsed;



                if(!correctGuess){
                    totalGuesses--;
                    document.getElementById("totalGuesses").innerHTML= totalGuesses;
                    console.log(totalGuesses);
                }

                if(placeHolder == wordsList){
                   alert("You WIN!");
                   startGame();
                    document.getElementById("button").onclick = guess;
                }

                if(totalGuesses == 0){
                   alert("You LOSE!");
                   startGame();
                    document.getElementById("button").onclick = guess;
                }

         }



startGame();
document.getElementById("button").onclick = guess;
