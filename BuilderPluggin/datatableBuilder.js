
class DatatableBuilder{            

    constructor(tabla){        
        this.elementoTabla = document.getElementById(tabla);
        this.jsonDatatable = {};
        this.datatable;
    }
        
    InicializaTabla(){        
        if($.fn.DataTable.isDataTable(this.elementoTabla)){
            $(this.elementoTabla).DataTable().clear();
            $(this.elementoTabla).DataTable().destroy();
        }                    
        this.datatable = $(this.elementoTabla).DataTable(this.jsonDatatable);

        this.datatable.columns.adjust().draw();
    }

    AgregarFila(Arreglo){        
        this.datatable.row.add(Arreglo).columns.adjust().draw();   
    }

    AjustarTabla(){
        this.datatable.columns.adjust().draw();
    }
}

class DataTableBotones
{
    constructor(){
        this.TiposBotones = Object.freeze({"Copy": 1, "PDF":2, "Excel": 3, "CSV": 4})
        this.OrientacionPDF = Object.freeze({"portrait": "portrait", "landscape":"landscape"})
        this.TamanioPaginaPDF = Object.freeze({"A3": "A3", "A4":"A4","A5": "A5", "LEGAL":"LEGAL", "LETTER ":"LETTER"})
        this.BotonPersonalizado = {};
        this.Botones = []
    }    
    
    AgregarBoton(tipoBoton,texto,titulo,classNames,columnasExportar,nombreArchivo,orientacion,tamanioPaginaPDF){

        let boton = {};

        switch(tipoBoton){
            case 1:
                boton.extend = "copy";
                boton.text = `<w class="far fa-copy"></w> ${texto}`
                boton.titleAttr = titulo,
                boton.exportOptions= {
                    columns: columnasExportar
                };
                boton.init = function (api, node, config) {
                    $(node).removeClass('dt-button')
                };
                boton.classNames = classNames
                break;

            case 2:
                boton.extend = "pdf";
                boton.text = `<w class="far fa-copy"></w> ${texto}`
                boton.titleAttr = titulo,
                boton.title = null,
                boton.exportOptions= {
                    columns: columnasExportar
                };
                boton.init = function (api, node, config) {
                    $(node).removeClass('dt-button')
                };
                boton.classNames = classNames;
                boton.orientation = orientacion;
                boton.pageSize = tamanioPaginaPDF;
                boton.filename = nombreArchivo;
                boton.customize = function (doc) {                    
                    doc.pageMargins = [20, 60, 20, 30];
                    doc['header'] = (function () {
                        return {
                            columns: [
                                {
                                    image: "data:image/png;base64,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",
                                    width: 100
                                },
                                {
                                    alignment: 'right',
                                    fontSize: 14,
                                    text: nombreArchivo
                                }

                            ],
                            margin: [30, 20, 35, 35]
                        }
                    });
                }
            break;
            case 3:
                boton.extend = "excel";
                boton.text = `<w class="far fa-copy"></w> ${texto}`
                boton.titleAttr = titulo,
                boton.exportOptions= {
                    columns: columnasExportar
                };
                boton.init = function (api, node, config) {
                    $(node).removeClass('dt-button')
                };
                boton.classNames = classNames;
                boton.filename = nombreArchivo;                
            break;
            case 3:
                boton.extend = "CSV";
                boton.text = `<w class="far fa-copy"></w> ${texto}`
                boton.titleAttr = titulo,
                boton.exportOptions= {
                    columns: columnasExportar
                };
                boton.init = function (api, node, config) {
                    $(node).removeClass('dt-button')
                };
                boton.classNames = classNames;
                boton.filename = nombreArchivo;                
            break;
        }

        this.Botones.push(boton);
    }

    AgregarBotonPersonalizado(objetoPersonalizado){
        this.Botones.push(objetoPersonalizado);
    }
}