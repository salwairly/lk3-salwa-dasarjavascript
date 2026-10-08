// ===============================
// MENU NAVIGASI
// ===============================

const menuButton = document.getElementById("menuButton");
const navigation = document.querySelector("nav ul");

menuButton.addEventListener("click", function () {

    navigation.classList.toggle("active");

});


// ===============================
// SMOOTH SCROLL
// ===============================

const menuLinks = document.querySelectorAll("nav ul li a");

menuLinks.forEach(function (link) {

    link.addEventListener("click", function (event) {

        event.preventDefault();

        const target = document.querySelector(
            this.getAttribute("href")
        );

        target.scrollIntoView({
            behavior: "smooth"
        });

        navigation.classList.remove("active");

    });

});


// ===============================
// TOMBOL HUBUNGI SAYA
// ===============================

const contactButton =
    document.getElementById("contactButton");

contactButton.addEventListener("click", function () {

    const nomor = "082133070660";

    const pesan =
        "Halo Salwa, saya ingin menghubungi kamu.";

    const url =
        "https://wa.me/qr/SS3OSLQF6S6BI1" +
        nomor +
        "?text=" +
        encodeURIComponent(pesan);

    window.open(url, "_blank");

});


// ===============================
// TOMBOL DETAIL PORTOFOLIO
// ===============================

const detailButtons =
    document.querySelectorAll(".detail-button");

detailButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        alert(
            "Terima kasih sudah melihat portofolio saya! 💙"
        );

    });

});