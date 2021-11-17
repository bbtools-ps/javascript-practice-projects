(function () {
    // get values
    const viewingDistance = document.querySelector("#viewing-distance");
    const dpi = document.querySelector("#dpi");
    const units = [
        "pixels",
        "inches",
        "centimeters",
        "millimeters",
        "points",
        "picas",
    ];
    const unitsSelect = document.querySelector("#units");
    let unitsContent = "";

    // calculate dpi and viewingDistance based on inputs
    function calc() {
        dpi.value = Math.floor((180 / viewingDistance.value) * 100);
        viewingDistance.value = Math.floor((180 / dpi.value) * 100);
    }

    // populate units content
    units.forEach(function (item) {
        unitsContent += `<option value="${item}">${item}</option>`;
    });
    unitsSelect.innerHTML = unitsContent;

    // set event listeners
    viewingDistance.addEventListener("input", calc);
    dpi.addEventListener("input", calc);
    unitsSelect.addEventListener("change", function () {
        const unitValue = document.querySelector("#unit");
        unitValue.innerHTML = this.value;
    });

    // default values
    viewingDistance.value = 200;
    calc();
    unitsSelect.value = units[2];
})();
