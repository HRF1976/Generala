let cant = 0
let part = []
let cat = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11']

function agregaPart(participante) {

    cant = cant + 1
    part.push(participante)
    nJugador = document.createElement("div")
    nJugador.textContent = participante
    document.getElementById("ppal").appendChild(nJugador)

    qJudagor = document.createElement("option")
    qJudagor.textContent = participante
    
    document.getElementById("leTocaA").appendChild(qJudagor)

    document.getElementById("participante").value = ""

}

function crearTablero() {
    document.getElementById("ppal").hidden = true
    document.getElementById("quienesJuegan").hidden = true
    document.getElementById("aQuienLeToca").hidden = false
    document.getElementById("anotar").hidden = false
    var cantFilas = 13

    // let liq = Array()

    // Obtenemos la referencia del elemento body
    var body = document.getElementById("tablero");
    // Creamos un elemento <table> y un elemento <tbody>
    var tabla = document.createElement("table");
    tabla.className = "table table-striped table-dark"
    
    tabla.id = "juego"
    var tblBody = document.createElement("tbody");



    // Creamos las celdas
    for (var i = 0; i < cantFilas; i++) {
        // Creamos las hileras de la tabla
        var fila = document.createElement("tr");
        for (var j = 0; j < (cant + 1); j++) {
            // Crea un elemento <td> y un nodo de texto, hace que el nodo de
            // texto sea el contenido de <td>, ubica el elemento <td> al final
            // de la hilera de la tabla
            var celda = document.createElement("td");
            celda.style="text-align=center"
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
        document.getElementById("juego").rows[0].cells[j + 1].textContent = part[j];
        document.getElementById("juego").rows[0].cells[j + 1].className = "h5";
        document.getElementById("juego").rows[0].cells[j + 1].style="text-align: center"
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
    for (i = 0; i < 13; i++) {
        document.getElementById("juego").rows[i].cells[0].className = "h5";
    }
    for (var i = 1; i < 13; i++) {
        for (var j = 1; j < cant + 1; j++) {
            document.getElementById("juego").rows[i].cells[j].textContent = 0;
            document.getElementById("juego").rows[i].cells[j].style="text-align: center"
        }
    }
}

function valorOk(c, f) {
    c = part.indexOf(document.getElementById("leTocaA").value) + 1
    f = cat.indexOf(document.getElementById("categoría").value) + 1
    var ptos = document.getElementById("VALOR").value
    document.getElementById("juego").rows[f].cells[c].textContent = ptos;
    if (ptos==0) {
        document.getElementById("juego").rows[f].cells[c].style="background-color: #ffffff"; 
    }
    var total=0
    for (x = 1; x < 12; x++) {
        total = total + parseInt(document.getElementById("juego").rows[x].cells[c].textContent)
    }
    document.getElementById("juego").rows[12].cells[c].textContent = parseInt(total)


    console.log(part.indexOf(document.getElementById("leTocaA").value))
    console.log(cant)

}

function elijeCategoría() {
    switch (document.getElementById("categoría").value) {
        case "1":
            document.getElementById("dos").text = 1
            document.getElementById("dos").value = 1
            document.getElementById("tres").text = 2
            document.getElementById("tres").value = 2
            document.getElementById("cuatro").text = 3
            document.getElementById("cuatro").value = 3
            document.getElementById("cinco").text = 4
            document.getElementById("cinco").value = 4
            document.getElementById("seis").value = 5
            document.getElementById("seis").text = 5

            break;

        case "2":
            document.getElementById("dos").text = 2
            document.getElementById("dos").value = 2
            document.getElementById("tres").text = 4
            document.getElementById("tres").value = 4
            document.getElementById("cuatro").text = 6
            document.getElementById("cuatro").value = 6
            document.getElementById("cinco").text = 8
            document.getElementById("cinco").value = 8
            document.getElementById("seis").value = 10
            document.getElementById("seis").text = 10

            break;
        case "3":
            document.getElementById("dos").text = 3
            document.getElementById("dos").value = 3
            document.getElementById("tres").text = 6
            document.getElementById("tres").value = 6
            document.getElementById("cuatro").text = 9
            document.getElementById("cuatro").value = 9
            document.getElementById("cinco").text = 12
            document.getElementById("cinco").value = 12
            document.getElementById("seis").value = 15
            document.getElementById("seis").text = 15

            break;
        case "4":
            document.getElementById("dos").text = 4
            document.getElementById("dos").value = 4
            document.getElementById("tres").text = 8
            document.getElementById("tres").value = 8
            document.getElementById("cuatro").text = 12
            document.getElementById("cuatro").value = 12
            document.getElementById("cinco").text = 16
            document.getElementById("cinco").value = 16
            document.getElementById("seis").value = 20
            document.getElementById("seis").text = 20
            break;
        case "5":
            document.getElementById("dos").text = 5
            document.getElementById("dos").value = 5
            document.getElementById("tres").text = 10
            document.getElementById("tres").value = 10
            document.getElementById("cuatro").text = 15
            document.getElementById("cuatro").value = 15
            document.getElementById("cinco").text = 20
            document.getElementById("cinco").value = 20
            document.getElementById("seis").value = 25
            document.getElementById("seis").text = 25

            break;
        case "6":
            document.getElementById("dos").text = 6
            document.getElementById("dos").value = 6
            document.getElementById("tres").text = 12
            document.getElementById("tres").value = 12
            document.getElementById("cuatro").text = 18
            document.getElementById("cuatro").value = 18
            document.getElementById("cinco").text = 24
            document.getElementById("cinco").value = 24
            document.getElementById("seis").value = 30
            document.getElementById("seis").text = 30
            break;
        case "7":
            document.getElementById("dos").text = 25
            document.getElementById("dos").value = 25
            document.getElementById("tres").text = 20
            document.getElementById("tres").value = 20
            document.getElementById("cuatro").text = 0
            document.getElementById("cuatro").value = 0
            document.getElementById("cinco").text = 0
            document.getElementById("cinco").value = 0
            document.getElementById("seis").value = 0
            document.getElementById("seis").text = 0

            break;
        case "8":
            document.getElementById("dos").text = 35
            document.getElementById("dos").value = 35
            document.getElementById("tres").text = 30
            document.getElementById("tres").value = 30
            document.getElementById("cuatro").text = 0
            document.getElementById("cuatro").value = 0
            document.getElementById("cinco").text = 0
            document.getElementById("cinco").value = 0
            document.getElementById("seis").value = 0
            document.getElementById("seis").text = 0

            break;
        case "9":
            document.getElementById("dos").text = 45
            document.getElementById("dos").value = 45
            document.getElementById("tres").text = 40
            document.getElementById("tres").value = 40
            document.getElementById("cuatro").text = 0
            document.getElementById("cuatro").value = 0
            document.getElementById("cinco").text = 0
            document.getElementById("cinco").value = 0
            document.getElementById("seis").value = 0
            document.getElementById("seis").text = 0

            break;
        case "10":
            document.getElementById("dos").text = 55
            document.getElementById("dos").value = 55
            document.getElementById("tres").text = 50
            document.getElementById("tres").value = 50
            document.getElementById("cuatro").text = 0
            document.getElementById("cuatro").value = 0
            document.getElementById("cinco").text = 0
            document.getElementById("cinco").value = 0
            document.getElementById("seis").value = 0
            document.getElementById("seis").text = 0

            break;
        case "11":
            document.getElementById("dos").text = 150
            document.getElementById("dos").value = 150
            document.getElementById("tres").text = 100
            document.getElementById("tres").value = 100
            document.getElementById("cuatro").text = 0
            document.getElementById("cuatro").value = 0
            document.getElementById("cinco").text = 0
            document.getElementById("cinco").value = 0
            document.getElementById("seis").value = 0
            document.getElementById("seis").text = 0

            break;

        default:
            break;
    }

}
