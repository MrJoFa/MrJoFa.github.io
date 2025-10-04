---
layout: default
title: Bodhiträdet
---

På platsen finns ett bodhiträd som sägs ha vuxit från det träd som Buddha satt och mediterade under tills han insåg sanningen om lidandet och blev upplyst.  
Trädet har varit en viktig plats för buddhister att besöka i över två tusen år.

<img src="/assets/images/Bodh_Gaya_Bodhi_Tree.jpg" style="max-width:100%;height:auto;">

---

## Escape Room: De fyra ädla sanningarna

Dra varje sanning till rätt förklaring. När alla fyra är rätt får ni koden och kan gå vidare!

<div class="container">
  <div class="cards">
    <div class="card" draggable="true" id="card3">Sanningen om befrielsen från lidandet</div>
    <div class="card" draggable="true" id="card7">Sanningen om att meditation</div> <!-- fel -->
    <div class="card" draggable="true" id="card1">Sanningen om lidandet</div>
    <div class="card" draggable="true" id="card2">Sanningen om hur lidandet kom till</div>
    <div class="card" draggable="true" id="card5">Sanningen om att bli rik</div> <!-- fel -->
    <div class="card" draggable="true" id="card4">Sanningen om den åttafaldiga vägen</div>
    <div class="card" draggable="true" id="card6">Sanningen om Buddha</div> <!-- fel -->
    
  </div>

  <div class="slots">
    <div class="slot" data-answer="card1">Allt är lidande, att födas, leva och dö.</div>
    <div class="slot" data-answer="card2">Lidandet beror på begär och girighet.</div>
    <div class="slot" data-answer="none">Du ska inte ljuga.</div> <!-- fel -->
    <div class="slot" data-answer="card3">Människor måste sluta önska sig det de inte har.</div>
    <div class="slot" data-answer="card4">Vägen ut ur lidandet är den åttafaldiga vägen, medelvägen.</div>
    <div class="slot" data-answer="none">Att alltid vinna spel är viktigt.</div> <!-- fel -->
    <div class="slot" data-answer="none">Rikedom ger alltid lycka.</div> <!-- fel -->
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
        feedback.innerHTML = "Rätt! Du kan gå vidare.<br><a href='rum3-3.html'>Gå vidare!</a>";
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
