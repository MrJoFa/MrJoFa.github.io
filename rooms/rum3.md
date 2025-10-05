---
layout: default
title: Buddhismen Escape Room
---

# Bodh Gaya 

Du har kommit till Bodh Gaya i norra Indien. Det var här Buddha nådde upplysningen.  
Här finns idag ett stort tempel som heter Mahabodhitemplet.  
Bredvid templet finns ett bodhiträd som sägs härstamma från det träd som Buddha satt under när han nådde upplysningen.

---

<!-- Bild med klickbar zon -->
<img src="/assets/images/Bodhgaya-Mahabodhitemple.jpg"
     usemap="#hands" alt="Bodh Gaya"
     width="1067" height="800"
     style="width:100%; max-width:1067px; height:auto; border-radius:10px;">

<map name="hands">
  <!-- Klickbar zon: Tvätta händer -->
  <area alt="Tvätta händer" title="Tvätta händer" href="#"
        coords="308,689,416,802" shape="rect"
        onclick="washHands(); showImage('/assets/images/hands.jpg')">
</map>

<!-- Popup-container (dold som standard) -->
<div id="popup" style="display:none; position:fixed; top:0; left:0; width:100%; height:100%;
     background:rgba(0,0,0,0.8); text-align:center; z-index:9999;">
  <span onclick="closePopup()" 
        style="color:white; font-size:30px; position:absolute; top:20px; right:30px; cursor:pointer;">&times;</span>
  <img id="popupImg" src="" alt="Bild" style="max-width:90%; max-height:90%; margin-top:50px;">
</div>

<p id="message" style="font-weight:bold;"></p>



---

## Vart vill du gå härnäst?

1. Prata med [munkarna](/rooms/rum5.html)  
2. Gå till [trädet](/rooms/rum3-1.html)  
3. Besöka <a href="#" id="templeLink">templet</a>  

---

<script>
let hasWashedHands = false;

// Visa popup-bild
function showImage(imgPath) {
  document.getElementById('popupImg').src = imgPath;
  document.getElementById('popup').style.display = 'block';
}

// Stäng popup
function closePopup() {
  document.getElementById('popup').style.display = 'none';
}

// Klick utanför bilden stänger popupen
document.getElementById('popup').addEventListener('click', function(e) {
  if (e.target.id === 'popup') {
    closePopup();
  }
});

// När spelaren klickar på "brunnen"
function washHands() {
  hasWashedHands = true;
  document.getElementById('message').style.color = 'green';
  document.getElementById('message').textContent = 
    'Du ser att det finns ett skoställ utanför templet och ställer dina skor där. Du passar även på att tvätta händerna noggrant. En nunna vid tempelingången ler nöjt mot dig för att du visar respekt för denna heliga plats.';
}

// När man försöker gå in i templet
document.getElementById('templeLink').addEventListener('click', function(e) {
  if (!hasWashedHands) {
    e.preventDefault(); // stoppa länken
    document.getElementById('message').style.color = 'red';
    document.getElementById('message').textContent = 
      'På väg in i templet stoppas du av en bister nunna. ' +
      'Hon tittar på dig och skakar på huvudet. Du verkar inte få komma in av någon anledning.';
  } else {
    // tillåt länk efter handtvätt
    this.href = '/rooms/rum4.html';
  }
});
</script>