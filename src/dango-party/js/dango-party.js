(() => {
    const domain = `${window.location.protocol}//${window.location.hostname}`;
    const dangoFallingElementId = "dango-party-effect";

    /**
     * Loads the dango song! 🍡🎶
     */
    let _audio;
    const getAudio = () => {
        if (!_audio) {
            _audio = new Audio(`${domain}/dango-party/audio/dango-party.mp3`);
            _audio.loop = true;
        }
        return _audio;
    }

    /**
     * Starts the dango falling and plays the dango song! 🍡🎶
     */
    document.addEventListener('dango-party-effect-should-start', () => {
        // Add css style to make dangos fall. 🍃
        const style = document.createElement("link");
        style.setAttribute("id", `${dangoFallingElementId}-css`);
        style.setAttribute("rel", "stylesheet");
        style.setAttribute("type", "text/css");
        style.setAttribute("href", `${domain}/dango-party/css/dango-party.css`);
        document.getElementsByTagName("head")[0].appendChild(style);

        // Create the area where the dangos will fall, and spawn some dangos. 📦
        const loader = document.createElement("div");
        loader.setAttribute("class", "loader");
        loader.setAttribute("id", dangoFallingElementId);
        for (let i = 0; i <= 30; i++) {
            // Each span element will represent a dango
            loader.appendChild(document.createElement("span"));
        }
        
        // Spawn dango loader
        let body = document.getElementsByTagName("body")[0];
        body.insertBefore(loader, body.firstChild);

        // Play the dango song!! 💞
        const audio = getAudio();
        audio.currentTime = 0;
        audio.play();
    });

    /**
     * Stops the dango falling and pauses the dango song! 🍡🎶
     */
    document.addEventListener('command-effect-should-stop', () => {
        const audio = getAudio();
        audio.pause();
        document.querySelector(`#${dangoFallingElementId}`)?.remove();
        document.querySelector(`#${dangoFallingElementId}-css`)?.remove();
    });
})();