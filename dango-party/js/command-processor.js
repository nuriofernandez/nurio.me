/**
 * Detect's when someone types something anywhere in the website. 💻
 * Then, starts the desired effect for that keyword!
 */
let input = "";
let dangoCount = 0;
document.addEventListener('keypress',function(e){
    input += String.fromCharCode(e.keyCode).toLowerCase();
    if(input.endsWith("dango")) {
        const eventstop = new Event('command-effect-should-stop');
        document.dispatchEvent(eventstop);

        if(dangoCount >= 5) {
            const event = new Event('dango-party-effect-should-start');
            document.dispatchEvent(event);
            dangoCount=0;
            return;
        }

        const event = new Event('dango-effect-should-start');
        document.dispatchEvent(event);
        dangoCount++;
    }
});
