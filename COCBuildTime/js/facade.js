function showResults() {
    var gamerTag = $("#txtGamerTag").val();
//    1. Offline validation
    if (doOfflineValidation(gamerTag)) {
        console.info("valid.");
    } else {
        console.info("not valid.");
    }
//    2. Server validation
//    3. Fetch results
//    4. Calculate
//    5. Display
}







