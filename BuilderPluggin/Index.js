$(document).ready(function(){    
})

var tabla;

function inicializaTabla1(){    

    tabla = new DatatableBuilder("tabla1");
    let botones = new DataTableBotones();
    tabla.jsonDatatable.dom = "<'row'<'col-sm-4'l><'col-sm-4'B><'col-sm-4'f>>tip"
    tabla.jsonDatatable.buttons = botones.Botones;
    botones.AgregarBoton(botones.TiposBotones.PDF,"Boton PDF", "Haga clic para descargar PDF", "btn btn-primary","", "PDF EJemplo",botones.OrientacionPDF.landscape, botones.TamanioPaginaPDF.LEGAL)        
    tabla.InicializaTabla();
    tabla.AgregarFila(["<input type = 'text' value ='Victor'/>", "Flores", "<label><input type='Checkbox'> Check</label>","FOSV890314V49","CDMX"])

    
 
    $('#tabla1 tbody').on( 'click', 'tr', function () {
        if ( $(this).hasClass('selected') ) {
            $(this).removeClass('selected');
        }
        else {
            tabla.datatable.$('tr.selected').removeClass('selected');
            $(this).addClass('selected');
        }
    } );
 
    $('#boton').click( function () {
        tabla.datatable.row('.selected').remove().draw( false );
    } );
}


function AgregarOtraFila(){    
    tabla.datatable.row.add(["Karen","Barrera",32,"BACK890317MU8","GUE"]).draw();    
}
