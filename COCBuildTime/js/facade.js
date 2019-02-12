function showResults() {
    $("#txtError").html("");
    var gamerTag = $("#txtGamerTag").val();
//    1. Offline validation
    if (doOfflineValidation(gamerTag)) {
        console.info("valid.");
    } else {
        $("#txtError").html("Gamer Tag must be 8 alphanumeric characters.");
    }
//    2. Server validation

//    3. Fetch results
//    4. Calculate
//    5. Display
}







