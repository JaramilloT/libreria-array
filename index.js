let libreria = [
    {
        // Lazo Libros
        Titulo: "Cien Años de Soledad",
        Autor: "Gabriel García Márquez",
        Genero: "Realismo Mágico",
        Idioma: "Español",
        Precio: 36000,
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
        Precio: 56000,
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
        Precio: 26000,
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
        Precio: 56000,
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
        Precio: 18500,
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
        Precio: 31800,
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
        Precio: 9300,
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
        Precio: 42100,
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
        Precio: 62100,
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
        Precio: 12100,
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
        Precio: 87000,
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
        Precio: 77000,
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
        Precio: 27000,
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
        Precio: 85000,
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
        Precio: 15000,
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
        Precio: 25000,
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
        Precio: 46900,
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
        Precio: 78000,
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
        Precio: 76000,
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
        Precio: 46000,
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
        Precio: 36000,
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
//libreria.push(libro_nuevo)
//console.log(libreria); 


//quitar un libro
//libreria.pop()
//console.log(libreria);


//mostrar los libros
/* libreria.forEach((libro,index) =>{
    console.log(`${index +1} titulo : ${libro.Titulo}`);
})*/


//Metodo map

/*let mostrar_libro = libreria.map((libro) =>{
    return{
        Titulo: libro.Titulo,
        Autor: libro.Autor,
        Editorial: libro.Editorial,
        Precio: libro.Precio
    }
   }
 );*/




//10 libros para mostrar
 let mostrar_libro1 = libreria.map((libro) =>{
    return{
        Titulo: libro.Titulo,
        Editorial: libro.Editorial
    }
   }
 );
 let mostrar_libro2 = libreria.map((libro) =>{
    return{
        Titulo: libro.Titulo,
        Peso: libro.Peso
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
        Estado: libro.Estado
    }
   }
 );
 let mostrar_libro5 = libreria.map((libro) =>{
    return{
        Titulo: libro.Titulo,
        Ubicación: libro.Ubicacion
    }
   }
 );
 let mostrar_libro6 = libreria.map((libro) =>{
    return{
        Titulo: libro.Titulo,
        Paginas: libro.Paginas
    }
   }
 );
 let mostrar_libro7 = libreria.map((libro) =>{
    return{
        Titulo: libro.Titulo,
        Dimensiones: libro.Dimensiones
    }
   }
 );
 let mostrar_libro8 = libreria.map((libro) =>{
    return{
        Titulo: libro.Titulo,
        Descripcion: libro.Descripcion
    }
   }
 );

 let mostrar_libro9 = libreria.map((libro) =>{
    return{
        Titulo: libro.Titulo,
        ISBN: libro.ISBN
    }
   }
 );
 let mostrar_libro10 = libreria.map((libro) =>{
    return{
        Titulo: libro.Titulo,
        Formato: libro.Formato
    }
   }
 );

 
 //spreed operator
 let agregar_Descuento = libreria.map((libros) =>{
    return{
        ...libros,
        descuento: 20,
    }
   }
 );



//Listar los libros por Titulo, Autor, Editorial, Precio y descuento.
let listar_Descuento = libreria.map((libro) =>{
    return{
        ...libro,
        descuento: 20
    }
   }
 )
.map((libro) =>{
    return{
        Titulo: libro.Titulo,
        Autor: libro.Autor,
        Editorial: libro.Editorial,
        Precio: libro.Precio,
        descuento: libro.descuento
    }
   }
 );



 let listar_precio = libreria.map((libro) =>{
    return{
        Titulo: libro.Titulo,
        Autor: libro.Autor,
        Editorial: libro.Editorial,
        Precio: libro.Precio,
        descuento: libro.descuento
    }
   }
 );




 //Ordenar los libros por numero de paginas de mayor a menor
 let ordenar_Paginas = libreria.sort((a,b)=> b.Paginas - a.Paginas)
    .map((libro)=>{
        return{
            Titulo: libro.Titulo,
            Paginas: libro.Paginas
        }
});//console.table(ordenar_Paginas)




 //filter
 let precios_libro = libreria.filter((libro) => {
    return libro.Precio >30000
 });
 //console.log(precios_libro);

 //titulo, autor, editorial, paginas
 let numeros_Paginas = libreria.filter((libro) => {
    return libro.Paginas >300
 }).map((libro) =>{
    return{
        Titulo: libro.Titulo,
        Autor: libro.Autor,
        Editorial: libro.Editorial,
        Paginas: libro.Paginas
    }
   }
 );//console.table(numeros_Paginas)






 //Ordenar los libros por numero de paginas de mayor a meno

let orden_Paginas = libreria.sort((a,b)=> b.Paginas - a.Paginas)
    .map((libro) => {
        return{
        Titulo: libro.Titulo,
        Paginas: libro.Paginas 
    }
});//console.table(orden_Paginas)



//Obtener un array de libros caros por titulo mayores de 11 dolares, resumirlos por titulo, autor, precio. 

let Libros_Caros = libreria.filter((libro) => {
    return libro.Precio > 30000
  }).map((libro) => {
        return{
        Titulo: libro.Titulo,
        Autor: libro.Autor,
        Precio: libro.Precio
    }
});


//Realiza un resumen de libros que tengan menos de 100 paginas resumirlos por titulo, autor, editorial y paginas.

let resumen_libro = libreria.filter((libro) => {
    return libro.Paginas -100
  }).map((libro) => {
        return{
        Titulo: libro.Titulo,
        Autor: libro.Autor,
        Editorial: libro.Editorial,
        Paginas: libro.Paginas
    }
});



//Realizar un resumen de libros caros mayores a 20 dolares de mayor a menor resumirlos por titulo, autor, precio.

let Libros_Caros2 = libreria.filter((libro) => {
    return libro.Precio > 40000
  }).map((libro) => {
        return{
        Titulo: libro.Titulo,
        Autor: libro.Autor,
        Precio: libro.Precio
    }
});




//Realizar un resumen de libros por numero mas alto de paginas resumirlos por titulo, autor, editorial, paginas ordenados de mayor a menor.

let resumen_Paginas= libreria.sort((a,b)=> b.Paginas - a.Paginas)
    .map((libro) => {
        return{
        Titulo: libro.Titulo,
        Autor: libro.Autor,
        Editorial: libro.Editorial,
        Paginas: libro.Paginas 
    }
});

//menu
let continuar= "si"
while (continuar === "si"){
    let menu= prompt("Que quiere ver \n1. Ver libros disponibles\n2. Agregar nuevo libro\n3. Borrar un libro \n4. Lista de 10 libros \n5. Libros descuentos \n6. Filtro de precio y paginas \n7. Orden numero de paginas \n8. Cadena");
    switch (menu) {
        case "1":
            let decision= prompt("Deseas ver los demas datos")
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
            let nuevo_libro = {
                Titulo: prompt("titulo"),
                Autor: prompt("autor"),
                Genero: prompt("genero"),
                Idioma: prompt("idioma"),
                Formato: prompt("formato"),
                ISBN: prompt("isbn"),
                Descripcion: prompt("descripcion"),
                Estado: prompt("estado"),
                Ubicacion: prompt("ubicacion"),
                Fecha_publicacion: prompt("fecha de bublicacion  "),
                Editorial: prompt("editorial"),
                Paginas:prompt("paginas"),
                Dimensiones: prompt("dimensiones"),
                Peso: prompt("peso")
            }
                libreria.push(nuevo_libro)
                console.log("Se a agregado el libro");
                libreria.forEach((libro,index) =>{
                console.log(`${index} Titulo : ${libro.Titulo}`);
            })
            break;
        case "3":
                libreria.pop()
                console.log("El libro se borro");
                console.table(libreria);
                break;
                
        case "4":
                let decision_2= prompt("Que listado quieres ver \n1.Editorial\n2.Peso\n3.Precio\n4.Estado\n5.Ubicacion\n6.Paginas\n7.Dimensiones\n8.Descripcion\n9. ISBN\n10.Formato")
                if (decision_2 ===1 || decision_2 === "1"){
                    console.table(mostrar_libro1)
                }
                if (decision_2 ===2 || decision_2 === "2"){
                    console.table(mostrar_libro2)
                }
                if (decision_2 ===3 || decision_2 === "3"){
                console.table(mostrar_libro3)
                }if (decision_2 ===4 || decision_2 === "4"){
                    console.table(mostrar_libro4)
                }
                if (decision_2 ===5 || decision_2 === "5"){
                    console.table(mostrar_libro5)
                }
                if (decision_2 ===6 || decision_2 === "6"){
                    console.table(mostrar_libro6)
                }
                if (decision_2 ===7 || decision_2 === "7"){
                    console.table(mostrar_libro7)
                }
                if (decision_2 ===8 || decision_2 === "8"){
                    console.table(mostrar_libro8)
                }
                if (decision_2 ===9 ||  decision_2 === "9"){
                    console.table(mostrar_libro9)
                }
                if (decision_2 ===10 || decision_2 === "10"){
                    console.table(mostrar_libro10)
                }
                break;

                case "5":
                    let decision_3= prompt("Que quiere ver \n1. Ver descuento\n2. ver Titulo, Autor, Editorial, Precio y descuento \n3. ver Titulo, Autor, Editorial, Precio")
                    if (decision_3 === 1 || decision_3 == "1") {
                        console.table(agregar_Descuento);
                    }else if (decision_3 === 2 || decision_3 == "2") {
                        console.table(listar_Descuento);
                    }else if (decision_3 === 3 || decision_3 == "3") {
                        console.table(listar_precio );
                    }
                break;

                case "6":
                    let decision_4 =prompt("Que quiere ver \n1. Libors con precio mayor a 30.000 pesos \n2. Libro con numero de paginas superior a °300")
                    if (decision_4 === 1 || decision_4 === "1"){
                        console.table(precios_libro);
                    }else if(decision_4 === 2 || decision_4 === "2"){
                        console.table(numeros_Paginas);
                    }
                break;
                case "7":
                    let decision_5 =prompt("1. Numero de pagina de mayor a menor")
                    if (decision_5 === 1 || decision_5 === "1"){
                        console.table(orden_Paginas);
                    }
                break;
                case "8":
                    let decision_6 =prompt("1. Libros con precio mayor a 300 \n2. Resumen libros \n3. Libros con precio mayor a 400 \n4. Numero de paginas de mayor a menor" )
                    if (decision_6 === 1 || decision_6 === "1"){
                        console.table(Libros_Caros);
                    }else if (decision_6 === 2 || decision_6 === "2"){
                        console.table(resumen_libro);
                    }else if (decision_6 === 3 || decision_6 === "3"){
                        console.table(Libros_Caros2);
                    }else if (decision_6 === 4 || decision_6 === "4"){
                        console.table(resumen_Paginas);
                    }
                break;

                default:
                break;
            }
    continuar= prompt("Deseas regresar atras? si/no")
}
    