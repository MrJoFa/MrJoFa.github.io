---
layout: default
title: Buddhismen Escape Room
---

# Mahabodhitemplet

Välkommen in i Mahabodhitemplet!  
Det första templet i Bodh Gaya uppfördes på 200-talet f.v.t. av kejsaren Ashoka.  
Det nuvarande templet härrör från 100-talet v.t. och har genomgått flera stora ombyggnader och restaureringar.  
Tempelområdet är med på Unescos lista över världsarv.

<img src="/assets/images/Bodhgaya,_Bihar._Buddha_image_in_the_main_temple.jpg"
     usemap="#templeMap" alt="Mahabodhitemplet"
     width="1067" height="1200"
     style="width:1067px; height:1200px; border-radius:10px;">

<map name="templeMap">
  <!-- Tittar upp i taket -->
  <area alt="Taket" title="Taket" href="#" 
        coords="430,1,470,46" shape="rect" 
        onclick="showMessage('Du tittar upp i taket och ser en märklig syn.', '/assets/images/inscription-key.jpg'); return false;">

  <!-- Tidning -->
  <area alt="Tidning" title="Tidning" href="#" 
        coords="28,916,363,1154" shape="rect" 
        onclick="showMessage('Du pratar lite med några andra besökare och de ger dig en tidning.', '/assets/images/news.png'); return false;">

  <!-- Munken -->
  <area alt="Munken" title="Munken" href="#" 
        coords="373,918,577,1153" shape="rect" 
        onclick="showMessage('Munken verkar upptagen med någon slags meditation, bäst att inte störa.', ''); return false;">
</map>

<!-- Popup-container -->
<div id="popup" style="display:none; position:fixed; top:0; left:0; width:100%; height:100%;
     background:rgba(0,0,0,0.8); text-align:center; z-index:9999;">
  <span onclick="closePopup()" 
        style="color:white; font-size:30px; position:absolute; top:20px; right:30px; cursor:pointer;">&times;</span>
  <img id="popupImg" src="" alt="Bild" style="max-width:90%; max-height:90%; margin-top:50px;">
</div>

<input type="text" id="answer" placeholder="Vad är koden?">
<button onclick="checkAnswer()">Skicka</button>

<p id="message" style="font-weight:bold;"></p>
<a href="rum4-1.html" id="nextLink" style="display:none;">Gå vidare!</a>

<script>
let correctHash = "NDYxNQ=="; // 4615 i Base64

function showMessage(text, imgPath) {
    const message = document.getElementById('message');
    message.style.color = 'black';
    message.textContent = text;

    if(imgPath) {
        const popup = document.getElementById('popup');
        const popupImg = document.getElementById('popupImg');
        popupImg.src = imgPath;
        popup.style.display = 'block';
    }
}

function closePopup() {
    document.getElementById('popup').style.display = 'none';
}

document.getElementById('popup').addEventListener('click', function(e){
    if(e.target.id === 'popup') closePopup();
});

function checkAnswer() {
    const userAnswer = document.getElementById('answer').value.trim();
    const userHash = btoa(userAnswer);
    const message = document.getElementById('message');
    const nextLink = document.getElementById('nextLink');

    if(userHash === correctHash) {
        message.style.color = 'green';
        message.textContent = "Rätt! Du kan gå vidare.";
        nextLink.style.display = 'inline';
    } else {
        message.style.color = 'red';
        message.textContent = "Fel svar, försök igen!";
        nextLink.style.display = 'none';
    }
}
</script>
