    var intentos = 6;
    var arrCoincidencias = []; // esto es para corregir!
    const palabrAdivinar = ingresarPalabra();

    creaTablero(palabrAdivinar);
    
    const letra = document.querySelector('input');
    letra.oninput = function(){
        if(soloLetras(letra.value)){
            mostrarTablero(letra.value);
            buscarCoincidencia(letra.value);  
        }
    };

    function ingresarPalabra(){
    let palabra = "";
    // Solicita al usuario que ingrese una palabra hasta que se ingrese una palabra válidajhhj
    while (!/^[a-zA-Z]+$/.test(palabra)) {
        palabra = prompt("Ingresa una palabra para adivinar!");

        // Este if va a verifica si la palabra ingresada es válida
        if (!/^[a-zA-Z]+$/.test(palabra)) {
            alert("La palabra solo puede contener. Por favor, intenta de nuevo.");
        }
    }

    // Convierte la palabra ingresada en un array de caracteres
    const arrPalabra = palabra.split("");

    // Muestra el array de caracteres en la consola
    console.log(arrPalabra);

    // Devuelve el array de caracteres
    return arrPalabra;
};


    function creaTablero(arrPalabra){
        let tablero = document.getElementById("tablero");
        document.getElementById("tablero").classList.add("tabla");
        let tablaHTML = "<table><tr>";

        arrPalabra.forEach(letra => {
            arrCoincidencias.push("?");
        });
        console.log(arrCoincidencias);


        for (let i = 0; i < arrCoincidencias.length; i++) {
        tablaHTML += "<td>" + arrCoincidencias[i] + "</td>";
        }

        tablaHTML += "</tr></table>";
        tablero.innerHTML = tablaHTML;

        document.getElementById("intentos").innerHTML = '<p>Intentos Restantes</p>'+intentos;
        document.getElementById("intentos").classList.add("mi-clase");
    }
    
    function soloLetras(cadena){
        const pattern = new RegExp('[a-zA-Z]');//patrón que solo permite letras
        console.log(pattern.test(cadena));

        if(!pattern.test(cadena)){
            document.querySelector('input').value = "";
            document.getElementById("status").innerHTML = "Solo puedes ingresar letras!!!..";
            return false;
        }else{
            return true;
        }
    }
    function buscarCoincidencia(letra){
        if(intentos <= 0){
            return; // Detener la función si ya no hay intentos restantes
        }

        let tablero = "";
        let coincidencias = 0;

        palabrAdivinar.forEach(caracter => {
            if(caracter == letra){
                console.log(caracter);
                coincidencias += 1;
            }
        });

        if(coincidencias > 0){
            document.getElementById("status").innerHTML = `Hubo ${coincidencias} coincidencias!!!`;
            document.getElementById("status").classList.add("mi-clase");

            if (arrCoincidencias.indexOf("?") == -1) {
                document.getElementById("resultado").innerHTML = '<p>¡Ganaste!</p>';
                document.getElementById("resultado").classList.add("mi-clase");
            }
            
        }else{
            intentos--;
            document.getElementById("status").innerHTML = `No hubo coinciencias :(`;
            document.getElementById("status").classList.add("mi-clase");
            document.getElementById("intentos").innerHTML = '<p>Intentos Restantes</p>'+intentos;
            document.getElementById("intentos").classList.add("mi-clase");

            if(intentos==0){
                document.getElementById("resultado").innerHTML = '<p>Perdiste</p>';
                document.getElementById("resultado").classList.add("mi-clase");
            }
        }



            let imagen = document.getElementById("imagen");
            
            switch (intentos) {
                case 1:
                    imagen.src = "img/A.png";
                    break;

                case 2:
                    imagen.src = "img/B.png";
                    break;
                
                case 3:
                    imagen.src = "img/C.png";
                    break;
                
                case 4:
                    imagen.src = "img/D.png";
                    break;
                
                case 5:
                    imagen.src = "img/E.png";
                    break;
                
                case 6:
                    imagen.src = "img/F.png";
                    break;


            }
        }

    function mostrarTablero(letra){
        let tablero = document.getElementById("tablero");
        document.getElementById("tablero").classList.add("recibirtabla");
        let tablaHTML = "<table><tr>";
        
        for (let i = 0; i < palabrAdivinar.length; i++) {
            if(palabrAdivinar[i]==letra){
                arrCoincidencias[i]=letra;
            }
        }

        for (i = 0; i < arrCoincidencias.length; i++) {
        tablaHTML += "<td>" + arrCoincidencias[i] + "</td>";
        }

        tablaHTML += "</tr></table>";
        tablero.innerHTML = tablaHTML;
    }
    
