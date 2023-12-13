document.addEventListener('DOMContentLoaded', function() {
    // Busca el elemento con el ID "download-message" y cambia su contenido
    var downloadMessage = document.getElementById('download-message');
    if (downloadMessage) {
        downloadMessage.innerText = 'RegistrAPP';
    }
});

document.getElementById('download-btn').addEventListener('click', function() {
    // Simulamos la descarga (puedes agregar tu lógica real aquí)
    document.getElementById('download-message').innerText = '¡La aplicación se ha descargado correctamente!';
});

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Aquí puedes agregar la lógica para enviar el formulario
    // Por ejemplo, podrías usar Fetch API para enviar los datos a un servidor
    alert('¡Petición enviada!');
});

