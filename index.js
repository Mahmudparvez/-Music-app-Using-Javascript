window.addEventListener( 'load' , () => {

	const sounds = document.querySelectorAll(".sound");
	const pads   = document.querySelectorAll(".pads div");
	const visual = document.querySelectorAll(".visual");
	const colors = [
	       "#60d394",
	       "#d36060",
	       "#c060d3",
	       " #d3d160",
	       "#6860d3",
	       "#6860d3",
	]
 //Lest get going with the sound here
 pads.forEach( (pad,index) => {
 	 pad.addEventListener("click", function(){
 	 	sounds[index].currentTime = 0;
 	 	sounds[index].play();
 	 	createBubble(index);
 	 });

 });


 //Create a function that makes bubbles
 const createBubble = index => {
 	//createbubble

 const bubble = document.createElement("div");

 

 visual.appendChild(bubble);
 bubble.style.backgroundColor =colors[index];
 bubble.style.animation ="Jump is case";
 bubble.addEventListener( 'animationend', function(){

           visual.removeChild(this);
 });


};


});

console.log(sounds);