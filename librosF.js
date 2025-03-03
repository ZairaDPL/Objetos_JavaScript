/* Problema: Crear objeto a partir de un Libro
Crear un objeto libro que contenga varias propiedades y un método para imprimir 
la información básica del libro.
Instrucciones para resolver el problema:
    + Cada libro debe ser un objeto con las siguientes propiedades: titulo: (string) 
      el título del libro, autor: (string) el autor del libro, anio: (number) el año 
      de publicación, estado: (string) el estado del libro, que puede ser 'disponible' o 'prestado'.
    + También debe tener un método describirLibro: (method) método para imprimir la 
      información básica del libro. Algo como 'Libro titulado [titulo], escrito por [autor] en 
      el año [anio], el estado es: [estado].'
    + Opcional: agregar una propiedad que contenga la lista de capítulos del libro y métodos que 
      permitan agregar y eliminar capítulos del libro. */

const libro = {
    titulo: 'Yo te invente',
    autor: 'Francesca Zappia',
    publicacion: 2022,
    estado : 'disponible',
    capitulos: ['Navegando con una realidad incierta', 'El viaje de Alex', 'Formando amistades y alidados inesperados', 'La ardilla en el jardín'],


    //Función para mostrar la informacion del libro
    describirLibro: function(){
        console.log(`Libro titulado ${this.titulo} escrito por ${this.autor} publicado en ${this.publicacion}, el estado es: ${this.estado}`);
    },

    //Función para mostrar los capitulos
    listarCapitulos: function(){
        console.log(`Capitulos de ${this.titulo}`);
        this.capitulos.forEach((capitulo, index) => {
            console.log(`${index + 1}.- ${capitulo}`);
        });
    },

    //Función para agregar un nuevo capitulo
    agregarCapitulo: function(nuevoCapitulo){
        this.capitulos.push(nuevoCapitulo);
        console.log(`Capitulo ${nuevoCapitulo} agregado.`);
        this.listarCapitulos();
    },

    //Función para eliniminar un capitulo
    eliminarCapitulo : function (numCapitulo, capitulo) {
        for (let i = 0; i < capitulo.length; i++) {
            if (i === numCapitulo - 1){
                capitulo.splice(i, 1);
                console.log('Capitulo a eliminar:', capitulo[i]);
            }
        }
        console.log(capitulo);
    }
}

libro.describirLibro();
libro.listarCapitulos();
libro.agregarCapitulo('La liberación de las langostas');
libro.eliminarCapitulo(3, libro.capitulos);