import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    registrar: function() {

      const nom = document.getElementById('nombre').value.trim();
      const tiem = document.getElementById('tiempo').value;
      

    

      if (nom == 'Nombre de la ruta'  ) {

        alert("Es necesario que llene todos los campos del formulario");
      }
      
      else {
       
          const rutas = this.store.query('ruta', {
            orderBy: 'nombre',
            equalTo: nom
          }).then((rutas) => {
            if (!rutas || rutas.content.length === 0) {
              
                  var newOp = this.store.createRecord('ruta', {
                   nombre: nom,
                   tiempo:tiem,
                  });
                  newOp.save();
                  alert("Ruta guardada con éxito");
                  location.href = "/registrar-ruta";
                }
                else {
                  var opc = confirm("La ruta ya se encuentra registrada en el sistema. ¿Desea editarla?");
                  if (opc) {
                    location.href = "/editar-ruta";
                  }
                  else {
                    location.href = "/registrar-ruta";
                  }
                }
              
            
            
          });
        
        
      }
    }
  }
});
