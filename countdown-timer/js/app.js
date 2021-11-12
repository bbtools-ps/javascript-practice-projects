(function () {
    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];
    const weekdays = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
    ];

    const giveaway = document.querySelector(".giveaway");
    const deadline = document.querySelector(".deadline");
    const items = document.querySelectorAll(".deadline-format h4");

    let tempDate = new Date();
    let tempYear = tempDate.getFullYear();
    let tempMonth = tempDate.getMonth();
    let tempDay = tempDate.getDate();

    // set the deadline date
    // new Date(year, month 0 - 11, day, hours, mins, secs)
    // let futureDate = new Date(2021, 11, 24, 11, 30, 0);

    // always add 10 days in future
    const futureDate = new Date(tempYear, tempMonth, tempDay + 10, 11, 30, 0);

    // get year, month, date, weekday, hours, clock from date object
    const year = futureDate.getFullYear();
    const month = months[futureDate.getMonth()];
    const date = futureDate.getDate();
    const weekday = weekdays[futureDate.getDay()];
    const hours = futureDate.getHours();
    const minutes = futureDate.getMinutes();
    const clock = hours < 12 ? "am" : "pm";

    // update giveaway html
    giveaway.textContent = `giveaway ends on ${weekday}, ${date} ${month} ${year} ${hours}:${minutes}${clock}`;

    // future time in ms
    const futureTime = futureDate.getTime();

    function getRemainingTime() {
        const today = new Date().getTime();
        const t = futureTime - today;
        // 1s = 1000ms
        // 1m = 60s
        // 1hr = 60min
        // 1day = 24hr

        // values in ms
        const oneDay = 24 * 60 * 60 * 1000;
        const oneHour = 60 * 60 * 1000;
        const oneMinute = 60 * 1000;

        // calculate all values
        let days = Math.floor(t / oneDay);
        let hours = Math.floor((t % oneDay) / oneHour);
        let minutes = Math.floor((t % oneHour) / oneMinute);
        let seconds = Math.floor((t % oneMinute) / 1000);

        // set values array
        const values = [days, hours, minutes, seconds];

        // add 0 if values < 10
        function format(item) {
            return item < 10 ? `0${item}` : item;
        }

        items.forEach(function (item, index) {
            item.innerHTML = format(values[index]);
        });

        // if giveaway expired send notification
        if (t < 0) {
            clearInterval(countdown);
            deadline.innerHTML = `<h4 class="expired">sorry this giveaway has expired</h4>`;
        }
    }

    // countdown
    let countdown = setInterval(getRemainingTime, 1000);
    getRemainingTime();
})();
