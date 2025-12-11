---
layout: islam
title: Resan
---

Du sitter på flyget på väg till Saudiarabien och försöker slappna av.

Efter en stund blir du uttråkad. Du behöver hitta något att fördriva tiden med tills du är framme.

<img id="seat-img"
     src="/assets/images/seat.jpg"
     usemap="#seat"
     alt="Kan det finnas något i facken?"
     style="max-width:100%; height:auto;">

<map name="seat">
  <area alt="Stolsfack 1" coords="136,281,250,329" shape="rect"
        href="#"
        onclick="showImagePopup('/assets/images/menu.jpg')">

  <area alt="Stolsfack 2" coords="335,267,459,317" shape="rect"
        href="#"
        onclick="showImagePopup('/assets/images/islam/maze.png')">
</map>

<!-- Bild-popup -->
<div id="img-popup" style="
     display:none; position:fixed; top:0; left:0; width:100%; height:100%;
     background:rgba(0,0,0,0.8); text-align:center; z-index:99999;">
  
  <span onclick="closeImagePopup()" 
        style="color:white; font-size:40px; position:absolute; top:20px; right:40px; cursor:pointer;">
        &times;</span>

  <img id="img-popup-content" src="" alt=""
       style="max-width:90%; max-height:90%; margin-top:60px;">
</div>

<script>
// =========================
//   EGEN POPUP (unika namn)
// =========================

function showImagePopup(path) {
  document.getElementById('img-popup-content').src = path;
  document.getElementById('img-popup').style.display = 'block';
}

function closeImagePopup() {
  document.getElementById('img-popup').style.display = 'none';
}

// Stäng popup genom klick på mörka ytan
document.getElementById('img-popup').addEventListener('click', function(e) {
  if (e.target.id === 'img-popup') {
    closeImagePopup();
  }
});

// Gör även denna image map responsiv
document.addEventListener('DOMContentLoaded', () => {
  if (typeof imageMapResize === "function") imageMapResize();
});
</script>


<!-- Svarsruta -->
<input type="text" id="answer" placeholder="Gav tidsfördrivet dig något svar?">
<button onclick="checkAnswer()">Skicka</button>

<p id="message"></p>
<a href="islam-rum2.html" id="nextLink" style="display:none;">Gå vidare!</a>

<script>
const correctHash = "cmFtYWRhbg=="; // ramadan

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


<!-- Ledtråd -->
<button onclick="toggleClue()" style="margin:10px 0;">Visa ledtråd</button>

<p id="clue" style="display:none; background:#f0f0f0; padding:10px; border-radius:5px;">
Har du klickat på stolsfacken? Hitta rätt väg genom labyrinten och bilda ett ord av bokstäverna du passerar.
</p>

<script>
function toggleClue() {
  var clue = document.getElementById('clue');
  clue.style.display = (clue.style.display === 'none') ? 'block' : 'none';
}
</script>
