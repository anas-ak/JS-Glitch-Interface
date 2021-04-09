import GlitchedWriter, {
    wait
} from "https://cdn.skypack.dev/glitched-writer@2.0.20";

const Writer = new GlitchedWriter('#glitch_this', { letterize: true }, undefined, logString);

(async function() {
    await wait(1000);
    await Writer.write("My old friend.");
    await wait(1200);
    await Writer.write("This is just the beginning.");
    await wait(1500);
    await Writer.write("What is your command?");
    input.removeAttribute("disabled");
})();

function logString(string){
    logs.innerHTML += `<p>${string}</p>`;
}

input.addEventListener(
    "input",
    _.debounce(() => {
        Writer.write(input.value);
    }, 500)
);