
function ingreso/*ID*/() {
    /*Guardando los datos en el LocalStorage*/
    localStorage.setItem("Email", document.getElementById("emailtxt").value);
    localStorage.setItem("Contraseña", document.getElementById("contraseñatxt").value);
    
    if ((document.getElementById("emailtxt"/*ID*/).value != "") && (document.getElementById("contraseñatxt"/*ID*/).value != "")) {
        location.href="file11estudiantes.html";
    } else {
        alert("Por favor ingrese email y contraseña");
    }
};
function salir(){
    localStorage.clear();
};

document.getElementById("salir").addEventListener("click", function(){
        
    salir();
});
document.getElementById("mostrandoEmail").innerHTML = localStorage.getItem("Email");