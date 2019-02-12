function btnCalculate_click() {
    showResults();
}

function init() {
    console.info("DOM is ready");
    $("#btnCalculate").on("click", btnCalculate_click);
}

$(document).ready(function () {
    init();
});
