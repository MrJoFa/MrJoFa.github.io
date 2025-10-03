---
layout: default
title: Buddhismen Escape Room
---

# Bodhiträdet
På väg till trädet så får du en uppenbarelse. Framför dina ögon svävar en splittrad bild. 
Du anar att du på något sätt fått kontakt med tidpunkten för Buddhas upplysning.
Kan du se vad bilden visar?

 
<iframe 
    style="width:100%; height:600px; max-height:90vh; border:2px solid #888;" 
    allowfullscreen 
    src="https://www.jigsawexplorer.com/online-jigsaw-puzzle-player.html?frm=1&url=aHR0cHM6Ly9tcmpvZmEuZ2l0aHViLmlvL2Fzc2V0cy9pbWFnZXMvcHJlZGlrYW4uanBlZ18obm9fcHJldmlld180KV8obm9wPTI0KQ~~&color=charcoal" 
    title="Buddhas predikan">
</iframe>

Hur många lärjungar sitter framför Buddha?
<input type="text" id="answer" placeholder="Svara med en siffra">
<button onclick="checkAnswer()">Skicka</button>

<p id="message"></p>
<a href="rum4.html" id="nextLink" style="display:none;">Gå vidare!</a>

<script>
function checkAnswer() {
    var userAnswer = document.getElementById('answer').value.trim().toLowerCase();
    var message = document.getElementById('message');
    var nextLink = document.getElementById('nextLink');

    // Accepterar "tripitaka" som korrekt svar
    if(userAnswer === '5') {
        message.textContent = "Rätt! Du kan gå vidare.";
        nextLink.style.display = 'inline';
    } else {
        message.textContent = "Fel svar, försök igen!";
        nextLink.style.display = 'none';
    }
}
</script>


