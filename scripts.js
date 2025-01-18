const form = document.querySelector(".formulario-fale-conosco")
const mascara = document.querySelector(".mascara-formulario")

//Essa função vai aparecer o formulario ao click no botão//
function mostrarForm() {
    form.style.left = "50%"
    form.style.transform = "translateX(-50%)"
    mascara.style.visibility = "visible"
}


//Essa função vai esconder o formulario ao click fora na tela do site//
function esconderForm() {
    form.style.left = "-300px"
    form.style.transform = "translateX(0)"
    mascara.style.visibility = "hidden"
}