// Morse code dictionary
const morseCode = {
  ".-": "A",
  "-...": "B",
  "-.-.": "C",
  "-..": "D",
  ".": "E",
  "..-.": "F",
  "--.": "G",
  "....": "H",
  "..": "I",
  ".---": "J",
  "-.-": "K",
  ".-..": "L",
  "--": "M",
  "-.": "N",
  "---": "O",
  ".--.": "P",
  "--.-": "Q",
  ".-.": "R",
  "...": "S",
  "-": "T",
  "..-": "U",
  "...-": "V",
  ".--": "W",
  "-..-": "X",
  "-.--": "Y",
  "--..": "Z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0",
};
const decod = document.querySelector(".decod");
function decode() {
  const input = document.getElementById("input").value;
  const output = document.getElementById("output");
  const words = input.trim().split("/");
  let decodedMessage = "";
  for (let i = 0; i < words.length; i++) {
    const letters = words[i].split(" ");
    for (let j = 0; j < letters.length; j++) {
      if (morseCode.hasOwnProperty(letters[j])) {
        decodedMessage += morseCode[letters[j]];
      }
    }
    decodedMessage += " ";
  }
  output.textContent = decodedMessage.trim();
}
document.querySelector(".decod").addEventListener("click", decode);
