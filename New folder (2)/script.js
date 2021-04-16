let user = "Quez";

let userquestion = "I shall answer your question....";
console.log("user  " + userquestion);

let randomNumber = Math.floor(Math.random() * 8);

let eightBall = " ";

switch (randomNumber) {
    case 0:
        eightBall = "Yes, that will totally happen";
        break;
    case 1:
        eightBall = "The universe says yes";
        break;
    case 2:
        eightBall = "EHHHHHHHHHH ask again";
        break;
    case 3:
        eightBall = "What did you say";
        break;
    case 4:
        eightBall = "Prob wont happen, bruh";
        break;
    case 5:
        eightBall = "My dad says no";
        break;
    case 6:
        eightBall = "YES";
        break;
    case 7:
        eightBall = "NO";
        break;
}

console.log(eightBall);