(function () {
    // set variables
    const viewingDistance = document.querySelector("#viewing-distance");
    const dpi = document.querySelector("#dpi");
    const units = ["meters", "centimeters", "millimeters", "feet", "inches"];
    const unitsSelect = document.querySelector("#units");
    let unitsContent = "";
    const unitValue = document.querySelector("#unit");

    // units abbreviation
    function unitsAbbreviation(unit) {
        switch (unit) {
            case "meters":
                return "m";
            case "centimeters":
                return "cm";
            case "millimeters":
                return "mm";
            case "feet":
                return "ft";
            case "inches":
                return "in";
            default:
                return "";
        }
    }

    function unitsConverter(unit, value) {
        switch (unit) {
            case "m":
                return parseFloat(value) * 100;
            case "cm":
                return parseFloat(value);
            case "mm":
                return parseFloat(value) / 10;
            case "ft":
                return parseFloat(value) / 0.03280839895;
            case "in":
                return parseFloat(value) / 0.3937007874;
        }
    }

    // calculate dpi based on viewing distance
    function calcDpi(num) {
        // calculation is done in cm so it has to converted to a proper value
        let viewingDistanceValue = unitsConverter(unitValue.innerHTML, num);
        return Math.floor((180 / viewingDistanceValue) * 100);
    }

    // calculate viewing distance based on dpi
    function calcViewingDistance(num) {
        // calculation is done in cm so it has to converted to a proper value
        let dpiValue = unitsConverter(unitValue.innerHTML, num);
        return Math.floor((180 / dpiValue) * 100);
    }

    // set event listeners
    viewingDistance.addEventListener("input", function () {
        dpi.value = calcDpi(this.value);
    });

    dpi.addEventListener("input", function () {
        viewingDistance.value = calcViewingDistance(this.value);
    });

    unitsSelect.addEventListener("change", function () {
        unitValue.innerHTML = unitsAbbreviation(this.value);
        dpi.value = calcDpi(viewingDistance.value);
    });

    // UI
    units.forEach(function (item) {
        unitsContent += `<option value="${item}">${item}</option>`;
    });
    unitsSelect.innerHTML = unitsContent;
    unitsSelect.value = units[2];
    viewingDistance.value = 200;
    dpi.value = calcDpi(viewingDistance.value);
})();
