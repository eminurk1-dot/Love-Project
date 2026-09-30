/* =====================================================
   ELEMENT
===================================================== */

const opening =
    document.getElementById("opening");

const heartButton =
    document.getElementById("heartButton");

const garden =
    document.getElementById("garden");

const flowers =
    document.getElementById("flowers");

const particles =
    document.getElementById("particles");

const romanticMessage =
    document.getElementById("romanticMessage");

const letterScene =
    document.getElementById("letterScene");

const envelope =
    document.getElementById("envelope");

const letterModal =
    document.getElementById("letterModal");

const closeLetter =
    document.getElementById("closeLetter");

const letterText =
    document.getElementById("letterText");

const replay =
    document.getElementById("replay");

const stars =
    document.getElementById("stars");


/* =====================================================
   ISI SURAT
===================================================== */

const loveMessage = `Aku mungkin tidak pandai dalam merangkai kata yang sangat indah.

Tapi setiap kali memikirkan seseorang yang membuat hari terasa lebih hangat, namamu selalu ada di sana.

Terima kasih sudah hadir dan menjadi bagian paling menyenangkan dalam hidupku.
Terima kasih sudah selalu jadi tempat pulang ternyaman yang selalu tau cara membuat aku tersenyum bahkan dihari terberat sekalipun.
Terima kasih sudah memilih untuk berjalan bersamaku dan merangkai cerita yang indah. I'm really lucky to have you.

Aku berharap kamu selalu tahu bahwa ada seseorang yang ingin melihatmu tersenyum, menemani langkahmu, dan menyayangimu dengan tulus.

I LOVE YOU. ♡`;


/* =====================================================
   VARIABLE
===================================================== */

let started = false;

let heartTimer;


/* =====================================================
   BINTANG
===================================================== */

function createStars() {

    const total =
        window.innerWidth < 650
            ? 65
            : 110;


    for (
        let i = 0;
        i < total;
        i++
    ) {

        const star =
            document.createElement("span");


        star.className =
            "star";


        star.style.setProperty(
            "--x",
            `${Math.random() * 100}%`
        );


        star.style.setProperty(
            "--y",
            `${Math.random() * 75}%`
        );


        star.style.setProperty(
            "--size",
            `${1 + Math.random() * 2.5}px`
        );


        star.style.setProperty(
            "--opacity",
            `${0.2 + Math.random() * 0.7}`
        );


        star.style.setProperty(
            "--duration",
            `${1.5 + Math.random() * 3}s`
        );


        star.style.setProperty(
            "--delay",
            `${Math.random() * 4}s`
        );


        stars.appendChild(star);

    }

}


/* =====================================================
   MEMBUAT BANYAK TULIP
===================================================== */

function createFlowers() {

    flowers.innerHTML = "";


    const flowerData = [

        /* BELAKANG */

        {
            left: "24%",
            height: "245px",
            delay: ".1s",
            scale: ".72"
        },

        {
            left: "29%",
            height: "275px",
            delay: ".2s",
            scale: ".80"
        },

        {
            left: "35%",
            height: "250px",
            delay: ".35s",
            scale: ".75"
        },

        {
            left: "41%",
            height: "315px",
            delay: ".5s",
            scale: ".88"
        },


        /* TENGAH */

        {
            left: "46%",
            height: "360px",
            delay: ".65s",
            scale: "1.08"
        },

        {
            left: "51%",
            height: "345px",
            delay: ".8s",
            scale: "1"
        },

        {
            left: "56%",
            height: "375px",
            delay: ".95s",
            scale: "1.08"
        },

        {
            left: "61%",
            height: "325px",
            delay: "1.1s",
            scale: ".95"
        },


        /* SAMPING KANAN */

        {
            left: "66%",
            height: "290px",
            delay: "1.25s",
            scale: ".86"
        },

        {
            left: "71%",
            height: "260px",
            delay: "1.4s",
            scale: ".78"
        },

        {
            left: "76%",
            height: "230px",
            delay: "1.55s",
            scale: ".70"
        },


        /* DEPAN */

        {
            left: "31%",
            height: "205px",
            delay: "1.7s",
            scale: ".68"
        },

        {
            left: "37%",
            height: "230px",
            delay: "1.85s",
            scale: ".76"
        },

        {
            left: "43%",
            height: "250px",
            delay: "2s",
            scale: ".82"
        },

        {
            left: "57%",
            height: "245px",
            delay: "2.15s",
            scale: ".82"
        },

        {
            left: "64%",
            height: "225px",
            delay: "2.3s",
            scale: ".75"
        }

    ];


    flowerData.forEach(
        (data) => {

            const flower =
                document.createElement("div");


            flower.className =
                "flower";


            flower.style.setProperty(
                "--left",
                data.left
            );


            flower.style.setProperty(
                "--stem-height",
                data.height
            );


            flower.style.setProperty(
                "--delay",
                data.delay
            );


            flower.style.setProperty(
                "--flower-scale",
                data.scale
            );


            flower.innerHTML = `

                <div class="stem"></div>


                <div class="leaf leaf-left"></div>

                <div class="leaf leaf-right"></div>


                <div class="flower-head">

                    <span
                        class="
                            tulip-petal
                            petal-back-left
                        "
                    ></span>


                    <span
                        class="
                            tulip-petal
                            petal-back-right
                        "
                    ></span>


                    <span
                        class="
                            tulip-petal
                            petal-left
                        "
                    ></span>


                    <span
                        class="
                            tulip-petal
                            petal-center
                        "
                    ></span>


                    <span
                        class="
                            tulip-petal
                            petal-right
                        "
                    ></span>


                    <span
                        class="tulip-center"
                    ></span>

                </div>

            `;


            flowers.appendChild(
                flower
            );

        }
    );

}


/* =====================================================
   PARTIKEL
===================================================== */

function createParticles() {

    particles.innerHTML = "";


    for (
        let i = 0;
        i < 32;
        i++
    ) {

        const particle =
            document.createElement("span");


        particle.className =
            Math.random() > .72
                ? "particle heart"
                : "particle";


        if (
            particle.classList.contains(
                "heart"
            )
        ) {

            particle.textContent = "♥";

        }


        particle.style.setProperty(
            "--x",
            `${Math.random() * 100}%`
        );


        particle.style.setProperty(
            "--size",
            `${2 + Math.random() * 5}px`
        );


        particle.style.setProperty(
            "--duration",
            `${5 + Math.random() * 6}s`
        );


        particle.style.setProperty(
            "--delay",
            `${Math.random() * 6}s`
        );


        particle.style.setProperty(
            "--drift",
            `${-40 + Math.random() * 80}px`
        );


        particles.appendChild(
            particle
        );

    }

}


/* =====================================================
   HATI TERBANG
===================================================== */

function createFloatingHeart() {

    if (!started) return;


    const heart =
        document.createElement("span");


    heart.className =
        "particle heart";


    heart.textContent =
        "♥";


    heart.style.setProperty(
        "--x",
        `${20 + Math.random() * 60}%`
    );


    heart.style.setProperty(
        "--size",
        `${12 + Math.random() * 13}px`
    );


    heart.style.setProperty(
        "--duration",
        `${5 + Math.random() * 3}s`
    );


    heart.style.setProperty(
        "--delay",
        "0s"
    );


    heart.style.setProperty(
        "--drift",
        `${-60 + Math.random() * 120}px`
    );


    particles.appendChild(
        heart
    );


    setTimeout(
        () => heart.remove(),
        9000
    );

}


/* =====================================================
   MENGETIK SURAT
===================================================== */

function typeLetter() {

    letterText.textContent = "";


    let index = 0;


    const typingSpeed = 28;


    function type() {

        if (
            index >= loveMessage.length
        ) {

            return;

        }


        letterText.textContent +=
            loveMessage[index];


        index++;


        setTimeout(
            type,
            typingSpeed
        );

    }


    type();

}


/* =====================================================
   MULAI CERITA
===================================================== */

function startStory() {

    if (started) return;


    started = true;


    heartButton.disabled = true;


    /* LOVE MENGHILANG */

    opening.classList.add(
        "hide"
    );


    /* TAMAN MUNCUL */

    setTimeout(
        () => {

            garden.classList.add(
                "show"
            );


            garden.setAttribute(
                "aria-hidden",
                "false"
            );


            createFlowers();

            createParticles();

        },

        650
    );


    /* TULISAN MUNCUL */

    setTimeout(
        () => {

            romanticMessage.classList.add(
                "show"
            );

        },

        4300
    );


    /* SURAT MUNCUL */

    setTimeout(
        () => {

            letterScene.classList.add(
                "show"
            );


            letterScene.setAttribute(
                "aria-hidden",
                "false"
            );


            replay.classList.add(
                "show"
            );

        },

        7600
    );


    /* HATI KECIL */

    heartTimer =
        setInterval(
            createFloatingHeart,
            900
        );

}


/* =====================================================
   KLIK LOVE
===================================================== */

heartButton.addEventListener(
    "click",
    startStory
);


/* =====================================================
   KLIK AMPLOP
===================================================== */

envelope.addEventListener(
    "click",
    () => {

        envelope.classList.add(
            "open"
        );


        setTimeout(
            () => {

                letterModal.classList.add(
                    "show"
                );


                letterModal.setAttribute(
                    "aria-hidden",
                    "false"
                );


                typeLetter();

            },

            650
        );

    }
);


/* =====================================================
   TUTUP SURAT
===================================================== */

closeLetter.addEventListener(
    "click",
    () => {

        letterModal.classList.remove(
            "show"
        );


        letterModal.setAttribute(
            "aria-hidden",
            "true"
        );

    }
);


/* =====================================================
   KLIK BACKDROP
===================================================== */

document
    .querySelector(".modal-backdrop")
    .addEventListener(
        "click",
        () => {

            letterModal.classList.remove(
                "show"
            );


            letterModal.setAttribute(
                "aria-hidden",
                "true"
            );

        }
    );


/* =====================================================
   ESC
===================================================== */

document.addEventListener(
    "keydown",
    (event) => {

        if (
            event.key === "Escape"
        ) {

            letterModal.classList.remove(
                "show"
            );

        }

    }
);


/* =====================================================
   RESET / ULANGI
===================================================== */

function resetStory() {

    started = false;


    clearInterval(
        heartTimer
    );


    opening.classList.remove(
        "hide"
    );


    garden.classList.remove(
        "show"
    );


    garden.setAttribute(
        "aria-hidden",
        "true"
    );


    romanticMessage.classList.remove(
        "show"
    );


    letterScene.classList.remove(
        "show"
    );


    letterScene.setAttribute(
        "aria-hidden",
        "true"
    );


    letterModal.classList.remove(
        "show"
    );


    letterModal.setAttribute(
        "aria-hidden",
        "true"
    );


    envelope.classList.remove(
        "open"
    );


    replay.classList.remove(
        "show"
    );


    flowers.innerHTML = "";

    particles.innerHTML = "";


    setTimeout(
        () => {

            heartButton.disabled =
                false;

        },

        1200
    );

}


replay.addEventListener(
    "click",
    resetStory
);


/* =====================================================
   INITIALIZE
===================================================== */

createStars();


setTimeout(
    () => {

        createParticles();

    },
    300
);
