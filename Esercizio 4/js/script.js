// --------------------------------- MATRIX RAIN ---------------------------------------- //

//get character from the compiled text form
function getString() {
    let chars = document.getElementById("to-rain").value;
    chars = chars.split("");
    console.log(chars);
    return chars;
}

//set canvas
var canvas = document.getElementById("matrix");
var ctx = canvas.getContext("2d");

canvas.height = window.innerHeight*0.95; //max height
canvas.width = window.innerWidth*0.95; // max width


var fontSize = 12;
var columns = canvas.width/fontSize; //number of columns for the rain

var drops = []; //an array of drops

for(let i = 0; i < columns; i++) //fill the array with one drop per column
	drops[i] = 1; 

//drawing the characters rain
function draw()
{
    let chars = getString(); //get array of characters
	
	ctx.fillStyle = "rgba(0, 0, 0, 0.05)"; //Black BG for the canvas and translucent BG to show trail
	ctx.fillRect(0, 0, canvas.width, canvas.height);
	
	ctx.fillStyle = "#0F0"; //text color and font
	ctx.font = fontSize + "px arial"; 

	for(let i = 0; i < drops.length; i++)	//looping over drops
	{
		let text = chars[Math.floor(Math.random()*chars.length)]; //a random character to print

		ctx.fillText(text, i*fontSize, drops[i]*fontSize);	//x = i*fontSize, y = value of drops[i]*fontSize
		
		if(drops[i]*fontSize > canvas.height && Math.random() > 0.975) { //sending the drops back to the top randomly
			drops[i] = 0;
        }
		
		drops[i]++; //incrementing Y coordinate
	}
}




