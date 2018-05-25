import Controller from '@ember/controller';

export default Controller.extend({
    actions:{
        generar: function(){
            const descripcion = document.getElementById("cuadroTexto").value;
            const estado = "por solucionar";
            if(descripcion==null||descripcion==""){
                alert("Es necesario que indique una breve descripción del reporte");  
            }else{
                const reporte = this.store.query('reporte', {
                    orderBy: 'descripcion',
                    equalTo: descripcion
                }).then((reporte) => {
                    var newOp = this.store.createRecord('reporte', {
                            descripcion: descripcion,
                            estado: estado
                        });
                        newOp.save();
                        alert("Reporte guardado con éxito");
                        location.href = "/generar-reporte"; 
                });
            }
        }
    }
});
