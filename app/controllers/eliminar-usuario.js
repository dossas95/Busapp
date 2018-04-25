import Controller from '@ember/controller';

export default Controller.extend({
    actions:{
        buscar:function(){
            const cedula = document.getElementById('cc').value;
           
            if(isNaN(cedula)){
                alert("Datos equivocados, debe ingresar una cedula valida");
                location.href="/eliminar-usuario";
            }else{
                document.getElementById('segundo').hidden = false;
                document.getElementById('primero').hidden = true;
            }
        }
        
    }


});
