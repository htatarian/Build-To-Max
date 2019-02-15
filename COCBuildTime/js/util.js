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

    if (heroes !== null) {
        for (var i = 0; i < heroes.length; i++) {
            if (heroes[i].name === heroName) {
                heroLevel = heroes[i].level;
                return heroLevel;
            }
        }
    }

    return 0;
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
            queen.insert(queenChart[i]);
        }
    }
}

function populateSpell() {
    if(spell)
    {
        var spellChart = [
            ["Lightning Spell",0,0],
            ["Lightning Spell",24,1],
            ["Lightning Spell",48,2],
            ["Lightning Spell",72,3],
            ["Lightning Spell",96,6],
            ["Lightning Spell",156,7],
            ["Lightning Spell",336,8],
            ["Healing Spell",0,0],
            ["Healing Spell",24,2],
            ["Healing Spell",48,4],
            ["Healing Spell",72,5],
            ["Healing Spell",120,6],
            ["Healing Spell",168,7],
            ["Healing Spell",240,8],
            ["Rage Spell",0,0],
            ["Rage Spell",48,3],
            ["Rage Spell",72,4],
            ["Rage Spell",120,5],
            ["Rage Spell",168,6],
            ["Jump Spell",0,0],
            ["Jump Spell",120,5],
            ["Jump Spell",168,8],
            ["Freeze Spell",0,0],
            ["Freeze Spell",72,8],
            ["Freeze Spell",108,8],
            ["Freeze Spell",156,8],
            ["Freeze Spell",192,8],
            ["Freeze Spell",216,9],
            ["Freeze Spell",114,10],
            ["Clone Spell",0,0],
            ["Clone Spell",96,8],
            ["Clone Spell",120,8],
            ["Clone Spell",156,9],
            ["Clone Spell",276,9]
        ];

        for(var i = 0; i < spellChart.length; i++)
        {
            spell.insert(spellChart[i]);
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