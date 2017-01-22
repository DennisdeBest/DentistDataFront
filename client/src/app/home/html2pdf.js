function ExportPDF(){
    var a4 = [595.28, 841.89];

    var doc = new jsPDF({
        format: a4
    });

    var specialElementHandlers = {
        '#divignore': function (element, renderer) {
            return true;
        }
    };

    doc.fromHTML(
        $('#AllForm').get(0), 20 , 20,{
            'width': 500,
            'elementHandlers' : specialElementHandlers
        });
    doc.save('FormulairePatient.pdf');
    doc.output()
}