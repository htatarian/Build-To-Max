function calculateKingTime(info) {
    var options = [getHeroLevel(info,"Barbarian King"),info.townHallLevel];
    king.getTimeLeft(options);
}

function calculateQueenTime(info) {
    var options = [getHeroLevel(info,"Archer Queen"),info.townHallLevel];
    queen.getTimeLeft(options);
}

function calculateSpellTime(info) {

    let spellNames = getSpellNames(info);
    let spellLevels = getSpellLevels(info);
    let spellTimeTxt = $("#txtSpellTime");

    let spellTimePromise = new Promise((resolve) => {

        for(let i = 0; i < spellNames.length; i++) {
            spell.getSpecifiedSpellTime([spellNames[i], info.townHallLevel + 2, spellLevels[i]]);
        }

        setTimeout(function () {
            resolve();
        },1000);
    });

    spellTimePromise.then(function () {
        let toHours = hoursToDaysHours(Number(spellTimeTxt.val()));
        spellTimeTxt.val(toHours);
    });
}

function getSpecifiedSpellTimeCallback(transaction, resultSet) {
    let txtSpellTime = $("#txtSpellTime");
    if(resultSet.rows.length > 0)
    {
        txtSpellTime.val(Number(txtSpellTime.val()) + getSpellTimeRemaining(resultSet));
    }
}

function getSpellNames(info) {
    var spells = info.spells;
    var spellNames = [];

    for(var i = 0; i < spells.length; i++){
        spellNames[i] = spells[i].name;
    }

    return spellNames;
}

function getSpellLevels(info) {
    var spells = info.spells;
    var spellLevels = [];

    for(var i = 0; i < spells.length; i++){
        spellLevels[i] = spells[i].level;
    }

    return spellLevels;
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
            ["Lightning Spell",1,0,0],
            ["Lightning Spell",2,24,1],
            ["Lightning Spell",3,48,2],
            ["Lightning Spell",4,72,3],
            ["Lightning Spell",5,96,6],
            ["Lightning Spell",6,156,7],
            ["Lightning Spell",7,336,8],
            ["Healing Spell",1,0,0],
            ["Healing Spell",2,24,2],
            ["Healing Spell",3,48,4],
            ["Healing Spell",4,72,5],
            ["Healing Spell",5,120,6],
            ["Healing Spell",6,168,7],
            ["Healing Spell",7,240,8],
            ["Rage Spell",1,0,0],
            ["Rage Spell",2,48,3],
            ["Rage Spell",3,72,4],
            ["Rage Spell",4,120,5],
            ["Rage Spell",5,168,6],
            ["Jump Spell",1,0,0],
            ["Jump Spell",2,120,5],
            ["Jump Spell",3,168,8],
            ["Freeze Spell",1,0,0],
            ["Freeze Spell",2,72,8],
            ["Freeze Spell",3,108,8],
            ["Freeze Spell",4,156,8],
            ["Freeze Spell",5,192,8],
            ["Freeze Spell",6,216,9],
            ["Freeze Spell",7,276,10],
            ["Clone Spell",1,0,0],
            ["Clone Spell",2,96,8],
            ["Clone Spell",3,120,8],
            ["Clone Spell",4,156,9],
            ["Clone Spell",5,276,9],
            ["Poison Spell",1,0,0],
            ["Poison Spell",2,60,6],
            ["Poison Spell",3,96,7],
            ["Poison Spell",4,156,8],
            ["Poison Spell",5,228,9],
            ["Earthquake Spell",1,0,0],
            ["Earthquake Spell",2,96,6],
            ["Earthquake Spell",3,120,7],
            ["Earthquake Spell",4,228,8],
            ["Haste Spell",1,0,0],
            ["Haste Spell",2,120,7],
            ["Haste Spell",3,156,8],
            ["Haste Spell",4,216,8],
            ["Skeleton Spell",1,0,0],
            ["Skeleton Spell",2,120,8],
            ["Skeleton Spell",3,156,8],
            ["Skeleton Spell",4,192,9],
            ["Skeleton Spell",5,216,10],
            ["Bat Spell",1,0,0],
            ["Bat Spell",2,120,8],
            ["Bat Spell",3,156,8],
            ["Bat Spell",4,192,9],
            ["Bat Spell",5,216,10]
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
    }
    return hoursToDaysHours(totalTime);
}

function getSpellTimeRemaining(rs) {
    let rows = rs.rows.length;
    let totalTime = 0;

    for (let i = 0; i < rows; i++)
    {
        let r = rs.rows.item(i);
        totalTime = totalTime + r.timeRequired;
    }

    return totalTime;
}

function hoursToDaysHours(totalTime) {
    var days = Math.floor(totalTime / 24);
    var hours = totalTime % 24;
    return days + " Days " + hours + " Hours";
}
