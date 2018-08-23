let johnLatestScores = [89, 120, 103];
let mikeLatestScores = [116, 94, 123];
let maryLatestScores = [97, 134, 105];

function calcAverageScore (scoreArray) {
    let total = 0;

    for (let i = 0; i < scoreArray.length; i++) {
        total += scoreArray[i];
    }

    return total / 3;
};

//1
let johnAverageScore;
let mikeAverageScore;
let maryAverageScore;

function printAverageScores () {
    johnAverageScore = calcAverageScore(johnLatestScores);
    mikeAverageScore = calcAverageScore(mikeLatestScores);
    maryAverageScore = calcAverageScore(maryLatestScores);
    
    console.log("Average score for John's team: " + johnAverageScore);
    console.log("Average score for Mike's team: " + mikeAverageScore);
    console.log("Average score for Mary's team: " + maryAverageScore);
};

printAverageScores();


//2
function printWinner () {
    // console.log(
    //     johnAverageScore === mikeAverageScore ? "John and Mike's team both have the same average score with: " + johnAverageScore :
    //     johnAverageScore > mikeAverageScore ? 
    //     "John's team has higher average score with: " + johnAverageScore : 
    //     "Mike's team has higher average score with: " + mikeAverageScore
    // ); 
    

    //4 
    if (johnAverageScore > mikeAverageScore && johnAverageScore > maryAverageScore) {
        console.log("John's team has higher average score with: " + johnAverageScore);
    }
    else if (mikeAverageScore > johnAverageScore && mikeAverageScore > maryAverageScore) {
        console.log("Mike's team has higher average score with: " + mikeAverageScore);
    }
    else if (maryAverageScore > johnAverageScore && maryAverageScore > mikeAverageScore) {
        console.log("Mary's team has higher average score with: " + maryAverageScore);
    }
    else if (johnAverageScore === mikeAverageScore && johnAverageScore === maryAverageScore) {
        console.log("All teams are tied for the highest average score: " + johnAverageScore);
    }
    else if (johnAverageScore === mikeAverageScore) {
        console.log("John and Mike's team are tied for the highest average score: " + johnAverageScore);
    }
    else if (johnAverageScore === maryAverageScore) {
        console.log("John and Mary's team are tied for the highest average score: " + johnAverageScore);
    }
    else if (mikeAverageScore === maryAverageScore) {
        console.log("Mike and Mary's team are tied for the highest average score: " + johnAverageScore);
    }
    else {
        console.log("Something went wrong..");
    }
}


printWinner();


//3
johnLatestScores = [100, 100, 100];
printAverageScores();
printWinner();


//4


//5
maryLatestScores = [99, 99, 99];
printAverageScores();
printWinner();