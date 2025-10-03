---
layout: default
title: Buddhismen Escape Room
---

## Fråga:

Vad heter den viktigaste heliga skriften inom buddhismen?

<input type="text" id="answer" placeholder="Skriv ditt svar här">
<button onclick="checkAnswer()">Skicka</button>

<p id="message"></p>
<a href="rum3.html" id="nextLink" style="display:none;">Gå vidare!</a>

<script>
function checkAnswer() {
    var userAnswer = document.getElementById('answer').value.trim().toLowerCase();
    var message = document.getElementById('message');
    var nextLink = document.getElementById('nextLink');

    // Accepterar "tripitaka" som korrekt svar
    if(userAnswer === 'tripitaka') {
        message.textContent = "Rätt! Du kan gå vidare.";
        nextLink.style.display = 'inline';
    } else {
        message.textContent = "Fel svar, försök igen!";
        nextLink.style.display = 'none';
    }
}
</script>


## Tips:
- Om du inte vet svaret kan du hitta information [här](https://www.so-rummet.se/kategorier/religion/buddhismen).
