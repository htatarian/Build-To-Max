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
    $("#txtError").html("")
    var info = JSON.parse(data);

    if(info.name == null)
    {
        $("#txtError").html("Not a valid info tag.");
    }
    else
    {
        $("#playerName").val(info.name);
        $("#txtTownHallLevel").val(info.townHallLevel);
        $("#txtKingLevel").val(getKingLevel(info));
        $("#txtQueenLevel").val(getQueenLevel(info));
        $("#txtKingTime").val(calculateKingTime(info));
        // $("#txtQueenTime").val(calculateQueenTime(info));
        // $("#txtSpellTime").val(calculateSpellTime(info));
    }
}

function OnServerFail(){
    $("#txtError").html("Something went wrong. Try again later.");
}






