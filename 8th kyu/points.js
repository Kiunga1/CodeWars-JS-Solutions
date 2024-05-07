// Our football team has finished the championship.

// Our team's match results are recorded in a collection of strings. Each match is represented by a string in the format "x:y", where x is our team's score and y is our opponents score.

// For example: ["3:1", "2:2", "0:1", ...]

// Points are awarded for each match as follows:

// if x > y: 3 points (win)
// if x < y: 0 points (loss)
// if x = y: 1 point (tie)
// We need to write a function that takes this collection and returns the number of points our team (x) got in the championship by the rules given above.

// Notes:

// our team always plays 10 matches in the championship
// 0 <= x <= 4
// 0 <= y <= 4

function points(games) {
    let totalPoints = 0;

    // Loop through each match
    for (let i = 0; i < games.length; i++) {
        // Split each match into our team's score (x) and opponent's score (y)
        const [x, y] = games[i].split(':').map(Number);

        // Determine the points earned based on the match result
        if (x > y) {
            // Win: 3 points
            totalPoints += 3;
        } else if (x === y) {
            // Tie: 1 point
            totalPoints += 1;
        }
        // Loss: 0 points (no need to handle explicitly because it contributes no points)
    }

    return totalPoints;
}

