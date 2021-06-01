$(document).ready(function(){    
})

var tabla;

function inicializaTabla1(){    

    tabla = new DatatableBuilder("tabla1");
    let botones = new DataTableBotones();
    tabla.jsonDatatable.dom = "Bt"
    tabla.jsonDatatable.buttons = botones.Botones;
    botones.AgregarBoton(botones.TiposBotones.PDF,"Boton PDF", "Haga clic para descargar PDF", "btn btn-primary","", "PDF EJemplo",botones.OrientacionPDF.landscape, botones.TamanioPaginaPDF.LEGAL)        
    tabla.InicializaTabla();

    tabla.AgregarFila(["<input type = 'text' value ='Victor'/>", "Flores", "<label><input type='Checkbox'> Check</label>"])
}


function AgregarOtraFila(){    
    tabla.datatable.row.add(["Karen","Barrera",32]).draw();    
}
