var video = document.querySelector('#player1');

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video.autoplay = false;
	video.loop = false;
	console.log('Autoplay is set to ' + video.autoplay);
	console.log('Loop is set to ' + video.loop);

});

document.querySelector("#play").addEventListener("click", function() {
 	console.log("Play Video");
	 document.querySelector("#volume").innerHTML = video.volume * 100 + '%';
	 video.play();
	 console.log("Volume is " + video.volume * 100 + '%');
 });

