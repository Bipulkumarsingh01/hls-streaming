var player = videojs('example-video');

player.ready(function() {
    player.play().catch(function(error) {
        console.error('Autoplay failed:', error);
    });
});

function pauseVideo() {
    player.pause();
}

function resumeVideo() {
    player.play();
}

function forward() {
    player.currentTime(player.currentTime() + 10);
}

function backward() {
    player.currentTime(player.currentTime() - 10);
}

function increaseSpeed() {
    player.playbackRate(player.playbackRate() + 0.25);
}

function decreaseSpeed() {
    player.playbackRate(player.playbackRate() - 0.25);
}
