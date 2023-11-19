const buttons = document.querySelectorAll(".button button");
const cardTeams = document.querySelectorAll(".card-team");

buttons.forEach((button, index) => {
  button.addEventListener("click", () => {
    // Reset all buttons to btn-outline-primary
    buttons.forEach((b) =>
      b.classList.replace("btn-primary", "btn-outline-primary")
    );

    // Set the clicked button to btn-primary
    button.classList.replace("btn-outline-primary", "btn-primary");

    // Hide all card-teams
    cardTeams.forEach((cardTeam) => (cardTeam.style.display = "none"));

    // Show the corresponding card-team
    const teamId = `team-${index + 1}`;
    const teamToShow = document.getElementById(teamId);
    if (teamToShow) {
      teamToShow.style.display = "flex";
    }
  });
});
