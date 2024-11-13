// proyecto javascrip coder house // 

// realizando un buscador para una pagina de noticias deportivas y los usuarios encuentras las ultimas noticias de su deporte favorito //

let Deporte = prompt("Que deporte quieres ver hoy").toLocaleLowerCase();

const arrayDeporte = [
    "Liga española resultados Real Madrid 4 vs osasuna 0 ",

    "Los Mets barran alos Yankies en la final de la seria mundial",

    "Por primera en la historia de la NBA un jugador comparte cancha con su hijo y ese es el caso de Lebron James y Su hijO Lebron Junior",

    "Casper Ruud dio la primera gran sorpresa de las Finales ATP ante Carlos Alcaraz y Alexander Zverev empezó su camino en Turín como lo que es: un gran candidato. Despachó rápidamente a Andrey Rublev",
];

function noticias(deporte){
       
    switch(Deporte){
        
        case "futbol":
        alert("bienvenido alas noticias del mundo del Futbol");
        alert(arrayDeporte[0]);
        break;
        
        case "beisbol":
        alert("Bienvenido alas noticias del mundo del Beisbol");
        alert(arrayDeporte[1]);
        break;

        case "baloncesto":
        alert("Bienvenido alas noticias del mundo del Baloncesto");
        alert(arrayDeporte[2]);
        break;

        case "tenis":
        alert("Bienvenido alas noticias del mundo del tenis");
        alert(arrayDeporte[3]);
        break;

        default:
            alert("Gracias por visitar Sportcenter");
    }

    Deporte = prompt("Te gustaria ver mas noticias de otro deporte").toLocaleLowerCase(); 
}   

noticias(Deporte);

while(Deporte == "si"){
    Deporte = prompt("Que deporte quieres ver hoy").toLocaleLowerCase();   
}
noticias(Deporte);

