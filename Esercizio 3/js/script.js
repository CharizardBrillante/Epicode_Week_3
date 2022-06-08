function randomDate() {
    let now = new Date();
    return new Date(now.getTime() + Math.random() * (new Date(2080,0,1).getTime() - now.getTime()));
}

let deathDate = randomDate();  

function countDown(deathDate) {
    
    let now = new Date().getTime();
    let distance = deathDate.getTime() - now;
    let years = Math.floor(distance / (1000 * 60 * 60 * 24 * 30 * 12));
    let months = Math.floor((distance % (1000 * 60 * 60 * 24 * 30 * 12)) / (1000 * 60 * 60 * 24 * 30)) ;
    let days = Math.floor((distance % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);
    document.getElementById("timer").innerHTML = `<h2>Morirai tra:</h2><p>${years}y ${months}mo ${days}d ${hours}h ${minutes}m ${seconds}s</p>
    <img src="img/grave.svg">`;
}

