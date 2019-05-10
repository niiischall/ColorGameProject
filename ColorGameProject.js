var numSquares = 6;
var pallete =[];
var pickedColor;

var squares = document.querySelectorAll(".colors");
var ColorDisplay = document.getElementById("colorDisplay");
var TextDisplay = document.getElementById("textDisplay");
var H1 = document.querySelector("h1");
var resbtn = document.querySelector("#res");
var modeBtn = document.querySelectorAll(".mode");

init();

function init()
{
	//Mode Buttons Event
	setupModeButtons();
    //Square Coloring Event
    reset();
    SquareColoring();
}

function setupModeButtons()
{
	for(var i=0;i<modeBtn.length;i++)
    {	
      modeBtn[i].addEventListener("click",function()
      {
        modeBtn[0].classList.remove("selected");
        modeBtn[1].classList.remove("selected");
        this.classList.add("selected");
        this.textContent === "Easy" ? numSquares = 3 : numSquares = 6;
        reset();
      });
    }  
}    

function SquareColoring()
{
	for(var i=0;i<squares.length;i++)
    {
	  //Adding Color
	  squares[i].style.background = pallete[i];
	  //Adding Event Listener
	  squares[i].addEventListener("click",function()
	  {
	    //grab color
	    var clickedColor = this.style.background;
	    //Check color
	    if(clickedColor === pickedColor)
	      {  
	      //change text
	   	  TextDisplay.textContent ="Correct";
	   	  changeColor(clickedColor);
	   	  H1.style.background = clickedColor;
	   	  resbtn.textContent = "Play Again?";
	      } 
	   else
	      { 
	      //change text
	   	  TextDisplay.textContent ="Try Again";
	   	  //change color
	   	  this.style.background = "#232323";
	      }
	    });
    }
}

function reset()
{
   pallete = pickingPallete(numSquares);
   pickedColor = pickColor();
   ColorDisplay.textContent = pickedColor;
   TextDisplay.textContent =null;
   resbtn.textContent = "New Colors";
   for(var i=0;i<squares.length;i++)
	{
		if(pallete[i])
		{
			squares[i].style.display = "block";
			squares[i].style.background = pallete[i];
		}
		else
		{
			squares[i].style.display = "none";
		}
	}
   H1.style.background = "steelblue";
}	

resbtn.addEventListener("click",function()
{
	reset();
});

function changeColor(color)
{
	for(var i=0;i<squares.length;i++)
	{
		squares[i].style.background = color;
	}
}

function pickColor()
{
	var randomColor = Math.floor(Math.random() * pallete.length);
	return pallete[randomColor];
}

function pickingPallete(num)
{
	var arr = [];

	for(var i=0;i<num;i++)
	{
		arr.push(randomPalleting());
	}
	return arr;
}

function randomPalleting()
{
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);

	return "rgb(" + r + ", " + g + ", " + b + ")";
}

