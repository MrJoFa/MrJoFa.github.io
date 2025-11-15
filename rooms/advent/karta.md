# Världen 
Vilka länder ser ni på kartan? 
<img src="/assets/images/advent/advent-karta.png"> 
De första bokstäverna i ländernas namn bildar ett lösenord. 

<!-- Frågebox som kräver rätt svar för att länken vidare ska fungera -->
<input type="text" id="answer" placeholder="Vad är lösenordet?">
<button onclick="checkAnswer()">Skicka</button>

<p id="message"></p>
<a href="advent2.html" id="nextLink" style="display:none;">Gå vidare!</a>

<script>
const correctHash = "cGVwcGFya2FrYQ=="; 

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