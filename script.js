document.addEventListener("DOMContentLoaded", () => {
    let linkedinBtn = document.getElementById("linkedin");
    let githubBtn = document.getElementById("github");
    let discordBtn = document.getElementById("discord");

    linkedinBtn.addEventListener("click", () => {
        window.open("https://www.linkedin.com/in/adrian-fu-15941317a/", "_blank");
    });

    githubBtn.addEventListener("click", () => {
        window.open("https://github.com/AllanFuChao", "_blank");
    });

});
