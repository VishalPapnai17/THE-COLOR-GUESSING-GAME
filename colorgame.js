var numberOfSquares = 6;
var colors =  generateRandomColors(numberOfSquares);
var h1 = document.querySelector("h1");
var square  = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("display"); 
var messageSelector = document.querySelector("#message");
var resetButton = document.querySelector("#button");
var easybtn = document.querySelector("#easybtn");
var hardbtn = document.querySelector("#hardbtn");
 

easybtn.addEventListener("click",function()
{	
	hardbtn.classList.remove("selected");
	easybtn.classList.add("selected");  
	numberOfSquares = 3;
	colors = generateRandomColors(numberOfSquares);

	pickedColor = pickColor();

	colorDisplay.textContent = pickedColor;

	for(var i=0;i<square.length;i++)
	{	if(colors[i])
		{
			square[i].style.backgroundColor = colors[i];
		}
		else
		{
			square[i].style.display = "none";	
		}	
	} 	
	h1.style.backgroundColor = "steelblue";
	resetButton.textContent = "NEW COLORS";
	message.textContent = " ";
});

hardbtn.addEventListener("click",function()
{	
	easybtn.classList.remove("selected");
	hardbtn.classList.add("selected");
	numberOfSquares = 6; 
	colors = generateRandomColors(numberOfSquares);
	
	pickedColor = pickColor();

	colorDisplay.textContent = pickedColor;

	for(var i=0;i<square.length;i++)
	{
		square[i].style.backgroundColor = colors[i];
		square[i].style.display = "block";
	}
	
	h1.style.backgroundColor = "steelblue";
	resetButton.textContent = "NEW COLORS";
	message.textContent = " ";
});

resetButton.addEventListener("click",function()
{	//generate all new colors
	colors = generateRandomColors(numberOfSquares);
	//pick a new random color from array
	pickedColor = pickColor();
	//change colordisplay to matched picked color
	colorDisplay.textContent = pickedColor;
	//change color of squares
	for(var i=0;i<square.length;i++)
	{
		square[i].style.backgroundColor = colors[i];
	} 
	h1.style.backgroundColor = "steelblue";
	resetButton.textContent = "NEW COLORS";
	message.textContent = " ";
});

colorDisplay.textContent = pickedColor;

for(var i=0;i<square.length;i++)
{	//add initial colors to the squares
    square[i].style.backgroundColor = colors[i];
    square[i].addEventListener("click",function()
    {	//grab color of clicked square
    	var clickedColor = this.style.backgroundColor;
    	//compare color to pickedcolor
    	if(clickedColor === pickedColor)
    	{	
    		messageSelector.textContent = "Correct!"; 
    		resetButton.textContent = "Play Again?";
    		//changing color of all the square to that of pickedcolor
    		for(var i=0; i<square.length;i++)
    		{
    			square[i].style.backgroundColor = pickedColor;
     		}		
     		h1.style.backgroundColor = clickedColor;
			     		
    	}	
    	else
    	{
    		this.style.backgroundColor = "#232323";
    		messageSelector.textContent = "Try Again!";
    	}
    });

}



function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}                
function generateRandomColors(num)
{
	//make an array
	var arr = [];
	//add num random colors to array
	for(var i=0;i<num;i++)
	{
		//get random color and push into array
		arr.push(randomColor());
	}
	//return that array
	return arr;
}

function randomColor()
{
	//pick a red from zero to 255
	var r = Math.floor(Math.random() * 256);
	//pick a green from 0 to 255
	var g = Math.floor(Math.random() * 256);
	//pick a blue from 0 to 255
	var b = Math.floor(Math.random() * 256);
	return "rgb("+ r +", "+ g +", "+ b +")";  
}