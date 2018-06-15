

export default class Sound {
	constructor(file, loop, vol = 1) {
		this.audio = document.createElement("audio");
		this.audio.src = file;
		if (loop == "loop") {
			this.audio.loop = "loop";
		}
		this.audio.volume = vol;
		this.state = "stop";
	}
	play() {
		this.audio.currentTime = 0;
		this.audio.oncanplaythrough = () => {
			this.audio.play();
			this.state = 'play';
		};

	}
	pause() {
		this.audio.pause();
		this.state = 'pause';
	}
	stop() {
		this.audio.pause();
		this.audio.currentTime = 0;
		this.state = 'stop';
	}
	setVolume() {
		this.audio.volume = vol;
	}
}
