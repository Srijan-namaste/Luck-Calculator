const minNum = 1;
const maxNum = 100;
const answer = Math.floor(Math.random() *(maxNum - minNum + 1)) + minNum;

let attempts = 0;
let guess;
let running = true;

while(running){

    guess = window.prompt(`Enter number between ${minNum} to ${maxNum}`);
    guess = Number(guess);
    
if(isNaN(guess)){
    window.alert("Enter a valid number");
}else if(guess < minNum || guess > maxNum){
    window.alert("Enter a valid number");
}else{
    attempts++;
    if(guess > answer){
        window.alert("TOO HIGH! TRY AGAIN");
    }else if(guess < answer){
        window.alert("TOO LOW! TRY AGAIN");
    }else{
        window.alert(`CORRECT! The answer was ${answer}. It took you ${attempts} attempts`);
        if(attempts == 1){
            window.alert("Your luck score is 10/10.. Are you sure you're not GOD");
        }else if(attempts == 2){
            window.alert("Your luck score is 9/10.. With your luck, you can find a four-leaf clover in a field of daisies");
        }else if(attempts == 3){
            window.alert("Your luck score is 8/10.. Your are lucky enough to find a parking spot right in front of the entrance.");
        }else if(attempts == 4){
            window.alert("Your luck score is 7/10.. You have lucky enough to find a penny on the sidewalk when you need a bit of change");
        }else if(attempts == 5){
            window.alert("Your luck score is 6/10.. You are lucky enough to catch green lights on every intersection");
        }else if(attempts == 6){
            window.alert("Your luck score is 5/10.. Your score is above 85% of people.. So many unfortunates.. right?");
        }else if(attempts == 7){
            window.alert("Your luck score is 4/10.. You are one of those who do not believe in luck but in maths");
        }else if(attempts == 8){
            window.alert("Your luck score is 3/10.. Math can only take you so far");
        }else if(attempts == 9){
            window.alert("Your luck score is 2/10.. Pray harder.. getting low on luck coins");
        }else if(attempts == 10){
            window.alert("Your luck score is 1/10.. You might need some 🍀");
        }else{
            window.alert("You are running out of luck. Try maths for better outcome.. Checkout the readme text");
        }
        running = false;
    }
}
}
