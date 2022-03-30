

const persona = {
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 45,
    direccion: {
        ciudad: 'New York',
        zip: 74921,
        lat: 13.3232,
        lng: 11.6673321
    }
};

// console.table( persona );

const persona2 = { ...persona };
persona2.nombre = 'Peter';


console.log( persona );
console.log( persona2 )







