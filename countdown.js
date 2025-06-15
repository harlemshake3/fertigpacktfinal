const countdownEl = document.getElementById("countdown");
const reisezeitInput = document.getElementById("reisezeit");
const startButton = document.getElementById("startCountdown");
const checklistEl = document.getElementById("checklist");
const listSelect = document.getElementById("listSelect");

let intervalId;
let popupShown = false;

function startCountdown(targetTime) {
  clearInterval(intervalId);

  function updateCountdown() {
    const now = new Date().getTime();
    const distance = targetTime - now;

    if (distance < 0) {
      clearInterval(intervalId);
      countdownEl.innerText = "🎉 Gute Reise!";
      return;
    }

    if (distance <= 5 * 60 * 1000 && !popupShown) {
      alert("⏳ Nur noch 5 Minuten bis zur Abfahrt! Hast du alles dabei?");
      popupShown = true;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    countdownEl.innerText = `${days} Tage ${hours} Std ${minutes} Min ${seconds} Sek`;
  }

  updateCountdown();
  intervalId = setInterval(updateCountdown, 1000);
}

startButton.addEventListener("click", () => {
  const selected = reisezeitInput.value;
  if (!selected) {
    alert("Bitte eine Zielzeit eingeben.");
    return;
  }

  const target = new Date(selected).getTime();
  localStorage.setItem("targetTime", new Date(target).toISOString());
  startCountdown(target);
});

async function loadChecklistNames() {
  try {
    const res = await fetch("api/get_checklist_names.php");
    const listNames = await res.json();

    listNames.forEach(name => {
      const option = document.createElement("option");
      option.value = name;
      option.textContent = name;
      listSelect.appendChild(option);
    });
  } catch (err) {
    console.error("Fehler beim Laden der Listen:", err);
  }
}

async function loadChecklistFromSelection() {
  const selectedList = listSelect.value;
  if (!selectedList || selectedList === "Bitte Liste wählen") return;

  try {
    const res = await fetch("api/get_checklist.php?list_name=" + encodeURIComponent(selectedList));
    const items = await res.json();

    checklistEl.innerHTML = "";
    if (items.length === 0) {
      checklistEl.innerHTML = "<li>Keine Einträge in dieser Liste.</li>";
      return;
    }

    items.forEach(item => {
      const li = document.createElement("li");
      li.textContent = `${item.checked ? "✅" : "☐"} ${item.item_text}`;
      checklistEl.appendChild(li);
    });
  } catch (err) {
    console.error("Fehler beim Laden der Packliste:", err);
    checklistEl.innerHTML = "<li>Fehler beim Laden der Liste.</li>";
  }
}

window.addEventListener("DOMContentLoaded", () => {
  const savedTime = localStorage.getItem("targetTime");
  if (savedTime) {
    const target = new Date(savedTime).getTime();
    startCountdown(target);
  }

  loadChecklistNames();
});

listSelect.addEventListener("change", loadChecklistFromSelection);
