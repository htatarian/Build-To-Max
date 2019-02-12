function btnCalculate_click() {
    showCalculatedAge();
}

function btnAdd_click() {
    addFriendEnemy();
}

function btnExtra_click() {
    doSomething();
}

function init() {
    console.info("DOM is ready");
    $("#btnCalculate").on("click", btnCalculate_click);
    $("#txtDOBAdd").on("change", btnCalculate_click);
    $("#btnAdd").on("click", btnAdd_click);
    $("#btnExtra").on("click", btnExtra_click);

}

$(document).ready(function () {
    init();
});
