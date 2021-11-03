
function getRandomNumber(arr) {
    return Math.floor(Math.random() * arr.length);
}

(function () {
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    const btn = document.getElementById("btn");
    const color = document.querySelector(".color");

    btn.addEventListener("click", function () {
        let randomHexColor = "#";

        for (let i = 0; i < 6; i++) {
            randomHexColor += hex[getRandomNumber(hex)];
        }

        color.textContent = randomHexColor;
        document.body.style.backgroundColor = randomHexColor;
    })
})();