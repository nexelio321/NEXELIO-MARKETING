document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    document.getElementById('responseMessage').textContent = "Your message has been sent!";
});
