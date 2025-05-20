let display;
let contactInterface;
let mailButton;
let phoneButton;
let mailInterface;
let phoneInterface;
let interfaces;
let inButton;
let inInterface;

function init() {
    display = "none";

    contactInterface = document.querySelector("#contact-interface");

    mailInterface = document.querySelector("#mail-to-interface");
    mailButton = document.querySelector("#mail-button");
    mailButton.onclick = showMail;

    phoneInterface = document.querySelector("#phone-to-interface");
    phoneButton = document.querySelector("#phone-button");
    phoneButton.onclick = showPhone;

    inInterface = document.querySelector("#in-interface");
    inButton = document.querySelector("#in-button");
    inButton.onclick = showIn;
}

function showMail() {
    if (display !== "mail") {
        display = "mail";

        mailInterface.style.display = "block";
        phoneInterface.style.display = "none";
        inInterface.style.display = "none";

        //mailButton.style.backgroundColor = "green";
        //phoneButton.style.backgroundColor = "#fe6a6a";
        //inButton.style.backgroundColor = "#fff";
        mailButton.id = 'mail-button-active';
        phoneButton.id = 'phone-button';
        inButton.id = 'in-button';

        contactInterface.style.backgroundColor = "rgba(0,255,0,0.4)";
    }
    else {
        display = "none";

        mailInterface.style.display = "none";
        //mailInterface.style.display = "none";
        //mailButton.style.backgroundColor = "#68e368";
        //contactInterface.style.backgroundColor = "transparent";
        mailButton.id = 'mail-button';

        contactInterface.style.backgroundColor = "transparent";
    }
}

function showPhone() {
    if (display !== "phone") {
        display = "phone";

        phoneInterface.style.display = "block";
        mailInterface.style.display = "none";
        inInterface.style.display = "none";

        //phoneButton.style.backgroundColor = "crimson";
        //mailButton.style.backgroundColor = "#68e368";
        //inButton.style.backgroundColor = "#fff";
        mailButton.id = 'mail-button';
        phoneButton.id = 'phone-button-active';
        inButton.id = 'in-button';

        contactInterface.style.backgroundColor = "rgba(255,0,0,0.2)";;
    }
    else {
        display = "none";

        phoneInterface.style.display = "none";
        //phoneButton.style.backgroundColor = "#fe6a6a";
        phoneButton.id = 'phone-button';

        contactInterface.style.backgroundColor = "transparent";
    }
}

function showIn() {
    if (display !== "in") {
        display = "in";

        inInterface.style.display = "block";
        mailInterface.style.display = "none";
        phoneInterface.style.display = "none";

        //inButton.style.backgroundColor = "#999";
        //mailButton.style.backgroundColor = "#68e368";
        //phoneButton.style.backgroundColor = "#fe6a6a";
        mailButton.id = 'mail-button';
        phoneButton.id = 'phone-button';
        inButton.id = 'in-button-active';

        contactInterface.style.backgroundColor = "rgba(0,0,255,0.2)";;
    }
    else {
        display = "none";

        inInterface.style.display = "none";
        //inButton.style.backgroundColor = "#fff";
        inButton.id = 'in-button';

        contactInterface.style.backgroundColor = "transparent";
    }
}

init();