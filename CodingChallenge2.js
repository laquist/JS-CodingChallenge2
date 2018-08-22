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
function printWinner() {
    // console.log(
    //     johnAverageScore === mikeAverageScore ? "John and Mike's team both have the same average score with: " + johnAverageScore :
    //     johnAverageScore > mikeAverageScore ? 
    //     "John's team has higher average score with: " + johnAverageScore : 
    //     "Mike's team has higher average score with: " + mikeAverageScore
    // ); 

    //4 

        

        
        // console.log("John and Mike's team both have the same average score with: " + johnAverageScore);    


    if (johnAverageScore > mikeAverageScore) {
        if (johnAverageScore > maryAverageScore) {
            console.log("John's team has higher average score with: " + johnAverageScore);
        }
    }
    else if (mikeAverageScore > johnAverageScore) {
        if (mikeAverageScore > maryAverageScore) {
            console.log("Mike's team has higher average score with: " + mikeAverageScore);
        }
    }
    else if (maryAverageScore > johnAverageScore) {
        if (maryAverageScore > mikeAverageScore) {
            console.log("Mary's team has higher average score with: " + maryAverageScore);
        }
    }
    else if (johnAverageScore === mikeAverageScore && johnAverageScore === maryAverageScore) {
        console.log("all tied");
    }
    else if (johnAverageScore === mikeAverageScore) {

    }
    else if (johnAverageScore === maryAverageScore) {

    }
    else if (mikeAverageScore === maryAverageScore) {

    }

        


            // if (johnAverageScore >= mikeAverageScore && johnAverageScore >= maryAverageScore) {
            //     //John and Mike
            //     if (johnAverageScore === mikeAverageScore) {
            //         //John, Mike and Mary
            //         if (johnAverageScore === maryAverageScore) {
            //             console.log("All tied");
            //         }
            //         else (
            //             console.log("John and Mike are tied")
            //         )
            //     }
            //     //John and Mary
            //     else if (johnAverageScore === maryAverageScore) {
            //         console.log("John and Mary are tied");
            //     }
            //     //John is higher
            //     else {
            //         console.log("John's team has higher average score with: " + johnAverageScore);
            //     }
            // }
            // else if (mikeAverageScore >= johnAverageScore && mikeAverageScore >= maryAverageScore) {
            //     if (mikeAverageScore === ) {

            //     }

            //     // console.log("Mike's team has higher average score with: " + mikeAverageScore);
            // }
            // else {


            //     // console.log("Mary's team has higher average score with: " + maryAverageScore);
            // }

}

printWinner();


//3
johnLatestScores = [112, 112, 112];
printAverageScores();
printWinner();


//4


//5