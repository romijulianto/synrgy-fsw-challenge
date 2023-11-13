fetch("views/header.html")
    .then((response) => response.text())
    .then((data) => {
        document.getElementById("header").innerHTML = data;
    });

fetch("views/footer.html")
    .then((response) => response.text())
    .then((data) => {
        document.getElementById("footer").innerHTML = data;
    });

fetch("views/our-services.html")
    .then((response) => response.text())
    .then((data) => {
        document.getElementById("our-services").innerHTML = data;
    });

fetch("views/faq.html")
    .then((response) => response.text())
    .then((data) => {
        document.getElementById("faq").innerHTML = data;
    });

fetch("views/why-us.html")
    .then((response) => response.text())
    .then((data) => {
        document.getElementById("why-us").innerHTML = data;
    });

fetch("views/testimoni.html")
    .then((response) => response.text())
    .then((data) => {
        document.getElementById("testimoni").innerHTML = data;
    });

fetch("views/banner.html")
    .then((response) => response.text())
    .then((data) => {
        document.getElementById("banner").innerHTML = data;
    });