import Controller from '@ember/controller';

export default Controller.extend({
    actions:{
        generar: function(){
            const descripcion = document.getElementById("cuadroTexto").value;
            alert(descripcion);
        }

    }
});
