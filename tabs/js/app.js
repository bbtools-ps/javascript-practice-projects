(function () {
    const btns = document.querySelectorAll(".tab-btn");
    const about = document.querySelector(".about");
    const articles = document.querySelectorAll(".content");

    about.addEventListener("click", function (e) {
        // get dataset "id" of a currently clicked target
        const id = e.target.dataset.id;
        // check if dataset exist = button is clicked
        if (id) {
            // remove active from all buttons
            btns.forEach(function (btn) {
                btn.classList.remove("active");
                // add active to clicked button
                e.target.classList.add("active");
            });
            // remove active from all divs "content"
            articles.forEach(function (article) {
                article.classList.remove("active");
            });
            // add active to div that id matches dataset of a button
            const element = document.getElementById(id);
            element.classList.add("active");
        }
    });
})();
