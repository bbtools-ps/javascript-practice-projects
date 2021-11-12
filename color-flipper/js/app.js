function getRandomNumber(arr) {
    return Math.floor(Math.random() * arr.length);
}

(function () {
    const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
    const btn = document.getElementById("btn");
    const color = document.querySelector(".color");

    btn.addEventListener("click", function () {
        // get random number between from array
        const randomColor = colors[getRandomNumber(colors)];
        document.body.style.backgroundColor = randomColor;
        color.textContent = randomColor;
    });
})();
