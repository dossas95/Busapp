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
                const cedulas = this.store.query('operador', {
                    orderBy: 'cedula',
                    equalTo: parseInt(cedula)
                  }).then((cedulas) => {
                    if (!cedulas || cedulas.content.length === 0){
                      alert("usuario no registrado");
                    }
                    else{
                        this.set('cedulas', cedulas);
                    }
                  });
            
            
                                
                
            }
        },
        eliminar:function(){
            var x = confirm("Desea eliminar el usuario?");
            if(x){
                document.getElementById('segundo').hidden = true;
                document.getElementById('primero').hidden = false;
            }
        }
        
    }


});
