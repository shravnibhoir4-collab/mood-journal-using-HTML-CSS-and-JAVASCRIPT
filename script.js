let selectedMood = "";

function selectMood(mood) {
  selectedMood = mood;
  alert("Mood selected: " + mood);
}

function saveEntry() {
  const text = document.getElementById("entry").value.trim();
  if (!selectedMood || !text) {
    alert("Please select a mood and write something.");
    return;
  }

  const entry = {
    mood: selectedMood,
    text: text,
    date: new Date().toLocaleString()
  };

  let entries = JSON.parse(localStorage.getItem("moodEntries")) || [];
  entries.unshift(entry);
  localStorage.setItem("moodEntries", JSON.stringify(entries));

  document.getElementById("entry").value = "";
  selectedMood = "";
  displayEntries();
}

function displayEntries() {
  const container = document.getElementById("entries");
  container.innerHTML = "";
  const entries = JSON.parse(localStorage.getItem("moodEntries")) || [];

  entries.forEach((e) => {
    const div = document.createElement("div");
    div.className = "entry";
    div.innerHTML = `<strong>${e.mood}</strong> <em>${e.date}</em><br>${e.text}`;
    container.appendChild(div);
  });
}

window.onload = displayEntries;