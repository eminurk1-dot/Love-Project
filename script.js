/* =================================
   MEMBUAT BINTANG
================================= */

const background =
    document.getElementById("background");


for (let i = 0; i < 100; i++) {

    const star =
        document.createElement("div");

    star.classList.add("star");

    star.style.left =
        Math.random() * 100 + "%";

    star.style.top =
        Math.random() * 80 + "%";

    star.style.animationDelay =
        Math.random() * 3 + "s";

    background.appendChild(star);

}



/* =================================
   TEKS HALAMAN PERTAMA
================================= */

const introText =
    document.getElementById("introText");


const introMessage =
    "I Have Something";


let introIndex = 0;


function typeIntro() {

    if (introIndex < introMessage.length) {

        introText.textContent +=
            introMessage.charAt(introIndex);

        introIndex++;

        setTimeout(typeIntro, 120);

    }

}


/* jalankan saat website dibuka */

typeIntro();



/* =================================
   TOMBOL OPEN
================================= */

function openPage() {

    const page1 =
        document.getElementById("page1");

    const page2 =
        document.getElementById("page2");


    /* sembunyikan halaman pertama */

    page1.style.opacity = "0";


    setTimeout(function () {

        page1.classList.add("hidden");

        page2.classList.remove("hidden");

        page2.style.opacity = "0";


        /* sedikit delay */

        setTimeout(function () {

            page2.style.opacity = "1";

            /* mulai tulisan */

            typeLove();

        }, 100);

    }, 1000);

}



/* =================================
   I LOVE YOU BERTAHAP
================================= */

const loveText =
    document.getElementById("loveText");


const loveMessage =
    "I LOVE YOU";


let loveIndex = 0;


function typeLove() {

    if (loveIndex < loveMessage.length) {

        loveText.textContent +=
            loveMessage.charAt(loveIndex);

        loveIndex++;

        setTimeout(typeLove, 180);

    }

    else {

    setTimeout(function () {

        document
            .getElementById("smallText")
            .classList.add("show");

        createFlowers();

        createLoveEmojis();

    }, 1000);

}

}



/* =================================
   MEMBUAT BUNGA
================================= */

function createFlowers() {

    const garden =
        document.getElementById("garden");


    /*
    Posisi bunga.
    Angka pertama = posisi horizontal
    Angka kedua = delay
    */

    const flowers = [

    [2, 0],
    [8, 700],
    [14, 300],
    [20, 1100],
    [26, 500],
    [32, 1400],
    [38, 800],
    [44, 200],
    [50, 1000],
    [56, 400],
    [62, 1300],
    [68, 600],
    [74, 1500],
    [80, 350],
    [86, 900],
    [92, 1200],
    [97, 500]

];


    flowers.forEach(function (data) {

        const flower =
            document.createElement("div");


        flower.classList.add("flower");


        /*
        posisi kiri
        */

        flower.style.left =
            data[0] + "%";


        /*
        waktu kemunculan
        */

        flower.style.animationDelay =
            data[1] + "ms";


        /*
        ukuran bunga dibuat
        sedikit berbeda
        */

        const size =
            0.7 + Math.random() * 0.5;


        flower.style.transform =
            "scale(" + size + ")";


        flower.innerHTML = `

            <div class="head">

                <div class="petal p1"></div>

                <div class="petal p2"></div>

                <div class="petal p3"></div>

                <div class="petal p4"></div>

                <div class="petal p5"></div>

                <div class="center"></div>

            </div>


            <div class="stem"></div>


            <div class="leaf left"></div>

            <div class="leaf right"></div>

        `;


        garden.appendChild(flower);

    });

}
/* =================================
   MEMBUAT EMOJI LOVE
================================= */

function createLoveEmojis() {

    const container =
        document.getElementById("loveContainer");


    const emojis = [
        "❤️",
        "💕",
        "💗",
        "💖",
        "💘",
        "💓",
        "💞"
    ];


    for (let i = 0; i < 20; i++) {

        const love =
            document.createElement("div");


        love.classList.add("love-emoji");


        /* memilih emoji secara acak */

        love.textContent =
            emojis[
                Math.floor(
                    Math.random() * emojis.length
                )
            ];


        /* posisi horizontal acak */

        love.style.left =
            Math.random() * 95 + "%";


        /* ukuran acak */

        love.style.fontSize =
            (18 + Math.random() * 25) + "px";


        /* kecepatan berbeda */

        love.style.animationDuration =
            (3 + Math.random() * 3) + "s";


        /* muncul satu per satu */

        love.style.animationDelay =
            (Math.random() * 4) + "s";


        container.appendChild(love);

    }

}