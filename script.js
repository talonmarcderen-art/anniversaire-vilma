const accueil = document.getElementById("accueil");
const question = document.getElementById("question");
const message = document.getElementById("message");

const boutonCommencer = document.getElementById("btnCommencer");
const boutonOui = document.getElementById("oui");
const boutonNon = document.getElementById("non");

const texte = document.getElementById("texte");

const messageAnniversaire = `En ce jour spécial pour toi, joyeux anniversaire à toi.

Je te souhaite une année remplie de bonheur, de santé, de réussite et de belles surprises. Que tous tes projets avancent comme tu le souhaites et que tu gardes toujours ce sourire qui te rend si chouette, même si tu as tes caprices.

On se connaît depuis peu, mais nos discussions sont assez chill. Bon... il faut aussi dire que tu es sacrément têtue et que tu adores les palabres. Parfois j'arrive pas à te cerner, on dirait que tu as la tête dans les nuages.

J'aime quand même passer du temps à discuter avec toi. Tu me plais énormément et te voir me ferait vraiment plaisir pour mieux te connaître en face à face. (Toi, on dirait que tu n'aimes pas les appels vidéo 🙄🙄).

Profite pleinement de cette journée et n'oublie pas de me faire dépôt pour payer une bière en ton nom 🌚.

Tu mérites d'être entourée de bonnes personnes, de rire, de recevoir plein d'attentions... (c'est-à-dire MOI 😌).

Et pour aujourd'hui seulement, je promets de ne pas te provoquer 😏.

Passe un merveilleux anniversaire. 💋💋💋`;

boutonCommencer.addEventListener("click", function () {
    accueil.style.display = "none";
    question.style.display = "block";
});

boutonOui.addEventListener("click", function () {

  const music = document.getElementById("music");

if (music) {
    music.volume = 0;
    music.play();

    // montée progressive du volume
    let vol = 0;
    const fade = setInterval(() => {
        if (vol < 1) {
            vol += 0.05;
            music.volume = vol;
        } else {
            clearInterval(fade);
        }
    }, 200);
}
    document.body.classList.add("mode-anniversaire");

    question.style.display = "none";
   message.style.display = "block";
setTimeout(() => {
    message.classList.add("show");
}, 100);

    let i = 0;
    texte.innerHTML = "";

    const machine = setInterval(function () {

        texte.innerHTML += messageAnniversaire.charAt(i);
        i++;

        if (i >= messageAnniversaire.length) {
            clearInterval(machine);
        }

    }, 35);

    createStars();
    createButterflies();
});

setTimeout(() => {
    const photos = document.querySelectorAll(".photo");

    photos.forEach((photo, index) => {
        setTimeout(() => {
            photo.classList.add("show");
        }, index * 400);
    });

}, 1500);

setTimeout(() => {
    const finalMsg = document.getElementById("finalMessage");
    if (finalMsg) {
        finalMsg.classList.add("show");
    }
}, 3000);

if (boutonNon) {
    boutonNon.addEventListener("mouseover", function () {

        const x = Math.random() * (window.innerWidth - 100);
        const y = Math.random() * (window.innerHeight - 60);

        boutonNon.style.position = "absolute";
        boutonNon.style.left = x + "px";
        boutonNon.style.top = y + "px";
    });
}

function createStars() {
    const container = document.getElementById("stars");

    if (!container) return;

    for (let i = 0; i < 30; i++) {
        const star = document.createElement("div");
        star.classList.add("star");
        star.innerHTML = "✨";

        star.style.left = Math.random() * 100 + "vw";
        star.style.animationDuration = (3 + Math.random() * 4) + "s";
        star.style.fontSize = (10 + Math.random() * 18) + "px";

        container.appendChild(star);
    }
}
function createStars() {
    const container = document.getElementById("stars");

    if (!container) return;

    for (let i = 0; i < 30; i++) {
        const star = document.createElement("div");
        star.classList.add("star");
        star.innerHTML = "✨";

        star.style.left = Math.random() * 100 + "vw";
        star.style.animationDuration = (3 + Math.random() * 4) + "s";
        star.style.fontSize = (10 + Math.random() * 18) + "px";

        container.appendChild(star);
    }
}

function createButterflies() {
    const container = document.getElementById("butterflies");

    if (!container) return;

    for (let i = 0; i < 12; i++) {
        const butterfly = document.createElement("div");
        butterfly.classList.add("butterfly");
        butterfly.innerHTML = "🦋";

        butterfly.style.left = Math.random() * 100 + "vw";
        butterfly.style.animationDuration = (6 + Math.random() * 4) + "s";
        butterfly.style.fontSize = (15 + Math.random() * 15) + "px";

        container.appendChild(butterfly);
    }
}
