//This Matrix Rain is inspired from https://codepen.io/P3R0/pen/MwgoKv
//I made some changes like var --> let. Updated the code. I learned about 
//this from The Coding Train's let and var tutorial. :-)

let c = document.querySelector('#matrix');
let ctx = c.getContext('2d');

//Making the canvas Full Screen

c.height = window.innerHeight;
c.width = window.innerWidth;

//The characters
let name = "01";

//Converting the string to array
name = name.split('');

let font_size = 10;
let columns = c.width / font_size;

let drops = [];

for(let x = 0; x < columns; x++)
	drops[x] = 1; 

function draw() {

	//inserting the calculations of the height and the width in the draw function
	let w, h;
	w = window.innerWidth;
	h = window.innerHeight;
	// body...
	ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
	ctx.fillRect(0, 0, w, h);


	//Sets the font color

	ctx.fillStyle = '#2ecc71';
	ctx.font = font_size + 'px arial';

	for(let i = 0; i < drops.length; i++) {
		let text = name[Math.floor(Math.random() * name.length)];
		ctx.fillText(text, i * font_size, drops[i] * font_size);

		if(drops[i] * font_size > c.height && Math.random() > 0.975)
			drops[i] = 0;

		drops[i]++;
	}
}

setInterval(draw, 35);

