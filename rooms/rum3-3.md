---
layout: default
title: Bodhiträdet
---

På platsen finns ett bodhiträd som sägs ha vuxit från det träd som Buddha satt och mediterade under tills han insåg sanningen om lidandet och blev upplyst.  
Trädet har varit en viktig plats för buddhister att besöka i över två tusen år.


<img src="/assets/images/Bodh_Gaya_Bodhi_Tree.jpg" usemap="#tree" alt="Bhoditräd"
     width="1280" height="960" style="width:1280px; height:960px;">

<map name="tree">
  <!-- Munk -->
  <area alt="Munk" title="Munk" href="#"
        coords="68,646,248,904" shape="rect" onclick="showText('Du har uppvisat kunskap om de ädla sanningarna. Nästa steg är att behärska den åttafaldiga vägen')">

  <!-- Skylt -->
  <area alt="Skylt" title="Skylt" href="#"
        coords="521,596,632,669" shape="rect" onclick="showText('Under detta träd lärde Buddha ut de fyra ädla sanningarna: Sanningen om lidandet, sanningen om hur lidandet kom till, sanningen om befrielsen från lidandet och sanningen om den åttafaldiga vägen.')">
</map>

<!-- Popup-container (dold som standard) -->
<div id="popup" style="display:none; position:fixed; top:0; left:0; width:100%; height:100%;
     background:rgba(0,0,0,0.8); text-align:center; z-index:9999; color:white; padding:20px; box-sizing:border-box;">
  <span onclick="closePopup()" 
        style="color:white; font-size:30px; position:absolute; top:20px; right:30px; cursor:pointer;">&times;</span>
  <div id="popupText" style="max-width:90%; margin:100px auto; font-size:24px; line-height:1.4;"></div>
</div>

<script>
function showText(text) {
  document.getElementById('popupText').textContent = text;
  document.getElementById('popup').style.display = 'block';
}

function closePopup() {
  document.getElementById('popup').style.display = 'none';
}

// Stäng genom att klicka på bakgrunden
document.getElementById('popup').addEventListener('click', function(e) {
  if (e.target.id === 'popup') {
    closePopup();
  }
});
</script>

---

## Den åttafaldiga vägen

Den åttafaldiga vägen är Buddhas råd om hur man ska leva för att slippa lidande och nå nirvana. De handlar om att förstå buddhismens lära och att göra, säga och tänka rätt saker.


<div class="container">
  <div class="cards" id="cardsContainer">
    <div class="card" draggable="true" id="card2">Rätt inställning</div>
    <div class="card" draggable="true" id="card1">Rätt förståelse</div>
    <div class="card" draggable="true" id="card8">Rätt koncentration</div>
    <div class="card" draggable="true" id="card3">Rätt tal</div>
    <div class="card" draggable="true" id="card6">Rätt ansträngning</div>
    <div class="card" draggable="true" id="card5">Rätt levnadssätt</div>
    <div class="card" draggable="true" id="card7">Rätt uppmärksamhet</div>
    <div class="card" draggable="true" id="card4">Rätt handlingar</div>
  </div>

  <div class="slots">
    <div class="slot" data-answer="card1">Förstå Buddhas lära.</div>
    <div class="slot" data-answer="card2">Ha vänliga och kloka tankar.</div>
    <div class="slot" data-answer="card3">Tala sanning och inte ljuga.</div>
    <div class="slot" data-answer="card4">Gör bra saker och hjälp andra.</div>
    <div class="slot" data-answer="card5">Ha ett liv och yrke som inte skadar någon.</div>
    <div class="slot" data-answer="card6">Ansträng dig för att göra gott och undvika ont.</div>
    <div class="slot" data-answer="card7">Var medveten om kropp, känslor och tankar.</div>
    <div class="slot" data-answer="card8">Träna sinnet genom meditation och koncentration.</div>
  </div>
</div>

<p id="feedback" style="margin-top:20px; font-weight:bold; color:green;"></p>

<script>
const feedback = document.getElementById('feedback');

document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('dragstart', e => e.dataTransfer.setData('text', card.id));
});

document.querySelectorAll('.slot').forEach(slot => {
  slot.addEventListener('dragover', e => e.preventDefault());
  slot.addEventListener('drop', e => {
    e.preventDefault();
    const cardId = e.dataTransfer.getData('text');
    const card = document.getElementById(cardId);

    if(slot.dataset.answer === cardId){
      // Koppla kortet visuellt med förklaringen
      slot.innerHTML = `<strong>${card.textContent}</strong> - ${slot.textContent}`;
      slot.classList.add('correct');
      card.style.opacity = '0.5';  // Kortet markeras men syns fortfarande

      // Kontrollera om alla fyra rätta är placerade
      if([...document.querySelectorAll('.slot')].filter(s => ["card1","card2","card3","card4"].includes(s.dataset.answer)).every(s => s.classList.contains('correct'))){
        feedback.style.color = "green";
        feedback.innerHTML = "Rätt! Du kan gå vidare.<br><a href='rum3-4.html'>Gå vidare!</a>";
      }

    } else {
      feedback.textContent = "Fel kort, försök igen!";
      feedback.style.color = "red";
      // Ta bort meddelandet efter 2 sekunder om det inte fixas
      setTimeout(() => { feedback.textContent = ""; }, 2000);
    }
  });
});
</script>

<style>
.container { display: flex; flex-wrap: wrap; gap: 20px; justify-content: center; }
.cards, .slots { display: flex; flex-direction: column; gap: 10px; margin: 10px; width: 250px; }
.card, .slot { padding: 10px; border: 2px solid #4a7c59; border-radius: 5px; background: #fff; cursor: grab; text-align: center; }
.slot { min-height: 60px; display: flex; align-items: center; justify-content: center; background: #e0f2f1; }
.correct { background-color: #c8e6c9 !important; border-color: #2e7d32 !important; }
@media (max-width: 600px) {
  .container { flex-direction: column; align-items: center; }
  .cards, .slots { width: 90%; }
}
</style>
