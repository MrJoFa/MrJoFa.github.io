---
layout: default
title: Världen
---

# Vilka länder ser ni på kartan? 

<img src="/assets/images/advent/advent-karta.png">

De första bokstäverna i ländernas namn bildar ett lösenord.

<!-- Frågebox som kräver rätt svar för att länken vidare ska fungera -->
<input type="text" id="answer" placeholder="Vad är lösenordet?">
<button onclick="checkAnswer()">Skicka</button>

<p id="message"></p>
<a href="advent2.html" id="nextLink" style="display:none;">Gå vidare!</a>




<script>
const correctHash = "cGVwcGFya2FrYQ=="; // Base64 för "pepparkaka"

function checkAnswer() {
    const userAnswer = document.getElementById('answer').value.trim().toLowerCase();
    const message = document.getElementById('message');
    const nextLink = document.getElementById('nextLink');

    const userHash = btoa(userAnswer);

    if(userHash === correctHash) {
        message.textContent = "Rätt! Du kan gå vidare.";
        nextLink.style.display = 'inline-block';
    } else {
        message.textContent = "Fel svar, försök igen!";
        nextLink.style.display = 'none';
    }
}
</script>

