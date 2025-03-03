/*Para ver como funciona cada ejercicio solo descomentalo y comenta lo que no quieras ocupar*/

/**EJEMPLO: Creación de un objeto que además de sus atributos 
 * cotenga una función
 */

/* const persona = {
    nombre: 'Zaira',
    edad: 20,
    profesion: 'Estudiante de Ingeniería en Computación',
    saludar: function (){
        return `Hola, mi nombre es ${this.nombre} y soy ${this.profesion}`
    }
}

console.log(persona.nombre)
console.log(persona.saludar()) */

/**     EJERCICIO Gestión de Alumnos
 * Descripción: Vas a crear un programa para gestionar una lista de alumnos. Cada alumno será 
 * representado como un objeto, y el programa permitirá agregar alumnos, buscar alumnos por nombre, 
 * calcular el promedio de sus calificaciones y mostrar la lista completa de alumnos.
 * Requisistos:
 *      + Crear un objeto para representar un alumno:debe tener nombre, edad, y calificaciones.
 *      + Crear un array para representar la gestión de alumnos: contendra objetos de alumnos. 
 * Métodos para:
 *      + agregarAlumno: Añade un nuevo alumno a la lista.
 *      + mostrarTodosLosAlumnos(): Muestra la información de todos los alumnos.
 */

//array para almacenar los alumnos que se agregen
const gestionarA = [];

function agregarAlumno(nombre, edad, calificaciones) {
    let auxNombre = nombre.toLocaleLowerCase();
    const nuevoA = {
        auxNombre, edad, calificaciones
    };
    
    if(nuevoA != null){
        gestionarA.push(nuevoA);
        console.log(`El alumno ${auxNombre} a sido agregado`);
    }
}

function mostrarAlumnos() {
    if (gestionarA.length > 0) {
        console.log('lista de alumnos:');
        gestionarA.forEach(alumno => {
            console.log(`Alumno: ${alumno.auxNombre} Edad: ${alumno.edad} Calificaciones: ${alumno.calificaciones}`);
        });
    }
}



//impresion para prueba
console.log(gestionarA);
agregarAlumno('Zaira', 20, [7, 7.5, 8]);
agregarAlumno('Saul', 18, [9, 9.5, 10]);
mostrarAlumnos();