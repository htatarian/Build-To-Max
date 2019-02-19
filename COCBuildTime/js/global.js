function btnCalculateHeroesAndSpells_click() {
    showResults();
}

function init() {
    console.info("DOM is ready");
    $("#btnCalculateHeroesAndSpells").on("click", btnCalculateHeroesAndSpells_click);
}

function initDB(){
    DB.createDatabase();
    if(db)
    {
        DB.dropTables();
        DB.createTables();
        if(king) {
            populateKing();
        }
        if(queen) {
            populateQueen();
        }
        if(spell) {
            populateSpell();
        }
        if(troop){
            populateTroop();
        }
    }
}

$(document).ready(function () {
    init();
    initDB();
});