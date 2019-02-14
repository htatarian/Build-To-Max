function btnCalculateHeroesAndSpells_click() {
    showResults();
}

function init() {
    console.info("DOM is ready");
    $("#btnCalculateHeroesAndSpells").on("click", btnCalculateHeroesAndSpells_click);
}

function initDB(){
    DB.createDatabase();
    if(DB)
    {
        DB.dropTables();
        DB.createTables();
        if(king)
        {
            populateKing();
        }
        if(queen)
        {
            populateQueen();
        }
    }
}

$(document).ready(function () {
    init();
    initDB();
});