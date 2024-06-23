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
            window.alert("Your luck score is 7/7.. Are you sure you're not GOD");
        }else if(attempts == 2){
            window.alert("Your luck score is 6/7.. With your luck, you can find a four-leaf clover in a field of daisies");
        }else if(attempts == 3){
            window.alert("Your luck score is 5/7.. Your are lucky enough to find a parking spot right in front of the entrance.");
        }else if(attempts == 4){
            window.alert("Your luck score is 4/7.. You have lucky enough to find a penny on the sidewalk when you need a bit of change");
        }else if(attempts == 5){
            window.alert("Your luck score is 3/7.. Your score is above 85% of people.. So many unfortunates right?");
        }else if(attempts == 6){
            window.alert("Your luck score is 2/7.. Using maths to get your luck number?");
        }else if(attempts == 7){
            window.alert("Your luck score is 1/7.. You are one of those who do not believe in luck but in maths");
        }else{
            window.alert("You are running out of luck. Try maths for better outcome.. Checkout the readme text");
        }
        running = false;
    }
}
}