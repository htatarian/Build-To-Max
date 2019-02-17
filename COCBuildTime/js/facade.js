function showResults() {
    $("#txtError").html("");
    const gamerTag = $("#txtGamerTag").val();
    //    1. Server validation
    $.ajax( {
        url: "PHP/getPlayerInfo.php",
        data: {gamerTag:gamerTag},
        success: EvaluateResult,
        error: OnServerFail
    });
}

function EvaluateResult(data) {
    $("#txtError").html("");

    var info = JSON.parse(data);
    if(info.name == null) {
        $("#txtError").html("Please enter a valid tag #");
    }
    else {
        $("#txtPlayerName").html("Hi, Chief " +info.name+"!");
        calculateKingTime(info);
        calculateQueenTime(info);
        $("#txtSpellTime").val(calculateSpellTime(info, hoursToDaysHours));
    }
}

function OnServerFail(){
    $("#txtError").html("Something went wrong. Try again later.");
}






