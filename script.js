const lagu = document.getElementById("lagu");
const musicButton = document.getElementById("music-button");
const surpriseButton = document.getElementById("surprise-button");
const surpriseMessage = document.getElementById("surprise-message");

const pesanKejutan = [
    "Kamu sudah berusaha sejauh ini. Itu juga sesuatu yang patut dibanggakan.",
    "Kalau hari ini terasa berat, istirahat sebentar juga nggak apa-apa.",
    "Kamu nggak harus jago semuanya. Terus belajar aja, ya!",
    "Jangan lupa makan, minum, dan kasih waktu buat diri sendiri.",
    "Satu langkah kecil tetap bikin kamu bergerak maju. Semangat!"
];

musicButton.addEventListener("click", async () => {
    if (lagu.paused) {
        try {
            await lagu.play();
        } catch (error) {
            console.error("Lagu tidak dapat diputar:", error);
            musicButton.textContent = "Lagu gagal diputar";
            return;
        }
    } else {
        lagu.pause();
    }
});

lagu.addEventListener("play", () => {
    musicButton.textContent = "❚❚ Jeda lagu";
    musicButton.setAttribute("aria-pressed", "true");
});

lagu.addEventListener("pause", () => {
    musicButton.textContent = "▶ Putar lagu";
    musicButton.setAttribute("aria-pressed", "false");
});

lagu.addEventListener("ended", () => {
    musicButton.textContent = "▶ Putar lagu";
    musicButton.setAttribute("aria-pressed", "false");
});

surpriseButton.addEventListener("click", () => {
    const pesanAcak = pesanKejutan[Math.floor(Math.random() * pesanKejutan.length)];
    surpriseMessage.textContent = pesanAcak;
});
