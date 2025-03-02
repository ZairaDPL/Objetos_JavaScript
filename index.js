/**EJEMPLO: Creación de un objeto que además de sus atributos 
 * cotenga una función
 */

const persona = {
    nombre: 'Zaira',
    edad: 20,
    profesion: 'Estudiante de Ingeniería en Computación',
    saludar: function (){
        return `Hola, mi nombre es ${this.nombre} y soy ${this.profesion}`
    }
}

console.log(persona.nombre)
console.log(persona.saludar())

/**     EJERCICIO Gestión de Alumnos
 * Descripción: Vas a crear un programa para gestionar una lista de alumnos. Cada alumno será 
 * representado como un objeto, y el programa permitirá agregar alumnos, buscar alumnos por nombre, 
 * calcular el promedio de sus calificaciones y mostrar la lista completa de alumnos.
 * Requisistos:
 *      + Crear un objeto para representar un alumno:debe tener nombre, edad, y calificaciones.
 *      + Crear un objeto para representar la gestión de alumnos: tendrá una propiedad alumnos que será 
 *        un array de objetos de alumnos. 
 * Métodos para:
 *      + agregarAlumno: Añade un nuevo alumno a la lista.
 *      + buscarAlumno: Busca un alumno por nombre y devuelve su información si se encuentra.
 *      + calcularPromedio: Calcula y muestra el promedio de calificaciones de un alumno específico.
 *      + mostrarTodosLosAlumnos(): Muestra la información de todos los alumnos.
 */
