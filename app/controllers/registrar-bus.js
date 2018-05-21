import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    registrar: function() {

      const placa = document.getElementById('placa').value;
      const marca = document.getElementById('marca').value;
      const modelo = document.getElementById('modelo').value;
      const fechaR = document.getElementById('fr').value;

    

      if (placa == 'Placa del vehículo' || marca == 'Marca' || modelo == 'Modelo' ) {

        alert("Es necesario que llene todos los campos del formulario");
      }
      else if (isNaN(modelo) ) {

        alert("Datos no válidos, verifique la información registrada");
        location.href = "/registrar-bus";
      }
      else {
       
          const placas = this.store.query('bus', {
            orderBy: 'placa',
            equalTo: placa
          }).then((placas) => {
            if (!placas || placas.content.length === 0) {
              const placas1 = this.store.query('bus', {
                orderBy: 'placa',
                equalTo: placa
              }).then((placas1) => {
                if (!placas1 || placas1.content.length === 0) {
                  var newOp = this.store.createRecord('bus', {
                   placa: placa,
                   marca:marca,
                   modelo:modelo,
                   fechaRevision:fechaR
                  });
                  newOp.save();
                  alert("Bus guardado con éxito");
                  location.href = "/registrar-bus";
                }
                else {
                  var opc = confirm("El bus ya se encuentra registrado en el sistema. ¿Desea editarlo?");
                  if (opc) {
                    location.href = "/editar-bus";
                  }
                  else {
                    location.href = "/registrar-bus";
                  }
                }
              });
            }
            else {
              var opc = confirm("El usuario ya se encuentra registrado en el sistema. ¿Desea editarlo?");
              if (opc) {
                location.href = "/editar-usuario";
              }
              else {
                location.href = "/registrar-usuario";
              }
            }
          });
        
        
      }
    }
  }
});
