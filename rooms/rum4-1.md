---
layout: default
title: Buddhismen Escape Room
---

# Karma

Du har visat en stor förståelse för den buddhistiska läran och har på så sätt närmat dig nirvana.
Har du även fångat upp några visdomsord på vägen? Addera  i så fall deras siffror och skriv in summan här.

Gå tillbaka till [tempelområdet](/rooms/rum3.html)
 
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
        message.textContent = "Du harsäkert börjat förbättra din karma genom dina flitiga studier om buddhismen. Men än har du lång väg att vandra på den åttafaldiga vägen. Ett tips är att lyssna på munkars och nunnors vishet.";
        nextLink.style.display = 'none';
    }
}
</script>
