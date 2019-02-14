function calculateKingTime(info) {
    var options = [getHeroLevel(info,"Barbarian King"),info.townHallLevel];

    king.getTimeLeft(options);
}

function calculateQueenTime(info) {
    var options = [getHeroLevel(info,"Archer Queen"),info.townHallLevel];
    queen.getTimeLeft(options);
}

function getHeroLevel(info,heroName) {
    var heroes = info.heroes;
    var heroLevel = 0;

    if (heroes !== null)
    {
        for (var i = 0; i < heroes.length; i++) {
            if (heroes[i].name === heroName) {
                heroLevel = heroes[i].level;
            }
        }
    }

    return heroLevel;
}

function populateKing() {
    if(king)
    {
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

        for(var i = 0; i < kingChart.length; i++)
        {
            king.insert(kingChart[i])
        }
    }
}

function populateQueen() {
    if(queen)
    {
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

        for(var i = 0; i < queenChart.length; i++)
        {
            queen.insert(queenChart[i])
        }
    }
}

function getHeroTimeRemaining(rs) {
    var leveln = rs.rows.length;
    var totalTime = 0;
    for (var i = 0; i < leveln; i++) {

        var r = rs.rows.item(i);
        totalTime = totalTime + r.timeRequired;

        var days = Math.floor(totalTime / 24);
        var hours = totalTime % 24;
    }
    return days + " Days " + hours + " Hours";
}