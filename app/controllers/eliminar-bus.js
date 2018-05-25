import Controller from '@ember/controller';

export default Controller.extend({
    actions:{
        buscar:function(){
            const placa = document.getElementById('plac').value;

            if(placa==null||placa==""){
                alert("Es necesario que especifique la placa del bus que desea eliminar");
                
            }else{
               
                const placas = this.store.query('bus', {
                    orderBy: 'placa',
                    equalTo: placa
                  }).then((placas) => {
                   
                        if (!placas || placas.content.length === 0){
                          alert("El bus no se encuentra en la base de datos");
                          location.href="/eliminar-bus";
                        }
                        else{
                          this.set('placas', placas);
                          document.getElementById('segundo').hidden = false;
                          document.getElementById('primero').hidden = true;
                        }
                      });
                    }      
            }
        ,
        eliminar:function(){
          const placa = document.getElementById('plac').value;

          const placas = this.store.query('bus', {
            orderBy: 'placa',
            equalTo: placa
          }).then((placas) => {
            
              let u = placas.objectAt(0);
              u.destroyRecord();
              alert("Bus eliminado con éxito");
              location.href = "/eliminar-bus";
            
          });

        
        }
    }
});
