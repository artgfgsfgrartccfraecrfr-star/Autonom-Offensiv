const canvas = document.getElementById("noise");
const ctx = canvas.getContext("2d");

let width;
let height;

function resize() {
    width = Math.floor(window.innerWidth / 3);
    height = Math.floor(window.innerHeight / 3);

    canvas.width = width;
    canvas.height = height;
}

function generateNoise() {

    const imageData = ctx.createImageData(width, height);
    const data = imageData.data;

    for (let i = 0; i < data.length; i += 4) {

        const random = Math.random();

        let value;

        /*
         * Mostly almost-black.
         * Some darker gray pixels.
         * Occasional stronger static.
         */

        if (random > 0.985) {

            value = Math.floor(Math.random() * 55) + 20;

        } else if (random > 0.90) {

            value = Math.floor(Math.random() * 30) + 8;

        } else {

            value = Math.floor(Math.random() * 12);
        }

        data[i] = value;
        data[i + 1] = value;
        data[i + 2] = value;
        data[i + 3] = 255;
    }

    ctx.putImageData(imageData, 0, 0);
}

function animate() {

    generateNoise();

    requestAnimationFrame(animate);
}

window.addEventListener("resize", resize);

resize();
animate();
