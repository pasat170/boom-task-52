import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
    // This block will be executed once the page is loaded and ready
    document.addEventListener("click", myFunction);
    function myFunction() {

        for (let i = 0; i < 5; i++) {
            let x = document.createElement("article");

            x.setAttribute("id", "myarticle" + i);
            document.body.appendChild(x);

            let text = "This is article";

            document.getElementById("myarticle" + i).innerHTML = text;
            document.getElementById("myarticle" + i).classList.add("message");
        }

    }

    const button = document.querySelector(".button");
    button.addEventListener("click", () => {
        alert("💣");
    });
});
