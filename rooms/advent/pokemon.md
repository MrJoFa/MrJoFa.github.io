---
layout: default
title: Pokémon
---

## Gotta catch 'em all

<img src="/assets/images/advent/pokemon.jpg">

Hitta Pokémonkorten tillsammans och addera sedan deras HP. 
Vad blir summan?

<img src="/assets/images/advent/p1.jpg">
<img src="/assets/images/advent/p2.jpg">
<img src="/assets/images/advent/p3.jpg">
<img src="/assets/images/advent/p4.jpg">
<img src="/assets/images/advent/p5.jpg">


<br>

<div>
  <input type="text" id="answer" placeholder="Vad blir summan?">
  <button onclick="checkAnswer()">Skicka</button>
</div>

<p id="message"></p>

<script>
const correctHash = "NjMw"; 

function checkAnswer() {
    const userAnswer = document.getElementById('answer').value.trim().toLowerCase();
    const message = document.getElementById('message');

    const userHash = btoa(userAnswer);

    if (userHash === correctHash) {
        message.textContent = "Rätt! Bra jobbat. Lösenodet är: marsipan. Ni får också välja varsin godis från pappas julklappar.";
        message.style.color = "green";
    } else {
        message.textContent = "Fel svar, försök igen!";
        message.style.color = "red";
    }
}
</script>

