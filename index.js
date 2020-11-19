var buttons=document.querySelectorAll("button");
//USING FOR LOOP
for(var i=0;i<buttons.length;i++)
{
	buttons[i].addEventListener("click",function(){
		var button=this.textContent;
		checkButton(button);
		animateButton(button);
	});
}
document.addEventListener("keypress",function(event){
	checkButton(event.key);
	animateButton(event.key);
});

function checkButton(button){
	switch(button){
			case 'w':
				var audio=new Audio('sounds/tom-1.mp3');
				audio.play();
				break;
			case 'a':
				var audio=new Audio('sounds/tom-2.mp3');
				audio.play();
				break;
			case 's':
				var audio=new Audio('sounds/tom-3.mp3');
				audio.play();
				break;
			case 'd':
				var audio=new Audio('sounds/tom-4.mp3');
				audio.play();
				break;
			case 'j':
				var audio=new Audio('sounds/snare.mp3');
				audio.play();
				break;
			case 'k':
				var audio=new Audio('sounds/crash.mp3');
				audio.play();
				break;
			case 'l':
				var audio=new Audio('sounds/kick-bass.mp3');
				audio.play();
				break;
			default:
				console.log(button);
		}
}
function animateButton(button){
	var activeButton= document.querySelector("."+button);
	activeButton.classList.add("pressed");
	setTimeout(function(){
		activeButton.classList.remove("pressed");
	},100);
}
	
	
