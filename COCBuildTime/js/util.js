// Heroes calculations

function calculateKingTime(info) {
    let options = [getHeroLevel(info,"Barbarian King"),info.townHallLevel];
    king.getTimeLeft(options);
}

function calculateQueenTime(info) {
    let options = [getHeroLevel(info,"Archer Queen"),info.townHallLevel];
    queen.getTimeLeft(options);
}

function getHeroLevel(info,heroName) {
    let heroes = info.heroes;

    let heroLevel = 0;

    if (heroes !== null) {
        for (let i = 0; i < heroes.length; i++) {
            if (heroes[i].name === heroName) {
                heroLevel = heroes[i].level;
                return heroLevel;
            }
        }
    }

    return 0;
}

// Spells calculations

function calculateSpellTime(info) {

    function getSpellNames(info) {
        let spells = info.spells;
        let spellNames = [];

        for(let i = 0; i < spells.length; i++){
            spellNames[i] = spells[i].name;
        }

        return spellNames;
    }

    function getSpellLevels(info) {
        let spells = info.spells;
        let spellLevels = [];

        for(let i = 0; i < spells.length; i++){
            spellLevels[i] = spells[i].level;
        }

        return spellLevels;
    }

    let spellNames = getSpellNames(info);
    let spellLevels = getSpellLevels(info);
    let spellTimeTxt = $("#txtSpellTime");

    spellTimeTxt.val("0");


    let spellTimePromise = new Promise((resolve) => {

        for(let i = 0; i < spellNames.length; i++) {
            spell.getTime([spellNames[i], info.townHallLevel + 2, spellLevels[i]]);
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

function calculateTroopsTime(info) {

    function getTroopNames(info) {
        let troops = info.troops;
        let troopNames = [];

        for(let i = 0; i < troops.length; i++){
            troopNames[i] = troops[i].name;
        }

        return troopNames;
    }

    function getTroopLevels(info) {
        let troops = info.troops;
        let troopLevels = [];

        for(let i = 0; i < troops.length; i++){
            troopLevels[i] = troops[i].level;
        }

        return troopLevels;
    }

    let troopNames = getTroopNames(info);
    let troopLevels = getTroopLevels(info);
    let troopTimeTxt = $("#txtTroopTime");

    troopTimeTxt.val("0");


    let troopTimePromise = new Promise((resolve) => {

        for(let i = 0; i < troopNames.length; i++) {
            troop.getTime([troopNames[i], info.townHallLevel + 2, troopLevels[i]]);
        }

        setTimeout(function () {
            resolve();
        },1000);
    });

    troopTimePromise.then(function () {
        let toHours = hoursToDaysHours(Number(troopTimeTxt.val()));
        troopTimeTxt.val(toHours);
    });
}

function getSpecifiedSpellTimeCallback(transaction, resultSet) {
    let txtSpellTime = $("#txtSpellTime");
    if(resultSet.rows.length > 0)
    {
        txtSpellTime.val(Number(txtSpellTime.val()) + resultSet.rows[0].total);
    }
}

function getSpecifiedTroopTimeCallback(transaction, resultSet) {
    let txtTroopTime = $("#txtTroopTime");
    if(resultSet.rows.length > 0)
    {
        txtTroopTime.val(Number(txtTroopTime.val()) + resultSet.rows[0].total);
    }
}

// Covert hours the days and hours string

function hoursToDaysHours(time) {
    let days = Math.floor(time / 24);
    let hours = time % 24;
    return days + " Days " + hours + " Hours";
}

// Populate the database

function populateKing() {
    if(king)
    {
        let kingChart = [
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

        for(let i = 0; i < kingChart.length; i++)
        {
            king.insert(kingChart[i])
        }
    }
}

function populateQueen() {
    if(queen)
    {
        let queenChart = [
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

        for(let i = 0; i < queenChart.length; i++)
        {
            queen.insert(queenChart[i]);
        }
    }
}

function populateSpell() {
    if(spell)
    {
        let spellChart = [
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

        for(let i = 0; i < spellChart.length; i++)
        {
            spell.insert(spellChart[i]);
        }
    }
}

function populateTroop() {

    if (troop) {
        let troopChart = [
            ["Barbarian", 1, 0, 0],
            ["Barbarian", 2, 6, 1],
            ["Barbarian", 3, 24, 3],
            ["Barbarian", 4, 48, 5],
            ["Barbarian", 5, 84, 6],
            ["Barbarian", 6, 108, 7],
            ["Barbarian", 7, 180, 8],
            ["Barbarian", 8, 240, 9],
            ["Archer", 1, 0, 0],
            ["Archer", 2, 12, 1],
            ["Archer", 3, 24, 3],
            ["Archer", 4, 48, 5],
            ["Archer", 5, 84, 6],
            ["Archer", 6, 108, 7],
            ["Archer", 7, 180, 8],
            ["Archer", 8, 240, 9],
            ["Giant", 1, 0, 0],
            ["Giant", 2, 12, 2],
            ["Giant", 3, 36, 4],
            ["Giant", 4, 48, 5],
            ["Giant", 5, 84, 6],
            ["Giant", 6, 156, 7],
            ["Giant", 7, 192, 8],
            ["Giant", 8, 276, 9],
            ["Giant", 9, 336, 10],
            ["Goblin", 1, 0, 0],
            ["Goblin", 2, 12, 1],
            ["Goblin", 3, 36, 3],
            ["Goblin", 4, 48, 5],
            ["Goblin", 5, 84, 6],
            ["Goblin", 6, 156, 7],
            ["Goblin", 7, 240, 8],
            ["Balloon", 1, 0, 0],
            ["Balloon", 1, 12, 2],
            ["Balloon", 1, 36, 4],
            ["Balloon", 1, 48, 5],
            ["Balloon", 1, 84, 6],
            ["Balloon", 1, 156, 7],
            ["Balloon", 1, 276, 9],
            ["Balloon", 1, 336, 10],
            ["Wizard", 1, 0, 0],
            ["Wizard", 2, 12, 3],
            ["Wizard", 3, 36, 4],
            ["Wizard", 4, 48, 5],
            ["Wizard", 5, 84, 6],
            ["Wizard", 6, 144, 7],
            ["Wizard", 7, 192, 8],
            ["Wizard", 8, 276, 9],
            ["Wizard", 9, 336, 10],
            ["Healer", 1, 0, 0],
            ["Healer", 2, 48, 5],
            ["Healer", 3, 84, 6],
            ["Healer", 4, 144, 7],
            ["Healer", 5, 336, 8],
            ["Healer", 5, 336, 8],
            ["Dragon", 1, 0, 0],
            ["Dragon", 2, 108, 5],
            ["Dragon", 3, 144, 6],
            ["Dragon", 4, 156, 7],
            ["Dragon", 5, 192, 8],
            ["Dragon", 6, 276, 9],
            ["Dragon", 7, 336, 10],
            ["P.E.K.K.A", 1, 0, 0],
            ["P.E.K.K.A", 2, 108, 6],
            ["P.E.K.K.A", 3, 132, 6],
            ["P.E.K.K.A", 4, 144, 7],
            ["P.E.K.K.A", 5, 180, 8],
            ["P.E.K.K.A", 6, 204, 8],
            ["P.E.K.K.A", 7, 276, 9],
            ["P.E.K.K.A", 8, 336, 10],
            ["Baby Dragon", 1, 0, 0],
            ["Baby Dragon", 2, 132, 7],
            ["Baby Dragon", 3, 156, 8],
            ["Baby Dragon", 4, 192, 8],
            ["Baby Dragon", 5, 276, 9],
            ["Baby Dragon", 6, 336, 10],
            ["Miner", 1, 0, 0],
            ["Miner", 2, 132, 8],
            ["Miner", 3, 156, 8],
            ["Miner", 4, 192, 9],
            ["Miner", 5, 276, 9],
            ["Miner", 6, 336, 10],
            ["Electro Dragon", 1, 0, 0],
            ["Electro Dragon", 2, 240, 9],
            ["Electro Dragon", 3, 336, 10],
            ["Minion", 1, 0, 0],
            ["Minion", 2, 84, 5],
            ["Minion", 3, 96, 6],
            ["Minion", 4, 108, 6],
            ["Minion", 5, 156, 7],
            ["Minion", 6, 192, 8],
            ["Minion", 7, 276, 9],
            ["Minion", 8, 336, 10],
            ["Hog Rider", 1, 0, 0],
            ["Hog Rider", 2, 84, 5],
            ["Hog Rider", 3, 96, 6],
            ["Hog Rider", 4, 132, 6],
            ["Hog Rider", 5, 156, 7],
            ["Hog Rider", 6, 192, 8],
            ["Hog Rider", 7, 276, 9],
            ["Hog Rider", 8, 336, 10],
            ["Valkyrie", 1, 0, 0],
            ["Valkyrie", 2, 132, 6],
            ["Valkyrie", 3, 156, 7],
            ["Valkyrie", 4, 192, 7],
            ["Valkyrie", 5, 228, 8],
            ["Valkyrie", 6, 276, 9],
            ["Valkyrie", 7, 336, 10],
            ["Golem", 1, 0, 0],
            ["Golem", 2, 96, 6],
            ["Golem", 3, 132, 7],
            ["Golem", 4, 156, 7],
            ["Golem", 5, 192, 8],
            ["Golem", 6, 228, 9],
            ["Golem", 7, 276, 9],
            ["Golem", 8, 336, 10],
            ["Witch", 1, 0, 0],
            ["Witch", 2, 156, 7],
            ["Witch", 3, 276, 9],
            ["Witch", 4, 336, 10],
            ["Lava Hound", 1, 0, 0],
            ["Lava Hound", 2, 156, 7],
            ["Lava Hound", 3, 192, 8],
            ["Lava Hound", 4, 276, 9],
            ["Lava Hound", 5, 336, 10],
            ["Bowler", 1, 0, 0],
            ["Bowler", 2, 204, 8],
            ["Bowler", 3, 336, 9],
            ["Bowler", 4, 336, 10],
            ["Ice Golem", 1, 0, 0],
            ["Ice Golem", 1, 192, 9],
            ["Ice Golem", 1, 240, 9],
            ["Ice Golem", 1, 288, 10],
        ];

        for (let i = 0; i < troopChart.length; i++) {
            troop.insert(troopChart[i]);
        }
    }
}
