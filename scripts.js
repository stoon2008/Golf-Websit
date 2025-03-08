function enableScreenReader() {
    alert("تم تفعيل قارئ الشاشة، سيقوم بقراءة المحتوى تلقائيًا.");
}

function startVoiceRecognition() {
    let recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    recognition.lang = "ar";
    recognition.onresult = function(event) {
        document.getElementById("voiceInput").value = event.results[0][0].transcript;
    };
    recognition.start();
}

function toggleMenu() {
    var menu = document.getElementById("settingsMenu");
    menu.classList.toggle("show");
}

document.addEventListener("click", function(event) {
    var settingsContainer = document.querySelector(".settings-container");
    if (!settingsContainer.contains(event.target)) {
        document.getElementById("settingsMenu").classList.remove("show");
    }
});
