---
layout: default
title: Buddhismen Escape Room
---

# Meditation 
Du pratar lite med munkarna och de erbjuder dig att delta när de mediterar. 

<img src="/assets/images/Buddhist_Man_Meditating.jpg" 
     usemap="#monksMap" 
     width="1067" height="800" 
     style="width:1067px; height:800px; border-radius:10px;">

<map name="monksMap">
  <area shape="rect" coords="30,245,110,527" href="#" alt="Munk1" onclick="showMessage('... mani ... ...', ''); return false;">
  <area shape="rect" coords="111,245,193,527" href="#" alt="Munk2" onclick="showMessage('om ... ... ...', ''); return false;">
  <area shape="rect" coords="800,500,900,600" href="#" alt="Munk3" onclick="showMessage('... ... ... hum', ''); return false;">
  <area shape="rect" coords="727,362,851,476" href="#" alt="Munk4" onclick="showMessage('... ... padme ...', ''); return false;">
  <area shape="rect" coords="271,166,456,568" href="#" alt="Munk5" id="munk5" onclick="showMessage(munk5Message, ''); return false;">
</map>

<!-- Popup -->
<div id="popup" style="display:none; position:fixed; top:0; left:0; width:100%; height:100%;
     background:rgba(0,0,0,0.8); text-align:center; z-index:9999; color:white;">
  <span onclick="closePopup()" 
        style="font-size:30px; position:absolute; top:20px; right:30px; cursor:pointer;">&times;</span>
  <div style="margin-top:60px;">
    <p id="popupText" style="font-size:18px;"></p>
  </div>
</div>

<!-- Frågebox som kräver rätt svar -->
<input type="text" id="answer" placeholder="Recitera ett mantra">
<button onclick="checkAnswer()">Skicka</button>

<p id="message"></p>
<a href="rum2.html" id="nextLink" style="display:none;">Gå vidare!</a>

<script>
let correctAnswer = "om mani padme hum"; 
let munk5Message = "Munken är djupt försjunken i meditation.";

function showMessage(text, imgPath) {
    const popup = document.getElementById('popup');
    const popupText = document.getElementById('popupText');

    popupText.textContent = text;
    popup.style.display = 'block';
}

function closePopup() {
    document.getElementById('popup').style.display = 'none';
}

// Klick på popup bakgrund stänger den
document.getElementById('popup').addEventListener('click', function(e) {
    if(e.target.id === 'popup') closePopup();
});

function checkAnswer() {
    // Ta bort extra mellanslag och gör små bokstäver
    var userAnswer = document.getElementById('answer').value
                      .trim()
                      .toLowerCase()
                      .replace(/\s+/g, ' ');

    var message = document.getElementById('message');
    var nextLink = document.getElementById('nextLink');

    if(userAnswer === correctAnswer) {
        message.style.color = 'green';
        message.textContent = "Rätt! Du kan gå vidare.";
        nextLink.style.display = 'inline';
        // Ändra Munk5:s meddelande
        munk5Message = "Lägg det här på minnet: sangha5";
    } else {
        message.style.color = 'red';
        message.textContent = "Fel svar, försök igen!";
        nextLink.style.display = 'none';
    }
}
</script>

<!-- Ledtrådsruta -->
<button onclick="toggleClue()" style="margin:10px 0;">Visa ledtråd</button>

<p id="clue" style="display:none; background:#f0f0f0; padding:10px; border-radius:5px;">
Lyssna på vad de andra munkarna reciterar.
</p>

<script>
function toggleClue() {
  var clue = document.getElementById('clue');
  clue.style.display = (clue.style.display === 'none') ? 'block' : 'none';
}
</script>
