(() => {
	console.log ('video stuff loaded!')
	//variables have to come first//
	//then grab the video//
	const vidPlayer = document.querySelector ('video'),
		  pauseButton = document.querySelectorAll('button')[0],
		  playButton = document.querySelectorAll('button')[1],
		  rewindButton = document.querySelectorAll('button')[2];
		  
	//functions go in the middle//
	
	function volOn() {
		vidPlayer.muted = false;
	}
	
	function volOff() {
		vidPlayer.muted = true;
	}
	
	
		function startVideo () {
			vidPlayer.play();
			//tells the video to play when someone clicks it//
		}
	
	function stopVideo () {
		vidPlayer.pause();
	}
	
	function rewindVideo () {
		vidPlayer.currentTime-=5;
	}
	
	
vidPlayer.addEventListener('mouseover',volOn);
vidPlayer.addEventListener('mouseout', volOff);
	
	playButton.addEventListener('click', startVideo)
	pauseButton.addEventListener('click', stopVideo)
	rewindButton.addEventListener('click', rewindVideo)
})();
