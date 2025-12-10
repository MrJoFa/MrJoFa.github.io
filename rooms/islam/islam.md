---
layout: islam
title: Islam Escape Room
---

# Välkommen! 
Du har blivit inbjuden att besöka platsen där profeten Muhammed föddes och som anses vara den heligaste platsen inom islam.  
Låt din resa börja! 


### Klicka på landet där profeten Muhammed föddes.

<img src="/assets/images/world.gif" usemap="#worldmap" alt="Världskarta" width="1200" height="617">

<!-- Image map from https://www.image-map.net/ -->
<map name="worldmap">
  <!-- Saudiarabien -->
  <area target="" alt="Saudiarabien" title="Saudiarabien" href="islam-rum1.html" coords="673,202,691,190,737,230,702,245" shape="poly"> 
  
   <area target="" alt="Iran" title="Iran" href="#" coords="698,168,717,194,757,212,746,176" shape="poly"
   onclick="showPopup('Nära! Muhammed föddes på arabiska halvön.')">
  
  <!-- Indien -->
  <area target="" alt="Indien" title="Indien" href="#" 
        coords="792,209,841,270" shape="rect"
        onclick="showPopup('Det var här buddhismen uppstod. Mohammed föddes i mellanöstern')">

  <!-- Sverige -->
  <area target="" alt="Sverige" title="Sverige" href="#" 
        coords="603,69,618,101" shape="rect" 
        onclick="showPopup('Nej, asatron kommer från skandinavien. Islam kommer från asien')">

  <!-- Nepal -->
  <area target="" alt="Nepal" title="Nepal" href="#" 
        coords="854,197,811,207" shape="rect" 
        onclick="showPopup('Rätt världsdel, men det var inte här islam uppkom!')">

  <!-- USA -->
  <area target="" alt="USA" title="USA" href="#" 
        coords="195,134,331,197" shape="rect" 
        onclick="showPopup('Nej, tänk Asien!')">

  <!-- Brasilien (polygon) -->
  <area target="" alt="Brasilien" title="Brasilien" href="#" 
        coords="386,300,444,335,406,419,354,342,329,342,340,304,340,304" shape="poly" 
        onclick="showPopup('Nej, tänk Asien!')">

  <!-- Kina (polygon) -->
  <area target="" alt="Kina" title="Kina" href="#" 
        coords="816,130,792,164,816,189,861,195,889,217,926,220,943,199,923,171,948,144,911,121,896,140,879,157,861,157" shape="poly" 
        onclick="showPopup('Rätt världsdel, men det var inte här islam uppkom!')">
</map>


## Tips:
- Om du inte vet svaret kan du hitta information [här](https://www.so-rummet.se/kategorier/mekka).

<div id="game-popup">
  <div class="game-popup-box">
    <h3 id="game-popup-title">Meddelande</h3>
    <p id="game-popup-text"></p>
    <button onclick="closePopup()">Fortsätt</button>
  </div>
</div>

<style>
#game-popup {
  display: none;
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.7);
  z-index: 9999;
  justify-content: center;
  align-items: center;
  font-family: "Trebuchet MS", sans-serif;
}

.game-popup-box {
  background: #1e1e2f;
  color: #fff;
  padding: 25px 35px;
  border-radius: 16px;
  max-width: 420px;
  text-align: center;
  box-shadow: 0 0 20px rgba(0,255,255,0.3);
  border: 2px solid #3fffd8;
}

.game-popup-box h3 {
  margin-top: 0;
  font-size: 22px;
  color: #3fffd8;
}

.game-popup-box p {
  font-size: 18px;
  line-height: 1.4;
}

.game-popup-box button {
  margin-top: 20px;
  padding: 12px 24px;
  background: #3fffd8;
  color: #000;
  border: none;
  border-radius: 10px;
  font-size: 16px;
  cursor: pointer;
  font-weight: bold;
}
.game-popup-box button:hover {
  background: #2ddcc0;
}
</style>

<script>
function showPopup(text, title = "Ledtråd") {
  document.getElementById("game-popup-title").innerText = title;
  document.getElementById("game-popup-text").innerText = text;
  document.getElementById("game-popup").style.display = "flex";
}

function closePopup() {
  document.getElementById("game-popup").style.display = "none";
}
</script>