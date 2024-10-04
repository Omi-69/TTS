// Initialize variables
const textInput = document.getElementById("textInput");
const speakBtn = document.getElementById("speakBtn");
const voiceSelect = document.getElementById("voiceSelect");

let voices = [];

// Function to populate available voices in the dropdown
function populateVoices() {
  voices = window.speechSynthesis.getVoices();
  voiceSelect.innerHTML = voices
    .map(
      (voice, index) =>
        `<option value="${index}">${voice.name} (${voice.lang})</option>`
    )
    .join("");
}

// Trigger populateVoices after voices are loaded
window.speechSynthesis.onvoiceschanged = populateVoices;

// Function to speak the input text
function speakText() {
  const text = textInput.value;
  if (text.trim() === "") {
    alert("Please enter some text to convert to speech!");
    return;
  }

  const utterance = new SpeechSynthesisUtterance(text);
  const selectedVoice = voices[voiceSelect.value];
  utterance.voice = selectedVoice;

  // Speak the text
  window.speechSynthesis.speak(utterance);
}

// Event listener for the speak button
speakBtn.addEventListener("click", speakText);
