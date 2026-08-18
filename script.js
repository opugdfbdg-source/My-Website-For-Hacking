document.addEventListener("DOMContentLoaded", () => {

    const buttons = document.querySelectorAll(
        ".download-btn, .social-btn, .contact-btn"
    );

    // إنشاء صوت ضغطة خفيف
    function playClickSound() {
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();

        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();

        oscillator.type = "sine";

        // نغمة قصيرة وناعمة
        oscillator.frequency.setValueAtTime(700, audioContext.currentTime);
        oscillator.frequency.exponentialRampToValueAtTime(
            1100,
            audioContext.currentTime + 0.08
        );

        gainNode.gain.setValueAtTime(0.0001, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(
            0.12,
            audioContext.currentTime + 0.01
        );

        gainNode.gain.exponentialRampToValueAtTime(
            0.0001,
            audioContext.currentTime + 0.12
        );

        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);

        oscillator.start();
        oscillator.stop(audioContext.currentTime + 0.12);
    }

    buttons.forEach(button => {

        button.addEventListener("click", () => {

            // تشغيل الصوت
            playClickSound();

            // تأثير الضغط
            button.style.transform = "scale(0.96)";

            setTimeout(() => {
                button.style.transform = "";
            }, 150);

        });

    });

});