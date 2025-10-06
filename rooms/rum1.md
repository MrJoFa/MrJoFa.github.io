---
layout: default
title: Buddhismen Escape Room
---

# Resan 
Du sitter på flyget på väg till Indien och försöker slappna av. 


Men du hör ett konstigt ljud som fångar din uppmärksamhet.  
Efter en stund kommer du fram till att följande sekvens med korta och långa pip upprepar sig:
### **-...  ..-  -..  -..  ....  .-**

<img src="/assets/images/seat.jpg" usemap="#seat" alt="Kan det finnas något i facken?"
     width="580" height="382" style="width:580px; height:382px;">

<map name="seat">
  <!-- Stolsfack 1 -->
  <area alt="Stolsfack 1" title="Stolsfack 1" href="#"
        coords="136,281,250,329" shape="rect" onclick="showImage('/assets/images/menu.jpg')">

  <!-- Stolsfack 2 -->
  <area alt="Stolsfack 2" title="Stolsfack 2" href="#"
        coords="335,267,459,317" shape="rect" onclick="showImage('/assets/images/morse.png')">
</map>

<!-- Popup-container (dold som standard) -->
<div id="popup" style="display:none; position:fixed; top:0; left:0; width:100%; height:100%;
     background:rgba(0,0,0,0.8); text-align:center; z-index:9999;">
  <span onclick="closePopup()" 
        style="color:white; font-size:30px; position:absolute; top:20px; right:30px; cursor:pointer;">&times;</span>
  <img id="popupImg" src="" alt="Bild" style="max-width:90%; max-height:90%; margin-top:50px;">
</div>

<script>
function showImage(imgPath) {
  document.getElementById('popupImg').src = imgPath;
  document.getElementById('popup').style.display = 'block';
}

function closePopup() {
  document.getElementById('popup').style.display = 'none';
}

// Bonus: gör så att man kan stänga genom att klicka på bakgrunden
document.getElementById('popup').addEventListener('click', function(e) {
  if (e.target.id === 'popup') {
    closePopup();
  }
});
</script>



<!-- Frågebox som kräver rätt svar för att länken vidare ska fungera -->
<input type="text" id="answer" placeholder="Vad är det du hör?">
<button onclick="checkAnswer()">Skicka</button>

<p id="message"></p>
<a href="rum2.html" id="nextLink" style="display:none;">Gå vidare!</a>

<script>
const correctHash = "YnVkZGhh"; 

function checkAnswer() {
    var userAnswer = document.getElementById('answer').value.trim().toLowerCase();
    var message = document.getElementById('message');
    var nextLink = document.getElementById('nextLink');

    
    var userHash = btoa(userAnswer);

    if(userHash === correctHash) {
        message.textContent = "Rätt! Du kan gå vidare.";
        nextLink.style.display = 'inline';
    } else {
        message.textContent = "Fel svar, försök igen!";
        nextLink.style.display = 'none';
    }
}
</script>


<!-- Ledtrådsruta -->
<button onclick="toggleClue()" style="margin:10px 0;">Visa ledtråd</button>

<p id="clue" style="display:none; background:#f0f0f0; padding:10px; border-radius:5px;">
Börja på Start here för varje bokstav.
För att komma till första bokstaven gå streck-punkt-punkt-punkt. Läs bara av bokstaven du stannar på, inte de på vägen.

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