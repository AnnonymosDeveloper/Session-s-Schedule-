function updateSchedule() {
  let sessions = JSON.parse(localStorage.getItem("sessions")) || [];

  sessions.forEach((session) => {
    const { trainer, day, time, color } = session;
    const formattedTime = time.toLowerCase().replace(/ /g, "-");
    const id = `${day.toLowerCase()}-${formattedTime}`;
    const div = document.getElementById(id);

    if (div) {
      div.textContent = trainer;
      div.style.backgroundColor = color;
      div.style.color = "white";
      div.style.border = "none";
    }
  });
}

window.onload = updateSchedule;

window.addEventListener("storage", (e) => {
  if (e.key === "sessions") {
    updateSchedule();
  }
});
