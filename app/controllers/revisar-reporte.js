import Controller from '@ember/controller';

export default Controller.extend({
    actions:{
        mostrar: function(){
            const reportes = this.store.query('reporte', {
                    }).then((reportes) => {
                        if (!reportes || reportes.content.length === 0){
                            alert("No hay reportes registrados");
                            location.href="/revisar-reporte";
                        }else{
                            this.set('reportes', reportes);
                        }
                    });    
        }
    }
});
