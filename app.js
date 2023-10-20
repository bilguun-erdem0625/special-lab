var slider = ["hehe.JFIF","love.JFIF","mlbb.JFIF","zigo.JFIF"];
var zurag = document.getElementsByTagName('img')[0];
console.log(zurag);
var i=0;
function next(){
	
	i++;
	zurag.src=slider[i];
	if(i>=slider.length-1){
		i=-1;
	}
}
function prev(){
	i--;
	if(i <0 ){
		i = slider.length -1
	}
	zurag.src=slider[i]
}
setTimeout(auto,5000);
var play;
function auto(){
	i++;
	zurag.src=slider[i];
	if(i>=slider.length-1){
		i=-1;
	}
	play = setTimeout(auto,3000);
}
function stop(){
	clearTimeout(play);
}