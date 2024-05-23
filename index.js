let libreria = [
    {
        // Lazo Libros
        Titulo: "Cien Años de Soledad",
        Autor: "Gabriel García Márquez",
        Genero: "Realismo Mágico",
        Idioma: "Español",
        Precio: 36.000,
        Formato: "Tapa Dura",
        ISBN: "978-0307474728",
        Descripcion: "Una de las obras más importantes de la literatura hispanoamericana.",
        Estado: "Nuevo",
        Ubicacion: "Estantería A1",
        Fecha_publicacion: "1967",
        Editorial: " Lazo Libros",
        Paginas: "417",
        Dimensiones: "15.2 x 3.3 x 22.9 cm",
        Peso: "680 g"
    },
    {
        Titulo: "Don Quijote de la Mancha",
        Autor: "Miguel de Cervantes",
        Genero: "Novela",
        Idioma: "Español",
        Precio: 56.000,
        Formato: "Tapa Blanda",
        ISBN: "978-8491050293",
        Descripcion: "La historia de un hidalgo que pierde la cordura por leer demasiadas novelas de caballería.",
        Estado: "Usado",
        Ubicacion: "Estantería B2",
        Fecha_publicacion: "1605",
        Editorial: " Lazo Libros",
        Paginas: "1088",
        Dimensiones: "13 x 4.4 x 20.1 cm",
        Peso: "750 g"
    },
    {
        Titulo: "1984",
        Autor: "George Orwell",
        Genero: "Distopía",
        Idioma: "Inglés",
        Precio: 26.000,
        Formato: "Tapa Blanda",
        ISBN: "978-0451524935",
        Descripcion: "Una novela que presenta una visión aterradora de una sociedad totalitaria.",
        Estado: "Nuevo",
        Ubicacion: "Estantería C3",
        Fecha_publicacion: "1949",
        Editorial: " Lazo Libros",
        Paginas: "328",
        Dimensiones: "10.7 x 1.8 x 17.8 cm",
        Peso: "280 g"
    },{
        Titulo: "Orgullo y Prejuicio",
        Autor: "Jane Austen",
        Genero: "Romance",
        Idioma: "Inglés",
        Precio: 56.000,
        Formato: "Tapa Dura",
        ISBN: "978-0141040349",
        Descripcion: "Una clásica novela de amor y malentendidos.",
        Estado: "Nuevo",
        Ubicacion: "Estantería D4",
        Fecha_publicacion: "1813",
        Editorial: " Lazo Libros",
        Paginas: "480",
        Dimensiones: "13.5 x 3 x 20.3 cm",
        Peso: "400 g"
    },
    {
        Titulo: "El Gran Gatsby",
        Autor: "F. Scott Fitzgerald",
        Genero: "Tragedia",
        Idioma: "Inglés",
        Precio: 18.500,
        Formato: "Tapa Blanda",
        ISBN: "978-0743273565",
        Descripcion: "Una crítica a la era del jazz y el sueño americano.",
        Estado: "Nuevo",
        Ubicacion: "Estantería E5",
        Fecha_publicacion: "1925",
        Editorial: "Lazo Libros",
        Paginas: "180",
        Dimensiones: "13.3 x 1.3 x 20.3 cm",
        Peso: "200 g"
    },
    {
        Titulo: "Matar a un Ruiseñor",
        Autor: "Harper Lee",
        Genero: "Ficción",
        Idioma: "Inglés",
        Precio: 31.800,
        Formato: "Tapa Blanda",
        ISBN: "978-0060935467",
        Descripcion: "Una novela sobre la injusticia racial en el sur de los Estados Unidos.",
        Estado: "Usado",
        Ubicacion: "Estantería F6",
        Fecha_publicacion: "1960",
        Editorial: " Lazo Libros",
        Paginas: "336",
        Dimensiones: "13 x 1.9 x 19.7 cm",
        Peso: "300 g"
    },
    {
        // Angosta Editores
        Titulo: "Crimen y Castigo",
        Autor: "Fiódor Dostoyevski",
        Genero: "Filosófico",
        Idioma: "Ruso",
        Precio: 9.300,
        Formato: "Tapa Dura",
        ISBN: "978-0140449136",
        Descripcion: "Una exploración profunda de la moralidad y el arrepentimiento.",
        Estado: "Nuevo",
        Ubicacion: "Estantería G7",
        Fecha_publicacion: "1866",
        Editorial: " Angosta Editores",
        Paginas: "671",
        Dimensiones: "12.9 x 4.1 x 19.8 cm",
        Peso: "500 g"
    },
    {
        Titulo: "Ulises",
        Autor: "James Joyce",
        Genero: "Modernismo",
        Idioma: "Inglés",
        Precio: 42.100,
        Formato: "Tapa Blanda",
        ISBN: "978-0199535675",
        Descripcion: "Una de las obras más importantes de la literatura modernista.",
        Estado: "Nuevo",
        Ubicacion: "Estantería H8",
        Fecha_publicacion: "1922",
        Editorial: " Angosta Editores",
        Paginas: "933",
        Dimensiones: "13 x 5.1 x 19.3 cm",
        Peso: "700 g"
    },
    {
        Titulo: "El Proceso",
        Autor: "Franz Kafka",
        Genero: "Existencialismo",
        Idioma: "Alemán",
        Precio: 62.100,
        Formato: "Tapa Blanda",
        ISBN: "978-0805209990",
        Descripcion: "Un retrato inquietante de la burocracia y la culpabilidad.",
        Estado: "Nuevo",
        Ubicacion: "Estantería I9",
        Fecha_publicacion: "1925",
        Editorial: " Angosta Editores",
        Paginas: "304",
        Dimensiones: "13.3 x 1.9 x 20.3 cm",
        Peso: "290 g"
    },
    {
        Titulo: "La Odisea",
        Autor: "Homero",
        Genero: "Épica",
        Idioma: "Griego",
        Precio: 12.100,
        Formato: "Tapa Blanda",
        ISBN: "978-0140268867",
        Descripcion: "La historia de las aventuras de Odiseo en su regreso a Ítaca.",
        Estado: "Nuevo",
        Ubicacion: "Estantería J10",
        Fecha_publicacion: "Siglo VIII a.C.",
        Editorial: " Angosta Editores",
        Paginas: "541",
        Dimensiones: "12.9 x 3.8 x 19.8 cm",
        Peso: "460 g"
    },
    {
        Titulo: "El Principito",
        Autor: "Antoine de Saint-Exupéry",
        Genero: "Fábula",
        Idioma: "Francés",
        Precio: 87.000,
        Formato: "Tapa Dura",
        ISBN: "978-0156012195",
        Descripcion: "Una historia filosófica y poética sobre un joven príncipe.",
        Estado: "Nuevo",
        Ubicacion: "Estantería K11",
        Fecha_publicacion: "1943",
        Editorial: " Angosta Editores",
        Paginas: "96",
        Dimensiones: "18 x 1.3 x 22.9 cm",
        Peso: "300 g"
    },
    {
        // Luna Libros
        Titulo: "En Busca del Tiempo Perdido",
        Autor: "Marcel Proust",
        Genero: "Modernismo",
        Idioma: "Francés",
        Precio: 77.000,
        Formato: "Tapa Dura",
        ISBN: "978-0142437964",
        Descripcion: "Una extensa novela sobre la memoria y el tiempo.",
        Estado: "Nuevo",
        Ubicacion: "Estantería L12",
        Fecha_publicacion: "1913",
        Editorial: " Luna Libros",
        Paginas: "4215",
        Dimensiones: "13 x 12.7 x 20.3 cm",
        Peso: "3200 g"
    },
    {
        Titulo: "El Señor de los Anillos",
        Autor: "J.R.R. Tolkien",
        Genero: "Fantasía",
        Idioma: "Inglés",
        Precio: 27.000,
        Formato: "Tapa Dura",
        ISBN: "978-0544003415",
        Descripcion: "Una de las obras más influyentes de la literatura fantástica.",
        Estado: "Nuevo",
        Ubicacion: "Estantería M13",
        Fecha_publicacion: "1954",
        Editorial: " Luna Libros",
        Paginas: "1216",
        Dimensiones: "15.2 x 6.4 x 22.9 cm",
        Peso: "1600 g"
    },  {
        Titulo: "La Metamorfosis",
        Autor: "Franz Kafka",
        Genero: "Existencialismo",
        Idioma: "Alemán",
        Precio: 85.000,
        Formato: "Tapa Blanda",
        ISBN: "978-0141045214",
        Descripcion: "La historia de Gregor Samsa, quien se despierta transformado en un insecto gigante.",
        Estado: "Nuevo",
        Ubicacion: "Estantería P16",
        Fecha_publicacion: "1915",
        Editorial: " Luna Libros",
        Paginas: "224",
        Dimensiones: "13 x 1.5 x 20 cm",
        Peso: "250 g"
    },
    {
        Titulo: "El Guardián entre el Centeno",
        Autor: "J.D. Salinger",
        Genero: "Ficción",
        Idioma: "Inglés",
        Precio: 15.000,
        Formato: "Tapa Blanda",
        ISBN: "978-0316769488",
        Descripcion: "La historia de Holden Caulfield, un adolescente rebelde que enfrenta una crisis emocional.",
        Estado: "Nuevo",
        Ubicacion: "Estantería Q17",
        Fecha_publicacion: "1951",
        Editorial: " Luna Libros",
        Paginas: "277",
        Dimensiones: "13.3 x 2 x 20.3 cm",
        Peso: "300 g"
    },
    {
        Titulo: "La Isla del Tesoro",
        Autor: "Robert Louis Stevenson",
        Genero: "Aventura",
        Idioma: "Inglés",
        Precio: 25.000,
        Formato: "Tapa Dura",
        ISBN: "978-0141321004",
        Descripcion: "Las aventuras del joven Jim Hawkins en su búsqueda de un tesoro pirata.",
        Estado: "Nuevo",
        Ubicacion: "Estantería R18",
        Fecha_publicacion: "1883",
        Editorial: " Luna Libros",
        Paginas: "240",
        Dimensiones: "14.1 x 2 x 20.3 cm",
        Peso: "350 g"
    },
    {
        
/*modificacion de 5 arrays*/
//Laguna Libros
        Titulo: "Drácula",
        Autor: "Bram Stoker",
        Genero: "Horror",
        Idioma: "Inglés",
        Precio: 46.900,
        Formato: "Tapa Blanda",
        ISBN: "978-0141439846",
        Descripcion: "La historia del conde Drácula y su intento de mudarse desde Transilvania a Inglaterra.",
        Estado: "Nuevo",
        Ubicacion: "Estantería S19",
        Fecha_publicacion: "1897",
        Editorial: "Laguna Libros",
        Paginas: "488",
        Dimensiones: "13 x 2.5 x 19.8 cm",
        Peso: "400 g"
    },
    {
        Titulo: "Los Miserables",
        Autor: "Victor Hugo",
        Genero: "Drama",
        Idioma: "Francés",
        Precio: 78.000,
        Formato: "Tapa Dura",
        ISBN: "978-0140444308",
        Descripcion: "Una novela épica sobre la injusticia social y la redención.",
        Estado: "Nuevo",
        Ubicacion: "Estantería T20",
        Fecha_publicacion: "1862",
        Editorial: "Laguna Libros",
        Paginas: "1232",
        Dimensiones: "13.7 x 5.5 x 20 cm",
        Peso: "980 g"
    },
    {
        Titulo: "El Nombre de la Rosa",
        Autor: "Umberto Eco",
        Genero: "Misterio",
        Idioma: "Italiano",
        Precio: 76.000,
        Formato: "Tapa Blanda",
        ISBN: "978-0156001311",
        Descripcion: "Un misterio medieval sobre una serie de asesinatos en una abadía benedictina.",
        Estado: "Nuevo",
        Ubicacion: "Estantería U21",
        Fecha_publicacion: "1980",
        Editorial: "Laguna Libros",
        Paginas: "536",
        Dimensiones: "15.2 x 3.2 x 22.9 cm",
        Peso: "620 g"
    },
    {
        Titulo: "El Retrato de Dorian Gray",
        Autor: "Oscar Wilde",
        Genero: "Ficción Gótica",
        Idioma: "Inglés",
        Precio: 46.000,
        Formato: "Tapa Blanda",
        ISBN: "978-0141439570",
        Descripcion: "La historia de un joven que permanece eternamente joven mientras su retrato envejece.",
        Estado: "Nuevo",
        Ubicacion: "Estantería V22",
        Fecha_publicacion: "1890",
        Editorial: "Laguna Libros",
        Paginas: "254",
        Dimensiones: "13 x 1.5 x 19.8 cm",
        Peso: "300 g"
    }
];

let libro_nuevo= {
        Título: "To Kill a Mockingbird",
        Autor: "Harper Lee",
        Género: "Ficción",
        Idioma: "Inglés",
        Precio: 36.000,
        Formato:" Tapa Dura",
        ISBN: "978-0060935467",
        Descripción:" Una novela clásica de la literatura estadounidense que explora temas de racismo y justicia en el sur de Estados Unidos.",
        Estado: "Usado",
        Ubicación:" Estantería A1",
        Fecha_publicacion: "1960",
        Editorial: "Laguna Libros",
        Páginas: "336",
        Dimensiones: "13.5 x 2.8 x 20.3 cm",
        Peso: "400 g"
    }

//agregar un libro
/* libreria.push(libro_nuevo)
console.log(libreria); */


//quitar un libro
/* ibreria.pop()
console.log(libreria);*/


//mostrar los libros
/* libreria.forEach((libro,index) =>{
    console.log(`${index +1} titulo : ${libro.Titulo}`);
})*/

let continuar= "si"
while (continuar === "si") {
    let menu= prompt("que quieres hacer \n1. ver libros disponibles\n2.agregar nuevo libro\n3.borrar un libro \n 3lista de libros");
    switch (menu) {
        case "1":
            let decision= prompt("deseas ver los demas datos")
            if (decision === "si") {
                libreria.forEach((libro,index) =>{
                    console.log(`${index } Titulo: ${libro.Titulo} Autor : ${libro.Autor} Genero : ${libro.Genero} Idioma : ${libro.Idioma} formato: ${libro.Formato } isb: ${libro.ISBN} descripcion: ${libro.Descripcion} estado: ${libro.Estado} ubicacion: ${libro.Ubicacion}  fecha de publicacion : ${libro.Fecha_publicacion} editorial : ${libro.Editorial} paginas: ${libro.Paginas} dimensiones: ${libro.Dimensiones} peso: ${libro.Peso}`);
                })
            }else{
                libreria.forEach((libro,index) =>{
                    console.log(`${index } Titulo : ${libro.Titulo}`);
                })
            }
            break;
        case "2":
            let nuevo = {
                titulo: prompt("titulo"),
                autor: prompt("autor"),
                genero: prompt("genero"),
                idioma: prompt("idioma"),
                formato: prompt("formato"),
                isbn: prompt("isbn"),
                descripcion: prompt("descripcion"),
                estado: prompt("estado"),
                ubicacion: prompt("ubicacion"),
                fecha_publicacion: prompt("fecha de bublicacion  "),
                editorial: prompt("editorial"),
                paginas:prompt("paginas"),
                dimensiones: prompt("dimensiones"),
                peso: prompt("peso")
            }
                libreria.push(nuevo)
                console.log("agregado con exito");
                libreria.forEach((libro,index) =>{
                console.log(`${index} titulo : ${libro.Titulo}`);
            })
            break;
        case "3":
                let indice=parseInt(prompt("ingresa el numero de el libro que quieres borrar"))
                libreria.splice(indice, 1)
                console.log("borrado con exito");
                break;
                
        case "4":
                    let decision2= prompt("Que listado quieres ver \n1.Editorial\n2.peso\n3.precio\n4.estado\n5.ubicacion\n6.paginas\n7.dimensiones\n8.descripcion\n9.isbn\n10.formato\n11.fecha")
                    if (decision2 ===1 || decision2 === "1") {
                        console.table(Editorial)
                    }
                    if (decision2 ===2 || decision2 === "2") {
                        console.table(PESO)
                    }
                    if (decision2 ===3 || decision2 === "3") {
                        console.table(PRECIO)
                    }if (decision2 ===4 || decision2 === "4") {
                        console.table(ESTADO)
                    }
                    if (decision2 ===5 || decision2 === "5") {
                        console.table(UBICACION)
                    }
                    if (decision2 ===6 || decision2 === "6") {
                        console.table(PAGINAS)
                    }
                    if (decision2 ===7 || decision2 === "7") {
                        console.table(DIMENSIONES)
                    }
                    if (decision2 ===8 || decision2 === "8") {
                        console.table(DESCRIPCION)
                    }
                    if (decision2 ===9 ||  decision2 === "9") {
                        console.table(ISBN)
                    }
                    if (decision2 ===10 || decision2 === "10") {
                        console.table(FORMATO)
                    }if (decision2 ===11 || decision2 === "11") {
                        console.table(FECHA)
                    }
                    break;
                default:
                    break;
            }
         continuar= prompt("Deseas continuar")
        }
    
    
   
    

//Metodo map

let mostrar_libro = libreria.map((libro) =>{
    return{
        Titulo: libro.Titulo,
        Autor: libro.Autor,
        Editorial: libro.Editorial,
        Precio: libro.Precio
    }
   }
 );
 let mostrar_libro1 = libreria.map((libro) =>{
    return{
        Titulo: libro.Titulo,
        Autor: libro.Autor
    }
   }
 );
 let mostrar_libro2 = libreria.map((libro) =>{
    return{
        Titulo: libro.Titulo,
        Editorial: libro.Editorial
    }
   }
 );
 let mostrar_libro3 = libreria.map((libro) =>{
    return{
        Titulo: libro.Titulo,
        Precio: libro.Precio
    }
   }
 );
 let mostrar_libro4 = libreria.map((libro) =>{
    return{
        Titulo: libro.Titulo,
        Autor: libro.Autor,
        Idioma: libreria.Idioma
    }
   }
 );
 let mostrar_libro5 = libreria.map((libro) =>{
    return{
        Titulo: libro.Titulo,
        Descripcion: libro.Descripcion,
        Paginas: libro.Paginas
    }
   }
 );
 let mostrar_libro6 = libreria.map((libro) =>{
    return{
        Titulo: libro.Titulo,
        Formato: libro.Formato,
        Peso: libro.Peso
    }
   }
 );
 let mostrar_libro7 = libreria.map((libro) =>{
    return{
        Titulo: libro.Titulo,
        Genero: libro.Genero,
        Edicion: libro.Edicion
    }
   }
 );
 let mostrar_libro8 = libreria.map((libro) =>{
    return{
        Titulo: libro.Titulo,
        Fecha_publicacion: libro.Fecha_publicacion,
        Peso: libro.Peso
    }
   }
 );

 let mostrar_libro9 = libreria.map((libro) =>{
    return{
        Titulo: libro.Titulo,
        Estado: libro.Estado,
        Dimensiones: libro.Dimensiones
    }
   }
 );
console.table(mostrar_libro);