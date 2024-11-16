// proyecto javascrip coder house // 

// realizando un buscador para una pagina de noticias deportivas y los usuarios encuentras las ultimas noticias de su deporte favorito //

const arrayDeporte = [
    "Liga española resultados Real Madrid 4 vs Osasuna 0",
    "Los Mets barren a los Yankees en la final de la Serie Mundial",
    "Por primera vez en la historia de la NBA un jugador comparte cancha con su hijo y ese es el caso de LeBron James y su hijo LeBron Jr.",
    "Casper Ruud dio la primera gran sorpresa de las Finales ATP ante Carlos Alcaraz y Alexander Zverev empezó su camino en Turín como lo que es: un gran candidato. Despachó rápidamente a Andrey Rublev"
];

function noticias(deporte) {
    
    switch (deporte.toLowerCase()) { 
        case "futbol":
            alert("Bienvenido a las noticias del mundo del Fútbol");
            alert(arrayDeporte[0]);
            break;
        case "beisbol":
            alert("Bienvenido a las noticias del mundo del Béisbol");
            alert(arrayDeporte[1]);
            break;
        case "baloncesto":
            alert("Bienvenido a las noticias del mundo del Baloncesto");
            alert(arrayDeporte[2]);
            break;
        case "tenis":
            alert("Bienvenido a las noticias del mundo del Tenis");
            alert(arrayDeporte[3]);
            break;
        default:
            alert("Ingrese un deporte válido");
    }
}

let Deporte;

do {
    
    Deporte = prompt("¿Qué deporte quieres ver hoy (fútbol, béisbol, tenis o baloncesto)? Escribe 'salir' para terminar.");

    if (Deporte === "salir") {
        alert("Gracias por visitar las noticias deportivas. ¡Hasta luego!");
        break; 
    }

    noticias(Deporte);

} while (Deporte.toLowerCase() !== "salir"); 







