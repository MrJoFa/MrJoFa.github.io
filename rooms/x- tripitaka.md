---
layout: default
title: Bodhiträdet
---
På platsen finns ett bodhiträd som har sägs härstamma från det träd som Buddha satt och mediterade under tills tills han kom på sanningen med liget och blev upplyst. 
Trädet har varit en viktig plats för buddhister att besöka i över två tusen år.
<img src="/assets/images/Bodh_Gaya_Bodhi_Tree.jpg"> 

Men vad var det egentligen Buddha kom fram till? 
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
