(function () {
    // ---------- VARIABLES ----------
    const viewingDistance = document.querySelector("#viewing-distance");
    const dpi = document.querySelector("#dpi");
    const units = ["meters", "centimeters", "millimeters", "feet", "inches"];
    const unitsSelect = document.querySelector("#units");
    let unitsList = "";
    const unitValue = document.querySelector("#unit");

    /**
     * Abbreviate units from their full names.
     * @param {string} unit - full name of the unit.
     * @returns {string}
     */
    function abbreviateUnits(unit) {
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

    /**
     * Convert units using centimeters as a base value.
     * @param {string} unit - unit abbreviation.
     * @param {string} value - input value that has to converted to number.
     * @returns {number}
     */
    function convertUnits(unit, value) {
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

    /**
     * Calculate dpi based on viewing distance.
     * @param {number} num - viewing distance.
     * @returns {number}
     */
    function calcDpi(num) {
        // calculation is done in cm so it has to converted to a proper value
        let viewingDistanceValue = convertUnits(unitValue.innerHTML, num);
        return Math.floor((180 / viewingDistanceValue) * 100);
    }

    /**
     * Calculate viewing distance based on dpi.
     * @param {number} num - dpi.
     * @returns {number}
     */
    function calcViewingDistance(num) {
        // calculation is done in cm so it has to converted to a proper value
        let dpiValue = convertUnits(unitValue.innerHTML, num);
        return Math.floor((180 / dpiValue) * 100);
    }

    // ---------- EVENT LISTENERS ----------
    viewingDistance.addEventListener("input", function () {
        dpi.value = calcDpi(this.value);
    });

    dpi.addEventListener("input", function () {
        viewingDistance.value = calcViewingDistance(this.value);
    });

    unitsSelect.addEventListener("change", function () {
        unitValue.innerHTML = abbreviateUnits(this.value);
        dpi.value = calcDpi(viewingDistance.value);
    });

    // ---------- UI ----------
    // populate unitsList content with options from units
    units.forEach(function (item) {
        unitsList += `<option value="${item}">${item}</option>`;
    });
    unitsSelect.innerHTML = unitsList;
    // set units to centimeters
    unitsSelect.value = units[1];
    unitValue.innerHTML = abbreviateUnits(unitsSelect.value);
    // set default viewing distance
    viewingDistance.value = 200;
    // calculate dpi
    dpi.value = calcDpi(viewingDistance.value);
})();
