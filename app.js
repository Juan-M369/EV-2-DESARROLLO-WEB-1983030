alert("¡Bienvenido!");

const formulario = document.getElementById("formulario");
const nombre = document.getElementById("nombre");
const edad = document.getElementById("edad");
const masculino = document.getElementById("masculino");
const femenino = document.getElementById("femenino");
const email = document.getElementById("email");
const tel = document.getElementById("tel");
const date = document.getElementById("date");
const colorfav = document.getElementById("colorfav");
const select = document.getElementById("select");
const datalist = document.getElementById("datalist");
const rangoEdad = document.getElementById("edad");
const month = document.getElementById("month");
const time = document.getElementById("time");
const fechaInicio = document.getElementById("fecha");
const datetime = document.getElementById("datetime");
const datetimelocal = document.getElementById("datetimelocal");
const region = document.getElementById("select-multiple");
const archivo = document.getElementById("archivo");
const url = document.getElementById("url");
const week = document.getElementById("week");
const password = document.getElementById("password");
const search = document.getElementById("search");
const textarea = document.getElementById("textarea");
const visto = document.getElementById("visto");
const Enviar = document.getElementById("btnEnviar");

Enviar.addEventListener("click", (e) => {
    e.preventDefault(); 

    let genderValue = "";
    if (masculino.checked) {
        genderValue = masculino.value;
    } else if (femenino.checked) {
        genderValue = femenino.value;
    }

    const datos = [
        nombre.value,
        edad.value,
        genderValue,
        email.value,
        tel.value,
        date.value,
        colorfav.value,
        select.value,
        datalist.value,
        rangoEdad.value,
        month.value,
        time.value,
        fechaInicio.value,
        datetime.value,
        datetimelocal.value,
        archivo.value,
        url.value,
        week.value,
        password.value,
        search.value,
        textarea.value,
        visto.checked
    ];

    console.log(datos);
    formulario.reset();
});

