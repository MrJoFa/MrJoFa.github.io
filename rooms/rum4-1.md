---
layout: default
title: Buddhismen Escape Room
---

# Karma

Du har visat en stor förståelse för den buddhistiska läran och har på så sätt närmat dig nirvana.
Har du även fångat upp några visdomsord på vägen? Addera  i så fall deras siffror och skriv in summan här.
 
 <input type="text" id="answer" placeholder="Har du nått upplysning?">
<button onclick="checkAnswer()">Skicka</button>

<p id="message"></p>
<a href="nirvana.html" id="nextLink" style="display:none;">Gå vidare!</a>

<script>
const correctHash = "MTg="; // 18 i Base64

function checkAnswer() {
    var userAnswer = document.getElementById('answer').value.trim().toLowerCase();
    var message = document.getElementById('message');
    var nextLink = document.getElementById('nextLink');

    var userHash = btoa(userAnswer);

    if(userHash === correctHash) {
        message.textContent = "Rätt! Du kan gå vidare.";
        nextLink.style.display = 'inline';
    } else {
        message.textContent = "Du har helt klart förbättrat din karma genom dina flitiga studier om buddhismen. Vem vet, kanske återföds du som en munk eller nunna och har tagit ett steg närmare nirvana.";
        nextLink.style.display = 'none';
    }
}
</script>
