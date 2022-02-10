// Mostrar en pantalla el valor que el usuario ha seleccionado en el elemento rango del formulario
function mostrarValoracion() {    
    var valoracionRango = document.getElementById("valoracion").value;
    alert("Has valorado con "+ valoracionRango + " puntos" + '.');    
}

// Mostrar en pantalla la cuenta bancaria completa que el usuario ha introducido
function mostrarCuenta() {    
    var pais = document.getElementById("pais").value;
    var iban = document.getElementById("iban").value;
    var entidad = document.getElementById("entidad").value;
    var sucursal = document.getElementById("sucursal").value;
    var dc = document.getElementById("dc").value;
    var cuenta = document.getElementById("cuenta").value;

    if (iban == '' || entidad == '' || sucursal == '' || dc == '' || cuenta == '') {
        alert ("Los datos de su cuenta bancaria no están completos.")
    } else {
        alert("Le informamos que su cuenta bancaria es "+ pais+iban + "-" + entidad + "-" + sucursal + "-" + dc + "-" + cuenta + '.');
    }       
}

// Mostrar en pantalla a qué día de la semana (Lunes a Domingo) corresponde la fecha introducida
const dias = ['domingo','lunes','martes','miércoles','jueves','viernes','sábado'];

function mostrarDiaSemana() {
    var fechaEn = document.getElementById("fechaEn").value;
    const diaNum = new Date(fechaEn).getDay();
    const diaSemana = dias[diaNum];

    alert("La fecha seleccionada en el elemento de fecha es un "+ diaSemana + '.');      
}

// Evaluación final de datos 
const datoCiudad = {
    Alava: '01',
    Albacete: '02',
    Alicante: '03',
    Almeria: '04',
    Avila: '05',
    Badajoz: '06',
    "Islas Baleares": '07',
    Barcelona: '08',
    Burgos: '09',
    Caceres: '10',
    Cadiz: '11',
    Castellon: '12',
    "Ciudad Real": '13',
    Cordoba: '14',
    "La Coruna": '15',
    Cuenca: '16',
    Gerona: '17',
    Granada: '18',
    Guadalajara: '19',
    Guipuzcoa: '20',
    Huelva: '21',
    Huesca: '22',
    Jaen: '23',
    Leon: '24',
    Lerida: '25',
    "La Rioja": '26',
    Lugo: '27',
    Madrid: '28',
    Malaga: '29',
    Murcia: '30',
    Navarra: '31',
    Orense: '32',
    Asturias: '33',
    Palencia: '34',
    "Las Palmas": '35',
    Pontevedra: '36',
    Salamanca: '37',
    "Santa Cruz de Tenerife": '38',
    Cantabria: '39',
    Segovia: '40',    
    Sevilla: '41',
    Soria: '42',
    Tarragona: '43',
    Teruel: '44',
    Toledo: '45',
    Valencia: '46',
    Valladolid: '47',
    Vizcaya: '48',
    Zamora: '49',
    Zaragoza: '50',
    Ceuta: '51',
    Melilla: '52',
}

function comprobarForm() {
    limpiarResultados();
    
    var newUl = document.createElement("ul");
    document.getElementById("resultado").appendChild(newUl).setAttribute('class', 'errores');
    
    
    function nuevoItemLista() {
        var newLi = document.createElement("li");
        document.querySelector("#resultado > ul.errores").appendChild(newLi);
    }
    function nuevoItemListaOk() {
        var newP = document.createElement("p");
        document.querySelector("#resultado").appendChild(newP).setAttribute('class', 'correcto');
    }
    function limpiarResultados() {
        var contenedor = document.getElementById("resultado")
        // var errores = document.getElementsByClassName("errores");
        // var correcto = document.querySelectorAll("#resultado p.correcto");
        // contenedor.removeChild(errores);
        // contenedor.removeChild(correcto);
        contenedor.innerHTML = '';
    }

    // Comprobar si hay campos obligatorios vacios, si tienen algún error o si son correctos
    var requiredNombre = document.getElementById("nombre").value;
    var requiredApellidos = document.getElementById("apellidos").value;
    var requiredDireccion = document.getElementById("direccion").value;
    var requiredLocalidad = document.getElementById("localidad").value;
    var requiredIban = document.getElementById("iban").value;
    var requiredEntidad = document.getElementById("entidad").value;
    var requiredSucursal = document.getElementById("sucursal").value;
    var requiredDc = document.getElementById("dc").value;
    var requiredCuenta = document.getElementById("cuenta").value;
    var valAlf = /^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/g;

    if (requiredNombre == '') {
        nuevoItemLista();
        document.querySelector("#resultado ul li:last-of-type").innerHTML = 'El campo Nombre es obligatorio.';        
    } else if (valAlf.test(requiredNombre) == false) {
        nuevoItemLista();
        document.querySelector("#resultado ul li:last-of-type").innerHTML = 'El campo Nombre contiene caracteres no permitidos.';         
    } else {
        nuevoItemListaOk();
        document.querySelector("#resultado p.correcto:last-of-type").innerHTML = 'El campo Nombre es correcto.';
    }

    if (requiredApellidos ==  '') {
        nuevoItemLista();
        document.querySelector("#resultado ul li:last-of-type").innerHTML = 'El campo Apellidos es obligatorio.';
    } else if (valAlf.test(requiredApellidos) == false) {
        nuevoItemLista();
        document.querySelector("#resultado ul li:last-of-type").innerHTML = 'El campo Apellidos contiene caracteres no permitidos.'; 
    } else {
        nuevoItemListaOk();
        document.querySelector("#resultado p.correcto:last-of-type").innerHTML = 'El campo Apellidos es correcto.';
    }

    if (requiredDireccion ==  '') {
        nuevoItemLista();
        document.querySelector("#resultado ul li:last-of-type").innerHTML = 'El campo Dirección es obligatorio.'; 
    } else {
        nuevoItemListaOk();
        document.querySelector("#resultado p.correcto:last-of-type").innerHTML = 'El campo Dirección es correcto.';
    }
    
    if (requiredLocalidad ==  '') {
        nuevoItemLista();
        document.querySelector("#resultado ul li:last-of-type").innerHTML = 'El campo Localidad es obligatorio.'; 
    } else if (valAlf.test(requiredLocalidad) == false) {
        nuevoItemLista();
        document.querySelector("#resultado ul li:last-of-type").innerHTML = 'El campo Localidad contiene caracteres no permitidos.';
    } else {
        nuevoItemListaOk();
        document.querySelector("#resultado p.correcto:last-of-type").innerHTML = 'El campo Localidad es correcto.';
    }
    if (requiredIban ==  '') {
        nuevoItemLista();
        document.querySelector("#resultado ul li:last-of-type").innerHTML = 'El campo IBAN es obligatorio.'; 
    } else {
        nuevoItemListaOk();
        document.querySelector("#resultado p.correcto:last-of-type").innerHTML = 'El campo IBAN es correcto.';
    }
    if (requiredEntidad ==  '') {
        nuevoItemLista();
        document.querySelector("#resultado ul li:last-of-type").innerHTML = 'El campo Entidad es obligatorio.'; 
    } else {
        nuevoItemListaOk();
        document.querySelector("#resultado p.correcto:last-of-type").innerHTML = 'El campo Entidad es correcto.';
    }
    if (requiredSucursal ==  '') {
        nuevoItemLista();
        document.querySelector("#resultado ul li:last-of-type").innerHTML = 'El campo Sucursal es obligatorio.'; 
    } else {
        nuevoItemListaOk();
        document.querySelector("#resultado p.correcto:last-of-type").innerHTML = 'El campo Sucursal es correcto.';
    }
    if (requiredDc ==  '') {
        nuevoItemLista();
        document.querySelector("#resultado ul li:last-of-type").innerHTML = 'El campo DC es obligatorio.'; 
    } else {
        nuevoItemListaOk();
        document.querySelector("#resultado p.correcto:last-of-type").innerHTML = 'El campo DC es correcto.';
    }
    if (requiredCuenta ==  '') {
        nuevoItemLista();
        document.querySelector("#resultado ul li:last-of-type").innerHTML = 'El campo Cuenta es obligatorio.'; 
    } else {
        nuevoItemListaOk();
        document.querySelector("#resultado p.correcto:last-of-type").innerHTML = 'El campo Cuenta es correcto.';
    }
    
    // Comprobar si el CP corresponde con la ciudad indicada
    var localidadForm = document.getElementById("localidad").value;
    var localidadCP = datoCiudad[localidadForm];
    var cpForm = document.getElementById("CP").value.substr(0,2);

    if (localidadCP != cpForm) {
        alert ("El Código Postal introducido no se corresponde con la Localidad.")
    }

    // Comprobar si la localidad introducida existe
    if (!datoCiudad[localidadForm]) {
        alert ("Escriba correctamente el nombre de la Localidad.")
    }

    // Validar que en el campo "código postal" realmente se han introducido cinco números, que no hay letras y que no está vacío
    var requiredCP = document.getElementById("CP").value;

    if (/^\d{5}$/.test(requiredCP) == false) {
        alert("El campo Código Postal debe tener 5 dígitos.")
    } 

    if (requiredCP ==  '') {
        alert("El campo Código Postal es obligatorio.")
    } 
    
}