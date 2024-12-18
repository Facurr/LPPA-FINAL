// Formulario
var contactForm = document.getElementById('contactForm');
var nameInput = document.getElementById('name');
var emailInput = document.getElementById('email');
var messageInput = document.getElementById('message');

// Funciones para validaciones
var validateName = function () {
    var error = document.getElementById("nameError");
    var nameRegex = /^[a-zA-Z0-9\s]+$/;

    if (nameInput.value.length >= 3 && nameRegex.test(nameInput.value)) {
        error.style.display = "none";
        return true;
    } else {
        error.style.display = "block";
        error.textContent = "Minímo 3 caractéres y alfanuméricos.";
        return false;
    }
};

var validateEmail = function () {
    var error = document.getElementById("emailError");

    if (emailInput.value.includes("@") && emailInput.value.includes(".")) {
        error.style.display = "none";
        return true;
    } else {
        error.style.display = "block";
        error.textContent = "Formato de email inválido.";
        return false;
    }
};

var validateMsg = function () {
    var error = document.getElementById("messageError");

    if (messageInput.value.length >= 5) {
        error.style.display = "none";
        return true;
    } else {
        error.style.display = "block";
        error.textContent = "Mínimo 5 caractéres.";
        return false;
    }
};

// Eventos blur sobre el formulario
nameInput.addEventListener("blur", validateName);
emailInput.addEventListener("blur", validateEmail);
messageInput.addEventListener("blur", validateMsg);

// Evento submit
contactForm.addEventListener('submit', function (event) {
    event.preventDefault();

    var name = validateName();
    var email = validateEmail();
    var msg = validateMsg();

    if (name && email && msg) {
        // Preparar el contenido del correo
        var subject = 'LPPA - SIMON GAME';
        var body = `Hola ${nameInput.value}!\n${messageInput.value}`;

        // Usar EmailJS para enviar el correo
        emailjs.send("service_zg3kwoh", "template_s2w9s34", {
            from_name: nameInput.value,
            from_email: emailInput.value,
            message: messageInput.value,
        }).then(function(response) {
            alert("Correo enviado exitosamente.");
        }, function(error) {
            alert("Error al enviar correo: " + JSON.stringify(error));
        });
    }
});





