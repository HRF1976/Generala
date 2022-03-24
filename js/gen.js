let cant = 0
let part = []

function agregaPart(participante) {

    cant = cant + 1
    part.push(participante)
    nJugador=document.createElement("div")
    nJugador.textContent=participante
    document.getElementById("ppal").appendChild(nJugador)

    document.getElementById("participante").value=""
    
    }

    function crearTablero() {
        document.getElementById("ppal").hidden=true
        var cantFilas = 13
        
        // let liq = Array()
    
        // Obtenemos la referencia del elemento body
        var body = document.getElementById("tablero");
        // Creamos un elemento <table> y un elemento <tbody>
        var tabla = document.createElement("table");
        tabla.className="table table-striped table-dark"
        tabla.id="juego"
        var tblBody = document.createElement("tbody");
    
    
    
        // Creamos las celdas
        for (var i = 0; i < cantFilas; i++) {
            // Creamos las hileras de la tabla
            var fila = document.createElement("tr");
            for (var j = 0; j < (cant+1); j++) {
                // Crea un elemento <td> y un nodo de texto, hace que el nodo de
                // texto sea el contenido de <td>, ubica el elemento <td> al final
                // de la hilera de la tabla
                var celda = document.createElement("td");
                var textoCelda = document.createTextNode(i);
                celda.appendChild(textoCelda);
                fila.appendChild(celda);
            }
            // agregamos la hilera al final de la tabla (al final del elemento tblbody)
            tblBody.appendChild(fila);
        }
        // posicionamos el <tbody> debajo del elemento <table>
        tabla.appendChild(tblBody);
        // appends <table> into <body>
        body.appendChild(tabla);
        // modifica el atributo "border" de la tabla y lo fija a "2";
        //tabla.setAttribute("border", 2);
        //tabla.setAttribute("id", "tabla");
        // tabla.setAttribute("text-align:right");
    
        //var result = document.getElementById("resultado");
        // result.appendChild(tabla);
    
        // pongo los títulos
        document.getElementById("juego").rows[0].cells[0].textContent = "Categoría";
        console.log(part[1])
        var cuenta = 0
        for (var j = 0; j < (cant); j++) {
        document.getElementById("juego").rows[0].cells[j+1].textContent = part[j];
        document.getElementById("juego").rows[0].cells[j+1].className = "h5";
        }
        document.getElementById("juego").rows[7].cells[0].textContent = "Escalera";
        //document.getElementById("juego").rows[7].cells[0].className = "h5";
        document.getElementById("juego").rows[8].cells[0].textContent = "Full";
        //document.getElementById("juego").rows[8].cells[0].className = "h5";
        document.getElementById("juego").rows[9].cells[0].textContent = "Poker";
        document.getElementById("juego").rows[9].cells[0].className = "h5";
        document.getElementById("juego").rows[10].cells[0].textContent = "Generala";
        document.getElementById("juego").rows[10].cells[0].className = "h5";
        document.getElementById("juego").rows[11].cells[0].textContent = "Generala D.";
        document.getElementById("juego").rows[11].cells[0].className = "h5";
        document.getElementById("juego").rows[12].cells[0].textContent = "Totales";
        document.getElementById("juego").rows[12].cells[0].className = "h5";
        for (i=0;i<13;i++){
            document.getElementById("juego").rows[i].cells[0].className = "h5";
        }
        for (var i=1;i<13;i++){
            for (var j=1; j<cant+1;j++){
                document.getElementById("juego").rows[i].cells[j].textContent = "";
            }
        }
    }
    