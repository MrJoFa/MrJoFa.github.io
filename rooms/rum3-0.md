---
layout: default
title: Buddhismen Escape Room
---

## Vägval

Chauffören kör dig gärna till Bodh Gaya, men han hittar inte dit.
Han tar fram en gammal karta och säger att den kan visa vägen, men du måste hjälpa honom att tyda den.
<img src="/assets/images/treasuremap.png"> 
<input type="text" id="answer" placeholder="Vart ska ni åka?">
<button onclick="checkAnswer()">Skicka</button>

<p id="message"></p>
<a href="rum3.html" id="nextLink" style="display:none;">Gå vidare!</a>

<script>
function checkAnswer() {
    var userAnswer = document.getElementById('answer').value.trim().toLowerCase();
    var message = document.getElementById('message');
    var nextLink = document.getElementById('nextLink');

    // Accepterar "tripitaka" som korrekt svar
    if(userAnswer === 'crystal cave') {
        message.textContent = "Rätt! Du kan gå vidare.";
        nextLink.style.display = 'inline';
    } else {
        message.textContent = "Fel svar, försök igen!";
        nextLink.style.display = 'none';
    }
}
</script>

</script>

<!-- Ledtrådsruta -->
<button onclick="toggleClue()" style="margin:10px 0;">Visa ledtråd</button>

<p id="clue" style="display:none; background:#f0f0f0; padding:10px; border-radius:5px;">
Ni ska åka till nr 4. 
Använd 1-3 för att försöka lista ut vad symbolerna heter.  

</p>

<script>
function toggleClue() {
  var clue = document.getElementById('clue');
  if(clue.style.display === 'none') {
    clue.style.display = 'block';
  } else {
    clue.style.display = 'none';
  }
}
</script>