document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    const tablaDatos = document.getElementById("tabla_datos");

    function actualizarTabla() {
        const nombre = document.getElementById("nombre").value;
        const apellido = document.getElementById("apellido").value;
        const email = document.getElementById("email").value;
        const telefono = document.getElementById("telefono").value;
        const edad = document.getElementById("edad").value;
        const direccion = document.getElementById("direccion").value;
        const provincia = document.getElementById("provincia").value;
        const codigoPostal = document.getElementById("codigo_postal").value;
        const metodoContacto = document.querySelector('input[name="metodo_contacto"]:checked') ? 
            document.querySelector('input[name="metodo_contacto"]:checked').nextElementSibling.innerText : '';
        const suscripciones = Array.from(document.querySelectorAll('input[name="suscripcion[]"]:checked'))
            .map(checkbox => checkbox.nextElementSibling.innerText).join(", ");

        tablaDatos.innerHTML = `
            <tr><td>Nombre</td><td>${nombre}</td></tr>
            <tr><td>Apellido</td><td>${apellido}</td></tr>
            <tr><td>Email</td><td>${email}</td></tr>
            <tr><td>Teléfono</td><td>${telefono}</td></tr>
            <tr><td>Edad</td><td>${edad}</td></tr>
            <tr><td>Dirección</td><td>${direccion}</td></tr>
            <tr><td>Provincia</td><td>${provincia}</td></tr>
            <tr><td>Código Postal</td><td>${codigoPostal}</td></tr>
            <tr><td>Método de Contacto</td><td>${metodoContacto}</td></tr>
            <tr><td>Suscripciones</td><td>${suscripciones}</td></tr>
        `;
    }

    document.getElementById("nombre").addEventListener("input", actualizarTabla);
    document.getElementById("apellido").addEventListener("input", actualizarTabla);
    document.getElementById("email").addEventListener("input", actualizarTabla);
    document.getElementById("telefono").addEventListener("input", actualizarTabla);
    document.getElementById("edad").addEventListener("input", actualizarTabla);
    document.getElementById("direccion").addEventListener("input", actualizarTabla);
    document.getElementById("provincia").addEventListener("input", actualizarTabla);
    document.getElementById("codigo_postal").addEventListener("input", actualizarTabla);
    document.querySelectorAll('input[name="metodo_contacto"]').forEach(radio => {
        radio.addEventListener("change", actualizarTabla);
    });
    document.querySelectorAll('input[name="suscripcion[]"]').forEach(checkbox => {
        checkbox.addEventListener("change", actualizarTabla);
    });
});



function toggleCV() {
    var fullCV = document.getElementById("fullCV");
    var button = document.querySelector("button");

    if (fullCV.style.display === "none") {
        fullCV.style.display = "block";
        button.textContent = "Leer menos";
    } else {
        fullCV.style.display = "none";
        button.textContent = "Leer más";
    }
}




























