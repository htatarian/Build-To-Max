/**
 * File Name: facade.js
 *
 * Revision History:
 *       Sabbir Ahmed, 2019-01-31 : Created
 */
function showCalculatedAge() {
    var dob = $("#txtDOBAdd").val();
    var age = getCurrentAge(dob);
    $("#txtAgeAdd").val(age);

}

function addFriendEnemy() {
    // 1. test validation
    if (doValidate_frmAddFriendEnemy()) {
        console.info("Validation is successful");
        // 2. if validation is successful then fetch the info from input controls
        // 3. insert into table (by calling insert DAL function and supplying inputs
    }
    else{
        console.error("Validation failed");
    }
}

function doSomething() {
    if (doValidate_frmExtra()) {
        console.info("Validation is successful (Extra)");
    }
    else{
        console.error("Validation failed (Extra)");
    }

}








