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
                      const cedulas1 = this.store.query('conductor', {
                        orderBy: 'cedula',
                        equalTo: parseInt(cedula)
                      }).then((cedulas1) => {
                        if (!cedulas1 || cedulas1.content.length === 0){
                          alert("usuario no registrado");
                          location.href="/eliminar-usuario";
                        }
                        else{
                          this.set('cedulas', cedulas1);
                        }
                      });
                    }
                    else{
                        this.set('cedulas', cedulas);
                    }
                  });
            }
        },
        eliminar:function(){
          const cedula = document.getElementById('cc').value;

          const cedulas = this.store.query('operador', {
            orderBy: 'cedula',
            equalTo: parseInt(cedula)
          }).then((cedulas) => {
            if (cedulas.content.length !== 0) {
              let u = cedulas.objectAt(0);
              u.destroyRecord();
              alert("Usuario eliminado con éxito");
              location.href = "/eliminar-usuario";
            }
          });

          const cedulas1 = this.store.query('conductor', {
            orderBy: 'cedula',
            equalTo: parseInt(cedula)
          }).then((cedulas1) => {
            if (cedulas1.content.length !== 0) {
              let u = cedulas1.objectAt(0);
              u.destroyRecord();
              alert("Usuario eliminado con éxito");
              location.href = "/eliminar-usuario";
            }
          });
        }
    }
});
