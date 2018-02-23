//example from Dan Shiffman's Coding Train 10.4
//URL from http://open-notify.org/Open-Notify-API/People-In-Space/
var other;
function preload() {
	 other = loadJSON("champions.json", dataReceived);
}
function setup(){
  createCanvas(1000,1000);
	console.log(other.namefile.names.Thresh.stats.total.wins.normal);
	
}



function dataReceived(theData){
		console.log("it works");
		console.log(data);
	}
function draw(){
	fill(150, 205)
	if (other.namefile.names.Thresh.stats.total.wins.normal > other.namefile.names.Aatrox.stats.total.wins.normal){
		background(0);
		
		fill(150, 205);
		textfont("Thresh won the wining stat");
		
		
	}

}
    
