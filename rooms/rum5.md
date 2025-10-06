---
layout: default
title: Buddhismen Escape Room
---

# Meditation 
Du pratar lite med munkarna och de erbjuder dig att delta när de mediterar. 

<img src="/assets/images/buddhist_Man_Meditating.jpg" 
     usemap="#monksMap" 
     width="1067" height="800" 
     style="width:1067px; height:800px; border-radius:10px; display:block;">

<map name="monksMap">
  <area shape="rect" coords="30,245,110,527" href="#" alt="Munk1" onclick="showMessage('... mani ... ...', ''); return false;">
  <area shape="rect" coords="111,233,193,337" href="#" alt="Munk2" onclick="showMessage('om ... ... ...', ''); return false;">
  <area shape="rect" coords="596,249,712,380" href="#" alt="Munk3" onclick="showMessage('... ... ... hum', ''); return false;">
  <area shape="rect" coords="727,382,851,496" href="#" alt="Munk4" onclick="showMessage('... ... padme ...', ''); return false;">
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

<input type="text" id="answer" placeholder="Recitera ett mantra">
<button onclick="checkAnswer()">Skicka</button>

<p id="message"></p>
<a href="rum2.html" id="nextLink" style="display:none;">Gå vidare!</a>

<script>
let correctHash = "b21gbWFuaSBwYWRtZSBoaW0="; // "om mani padme hum" i Base64
let munk5Message = "Munken är djupt försjunken i meditation, ";

function showMessage(text, imgPath) {
    const popup = document.getElementById('popup');
    const popupText = document.getElementById('popupText');

    popupText.textContent = text;
    popup.style.display = 'block';
}

function closePopup() {
    document.getElementById('popup').style.display = 'none';
}

document.getElementById('popup').addEventListener('click', function(e) {
    if(e.target.id === 'popup') closePopup();
});

function checkAnswer() {
    var userAnswer = document.getElementById('answer').value.trim().toLowerCase();
    var message = document.getElementById('message');
    var nextLink = document.getElementById('nextLink');
    var userHash = btoa(userAnswer);

    if(userHash === correctHash) {
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
