---
layout: default
title: Världen
---

## Vilka länder ser ni på kartan? 

<img src="/assets/images/advent/advent-karta.png">

De första bokstäverna i ländernas namn bildar ett lösenord.

<!-- Frågebox som kräver rätt svar för att länken vidare ska fungera -->
<input type="text" id="answer" placeholder="Vad är lösenordet?">
<button onclick="checkAnswer()">Skicka</button>

<p id="message"></p>

<script>
const correctHash = "cGVwcGFya2FrYQ=="; // Base64 för "pepparkaka"

function checkAnswer() {
    const userAnswer = document.getElementById('answer').value.trim().toLowerCase();
    const message = document.getElementById('message');

    const userHash = btoa(userAnswer);

    if (userHash === correctHash) {
        message.textContent = "Rätt! Ni har listat ut lösenordet.";
        message.style.color = "green";
    } else {
        message.textContent = "Fel svar, försök igen!";
        message.style.color = "red";
    }
}
</script>

