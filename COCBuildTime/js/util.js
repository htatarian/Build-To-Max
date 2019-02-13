function calculateKingTime(info) {
    var townHallLevel = info.townHallLevel;
    var kingLevel = getKingLevel(info);
    var kingChart = [
        [7, 0],
        [7, 12],
        [7, 12],
        [7, 24],
        [7, 24],
        [8, 24],
        [8, 36],
        [8, 36],
        [8, 36],
        [8, 48],
        [9, 48],
        [9, 48],
        [9, 60],
        [9, 60],
        [9, 60],
        [9, 72],
        [9, 72],
        [9, 72],
        [9, 84],
        [9, 84],
        [9, 84],
        [9, 96],
        [9, 96],
        [9, 96],
        [9, 108],
        [9, 108],
        [9, 108],
        [9, 120],
        [9, 120],
        [9, 120],
        [10, 132],
        [10, 132],
        [10, 132],
        [10, 144],
        [10, 144],
        [10, 144],
        [10, 156],
        [10, 156],
        [10, 156],
        [10, 168],
        [11, 168],
        [11, 168],
        [11, 168],
        [11, 168],
        [11, 168],
        [11, 168],
        [11, 168],
        [11, 168],
        [11, 168],
        [11, 168],
        [12, 168],
        [12, 168],
        [12, 168],
        [12, 168],
        [12, 168],
        [12, 168],
        [12, 168],
        [12, 168],
        [12, 168],
        [12, 168],
    ];

    var totalTime = 0;

    for(var i = kingLevel; i < kingChart.length && townHallLevel >= kingChart[i][0]; i++)
    {
        totalTime = totalTime + kingChart[i][1];
    }

    var days = Math.floor(totalTime / 24);
    var hours = totalTime % 24;
    var result = days + " Days " + hours + " Hours"

    return result;
}

function calculateQueenTime(info) {
    var townHallLevel = info.townHallLevel;
    var queenLevel = getQueenLevel(info);
    var queenChart = [
        [9, 0],
        [9, 12],
        [9, 12],
        [9, 24],
        [9, 24],
        [9, 24],
        [9, 36],
        [9, 36],
        [9, 36],
        [9, 48],
        [9, 48],
        [9, 48],
        [9, 60],
        [9, 60],
        [9, 60],
        [9, 72],
        [9, 72],
        [9, 72],
        [9, 84],
        [9, 84],
        [9, 84],
        [9, 96],
        [9, 96],
        [9, 96],
        [9, 108],
        [9, 108],
        [9, 108],
        [9, 120],
        [9, 120],
        [9, 120],
        [10, 132],
        [10, 132],
        [10, 132],
        [10, 144],
        [10, 144],
        [10, 144],
        [10, 156],
        [10, 156],
        [10, 156],
        [10, 168],
        [11, 168],
        [11, 168],
        [11, 168],
        [11, 168],
        [11, 168],
        [11, 168],
        [11, 168],
        [11, 168],
        [11, 168],
        [11, 168],
        [12, 168],
        [12, 168],
        [12, 168],
        [12, 168],
        [12, 168],
        [12, 168],
        [12, 168],
        [12, 168],
        [12, 168],
        [12, 168],
    ];

    var totalTime = 0;

    for(var i = queenLevel; i < queenChart.length && townHallLevel >= queenChart[i][0]; i++)
    {
        totalTime = totalTime + queenChart[i][1];
    }

    var days = Math.floor(totalTime / 24);
    var hours = totalTime % 24;
    var result = days + " Days " + hours + " Hours"

    return result;
}

function getKingLevel(info) {
    var heroes = info.heroes;
    var kingLevel = 0;

    if (heroes !== null)
    {
        for (var i = 0; i < heroes.length; i++) {
            if (heroes[i].name === "Barbarian King") {
                kingLevel = heroes[i].level;
            }
        }
    }

    return kingLevel;
}

function getQueenLevel(info) {
    var heroes = info.heroes;
    var queenLevel = 0;

    if (heroes !== null)
    {
        for (var i = 0; i < heroes.length; i++) {
            if (heroes[i].name === "Archer Queen") {
                queenLevel = heroes[i].level;
            }
        }
    }

    return queenLevel;
}