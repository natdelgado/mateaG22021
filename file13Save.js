//Guardo los elementos del formulario

var botonGuardar = document.getElementById("botonGuardar");
//Array en dónde se van a guardar los datos de los inscriptos
var listaIns = [];

//Función en dónde voy a guardar los datos de los inscriptos en el array (los guardo como objetos)
function guardarDatos(){

    //Me traigo los valores del formularios.
    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;
    var edad = document.getElementById("edad").value;
    var curso = document.getElementById("curso").value;

    //Función cosntructora del objeto estudiante.
    function estudiante(nombre, apellido, edad, curso) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.curso = curso;
    };
    //Propiedades del Objeto Estudiante con el constructor.
    var estudianteIns = new estudiante(nombre, apellido, edad, curso);
    //Pusho los estudiantes ingresados en el formulario en la listaIns.
    listaIns.push(estudianteIns);
    //console.log(listaIns)
    //Limpio el formulario.
    document.getElementById("formulario").reset();
    mostrarTabla(listaIns);
};
//Se llama al evento en el boton guardar para ejecutar la función guardarDatos()
botonGuardar.addEventListener("click", guardarDatos);

//Esta función Muestra la tabla con los datos guarados anteriormente en la función guardarDatos().
function mostrarTabla(listaIns){
    var tabla = `
    <table class="table table-dark table-striped">
        <thead>
            <tr>
                <th>Nombre</th>
                <th>Apellido</th>
                <th>Edad</th>
                <th>Curso</th>
            </tr>
        </thead>
        <tbody>`
        for(let i=0; i < listaIns.length; i++){
            var fila = listaIns[i];
            //console.log(fila);
            tabla += `
            <tr>
                <td>${fila.nombre}</td>
                <td>${fila.apellido}</td>
                <td>${fila.edad}</td>
                <td>${fila.curso}</td>
            </tr>`
        };
        tabla += `
        </tbody>
    </table>`
    document.getElementById("tabla").innerHTML = tabla;
};

//export let listaIns ;
//export default mostrarTabla;

var botonNombre = document.getElementById("botonNombre");
var botonApellido = document.getElementById("botonApellido");
var botonEdad = document.getElementById("botonEdad");
var botonCurso = document.getElementById("botonCurso");


function ordenarNombre(){
    listaIns.sort(function(ant, sig){ //comparando el campo nombre
        if (ant.nombre > sig.nombre){
            return 1;
        }
        if (ant.nombre < sig.nombre) {
            return -1;
        } 
        return 0;
    } );
    mostrarTabla(listaIns);
    //console.log(listaIns);   
};
function ordenarApellido(){
    listaIns.sort(function(ant, sig){ //comparando el campo nombre
        if (ant.apellido > sig.apellido){
            return 1;
        }
        if (ant.apellido < sig.apellido) {
            return -1;
        } 
        return 0;
    } );
    mostrarTabla(listaIns);
    //console.log(listaIns);   
};

function ordenarEdad(){
    listaIns.sort( function(ant, sig){
        return ant.edad-sig.edad; //comparo el campo edad
    });
    //console.log(listaIns);
    mostrarTabla(listaIns);
};
function ordenarCurso(){
    listaIns.sort(function(ant, sig){ //comparando el campo nombre
        if (ant.curso > sig.curso){
            return 1;
        }
        if (ant.curso < sig.curso) {
            return -1;
        } 
        return 0;
    } );
    mostrarTabla(listaIns);
    //console.log(listaIns);   
};
//Se llama los eventos para ordenar al hacer click en los botones
botonNombre.addEventListener("click", ordenarNombre);
botonApellido.addEventListener("click", ordenarApellido);
botonEdad.addEventListener("click",ordenarEdad);
botonCurso.addEventListener("click", ordenarCurso);

//cambiar color al background
var segundaCol = document.getElementById("segundaCol");
segundaCol.style.backgroundColor = "#e09453";

//Buscar Elemento de una lista


function buscarEstudiante(){
    console.log(listaIns);
    var buscador = document.getElementById("buscador").value;
    var listaFiltrada = listaIns.filter(palabra => palabra.nombre.toLowerCase().indexOf(buscador.toLowerCase()) > -1);
    console.log(listaFiltrada);
     
   mostrarTabla(listaFiltrada);

};
buscador.addEventListener("keyup", buscarEstudiante);
//Boton para que me vuelva a mostar la lista original de estudiantes sin filtrar
var botonBuscar = document.getElementById("botonBuscar");
function volverSinFiltro(){
    mostrarTabla(listaIns);
    document.getElementById("formBuscador").reset();
}
botonBuscar.addEventListener("click", volverSinFiltro);

