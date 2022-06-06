//------------------------------------ LOGO ANIMATION -------------------------------- //

var id = null;
function logoAnim() {
  var logo = document.getElementById("logo");
  var pos = 0;
  clearInterval(id);
  id = setInterval(frame, 10);
  function frame() {
    if (pos == (screen.width -200)/ 2) {
      clearInterval(id);
    } else {
      pos++;
      logo.style.left = pos + 'px';
    }
  }
} 

//------------------------------------ ALERT -------------------------------- //

function alert1() {
    let trumpet = new Audio('/audio/party-trumpet.mp3');
    trumpet.play()
    setTimeout(function(){alert("Complimenti! Sei il milionesimo visitatore!");},1000);
}

//------------------------------------ RANDOM QUOTES GERATOR -------------------------------- //

function generateQuotes() {
    const quotes = [
        {quote:"<i>Faccio la doccia ogni secondo giovedì del mese.</i>",
        author:"Mahatma Gandhi"},

        {quote:"<i>Meglio soli che male accompagnati.</i>",
        author:"Robinson Crusoe"},

        {quote:"<i>A caval donato non si guarda in bocca.</i>",
        author:"Laocoonte"},

        {quote:"<i>Del senno di poi son piene le fosse.</i>",
        author:"Josif Stalin"}
    ];
    let arrayIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById("quotes").innerHTML = quotes[arrayIndex].quote;
    document.getElementById("author").innerHTML = quotes[arrayIndex].author;
    console.log('Ho generato una nuova citazione');
}

