const restapi = document.querySelector("#five");
restapi.addEventListener("click", () => {
  window
    .open(
      "https://afcic.github.io/FrontEndMentor_RESTCountriesAPI/",
      "_blank",
      "noopener noreferrer"
    )
    .focus();
});

const rockpaperscissors = document.querySelector("#six");
rockpaperscissors.addEventListener("click", () => {
  window
    .open(
      "https://afcic.github.io/FrontEndMentor_RockPaperScissors/",
      "_blank",
      "noopener noreferrer"
    )
    .focus();
});

const milestone = document.querySelector("#four");
milestone.addEventListener("click", () => {
  window.open("./milestoneStrength.html", "noopener noreferrer").focus();
});

const queerdir = document.querySelector("#three");
queerdir.addEventListener("click", () => {
  window.open("./queerdir.html", "noopener noreferrer").focus();
});

const cntstrck = document.querySelector("#two");
cntstrck.addEventListener("click", () => {
  window
    .open(
      "https://www.instagram.com/cntstrck/",
      "_blank",
      "noopener noreferrer"
    )
    .focus();
});

const olderProjects = document.querySelector("#one");
olderProjects.addEventListener("click", () => {
  window.open("./AnjaFerjancic_portfolio.pdf", "_blank", "noopener noreferrer");
});
