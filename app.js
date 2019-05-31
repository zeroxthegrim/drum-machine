window.addEventListener('keydown', function(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    
    if (!audio) return; // stops funciton from running
    audio.currentTime = 0; // rewinds it to 0
    audio.play();
    key.classList.add("playing");
    key.addEventListener('transitionend', function(e) {
        key.classList.remove("playing");
    });
});