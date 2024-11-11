// Validación y alerta del formulario de contacto
document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (name && email && message) {
        alert("Mensaje enviado exitosamente. ¡Gracias por contactarte!");
        document.getElementById("contact-form").reset();
    } else {
        alert("Por favor, completa todos los campos.");
    }
});
