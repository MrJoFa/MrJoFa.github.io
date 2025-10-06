---
layout: default
title: Buddhismen Escape Room
---

# Bodh Gaya 

Du har kommit till Bodh Gaya i norra Indien. Det var här Buddha nådde upplysningen.  
Här finns idag ett stort tempel som heter Mahabodhitemplet.  
Bredvid templet finns ett bodhiträd som sägs härstamma från det träd som Buddha satt under när han nådde upplysningen.
<img src="/assets/images/Bodhgaya-Mahabodhitemple.jpg"
     usemap="#hands" 
     width="1067" height="800"
     style="border-radius:10px; display:block;">

<map name="hands">
  <!-- Klickbar zon: Tvätta händer -->
  <area shape="rect" coords="308,689,416,802" 
        href="javascript:void(0);" 
        onclick="alert('Klick! Du har tvättat händerna.');">
</map>

---

<!-- Bild med klickbar zon -->
<img src="/assets/images/Bodhgaya-Mahabodhitemple.jpg"
     usemap="#hands" alt="Bodh Gaya"
     width="800" height="1067"
     style= "border-radius:10px;">

<map name="hands">
  <!-- Klickbar zon: Tvätta händer -->
  <area alt="Tvätta händer" title="Tvätta händer"
        coords="308,689,416,802" shape="rect"
        onclick="washHands(); showImage('/assets/images/hands.jpg'); return false;">
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
window.onload = function() {
  let hasWashedHands = false;

  // Visa popup-bild
  window.showImage = function(imgPath) {
    document.getElementById('popupImg').src = imgPath;
    document.getElementById('popup').style.display = 'block';
  };

  // Stäng popup
  window.closePopup = function() {
    document.getElementById('popup').style.display = 'none';
  };

  // Klick utanför bilden stänger popupen
  document.getElementById('popup').addEventListener('click', function(e) {
    if (e.target.id === 'popup') closePopup();
  });

  // När spelaren klickar på "tvätta händer"
  window.washHands = function() {
    hasWashedHands = true;
    document.getElementById('message').style.color = 'green';
    document.getElementById('message').textContent =
      'Du tvättar händerna noggrant vid brunnen. En nunna vid tempelingången ler nöjt mot dig.';
    setTimeout(closePopup, 3000); // stäng efter 3 sek
  };

  // När man försöker gå in i templet
  document.getElementById('templeLink').addEventListener('click', function(e) {
    if (!hasWashedHands) {
      e.preventDefault();
      document.getElementById('message').style.color = 'red';
      document.getElementById('message').textContent =
        'På väg in i templet stoppas du av en bister nunna. Hon tittar på dig och skakar på huvudet. Du verkar inte få komma in av någon anledning.';
    } else {
      this.href = '/rooms/rum4.html';
    }
  });
};
</script>
