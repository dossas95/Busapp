import Controller from '@ember/controller';

export default Controller.extend({
    actions:{
        mostrar: function(){
            const rutas = this.store.query('ruta', {
                    }).then((rutas) => {
                        if (!rutas || rutas.content.length === 0){
                            alert("No hay rutas registrados");
                            location.href="/revisar-ruta";
                        }else{
                            this.set('rutas', rutas);
                        }
                    });    
        }
    }
});
