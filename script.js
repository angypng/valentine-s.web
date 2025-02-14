document.addEventListener("DOMContentLoaded", function () {
    let introText = document.getElementById("intro-text");
    let question = document.getElementById("question");
    let yesBtn = document.getElementById("yes-btn");
    let noBtn = document.getElementById("no-btn");
    let heartContainer = document.getElementById("hearts-container");

    let messages = [
        "Hello love💕 It’s the month of love, and you being born in it just makes everything feel extra magical.",
        "...n since it’s the month of love, would u do me the honor of being my Valentine love? 💘"
    ];

    let index = 0;

    function displayText() {
        if (index < messages.length) {

      
