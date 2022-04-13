let productos = prompt("Ingrese un producto para su listado:").toLowerCase();
let lista = productos;
if(lista != "salir"){
    do {
        if(lista==""){
            productos = prompt("No ha ingresado el producto.\nIngrese el producto:").toLowerCase();
            lista=productos;
        }
        else{
                if(productos == ""){
                    productos = prompt("No ha ingresado producto.\n Vuelva a ingresarlo:").toLowerCase();
                        if(productos != "salir" && productos != ""){
                            lista += ", ";
                            lista += productos;
                        }else if (productos == "salir"){
                            lista += ".";
                        }
                }
                else{
                    productos = prompt("ingrese otro producto:").toLowerCase()
                    if(productos != "salir" && productos != ""){
                        lista += ", ";
                        lista += productos;
                    }else if (productos == "salir"){
                        lista += ".";
                    }
                }
        }
        
    } while (productos != "salir");

    if (lista=="salir"){
        alert("Usted no ha ingresado productos.\nHasta la próxima");
    }else{
        alert("Su lista de productos es:\n"+lista);
    }
}
else{
    alert("Usted no ha ingresado productos.\nHasta la próxima");
}