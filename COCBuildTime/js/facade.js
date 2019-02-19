function showResults() {
    $("#txtError").html("");
    const gamerTag = $("#txtGamerTag").val();
    //    1. Server validation
    $.ajax( {
        url: "php/getPlayerInfo.php",
        data: {gamerTag:gamerTag},
        success: EvaluateResult,
        error: OnServerFail
    });
}

function EvaluateResult(data) {
    $("#txtError").html("");

    let info = JSON.parse(data);
    if(info.name == null) {
        $("#txtError").html("Please enter a valid tag #");
    }
    else {
        $("#txtPlayerName").html("Hi, Chief " +info.name+"!");
        calculateKingTime(info);
        calculateQueenTime(info);
        calculateSpellTime(info);
        calculateTroopsTime(info);
    }
}

function OnServerFail(){
    $("#txtError").html("Something went wrong. Try again later.");
}





