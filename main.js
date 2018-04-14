(() => {
	console.log('video stuff loaded!');

	String.prototype.capIt = function(){return this.replace(this.charAt(), this.charAt().toUpperCase());}


	//variable stack goes here

	var houseName = ['Stark','Baratheon', 'Lannister', 'Tully', 'Greyjoy', 'Arryn', 'Frey', 'Targaryen', 'Tyrell'];
	let sigils = document.querySelectorAll('.sigilContainer'),
		lightbox = document.querySelector('.lightbox'),
		closeLightboxButton = lightbox.querySelector('.close-lightbox'),
		vidPlayer = document.querySelector('video'),
		vidControls = document.querySelector('.controls'),
		imageBanner = document.querySelector('#houseImages');


	// functions in the middle

	function showHouseVideo () {
		let houseName = this.className.split(' ')[1].capIt();
		//split apart the class name on th eelement, grab the house from the result.

		document.querySelector('h1').textContent = `House ${houseName}`;
		//debugger
		lightbox.classList.add('show-lightbox');
		//make it play
		vidPlayer.src =`video/House-${houseName}.${vidPlayer.currentSrc.split('.')[1]}`;
		vidPlayer.load();
		vidPlayer.play();
		//debugger

		scrollBanners(this.dataset.offset)

	}

	function scrollBanners(offset)
	//move banners to the left
	{
		let moveIt = offset * 600 + "px";

		imageBanner.style.right = moveIt;
	}


	function pausePlay () {
		//debugger;
		let theButton = this.firstElementChild;
		//
		if(vidPlayer.paused == true) {
			//play the video
			vidPlayer.play();
			theButton.dataset.icon="pause-circle";
		}

	else
		{
		vidPlayer.pause();
		theButton.dataset.icon="play-circle";
		}
	}

	function volOnOff () {
		//debugger;
		let theButton = this.secondElementChild;
		//
		if(vidPlayer.volOn == true) {
			//play the video
			vidPlayer.volOff();
			theButton.dataset.icon="volume-off";
		}

	else
		{
		vidPlayer.volOn();
		theButton.dataset.icon="volume-up";
		}
	}




	function closeLightbox (){
		//debugger
		lightbox.classList.remove('show-lightbox');
		//stop the video and rewind it to 0
		vidPlayer.pause();
		vidPlayer.currentTime = 0;
	}


	// event handling at the bottom

	sigils.forEach(sigil => sigil.addEventListener('click', showHouseVideo));
	closeLightboxButton.addEventListener('click', closeLightbox);
	vidPlayer.addEventListener('ended', closeLightbox);
	vidControls.addEventListener('click', pausePlay);
	vidControls.addEventListener('click', volOnOff);

})();
