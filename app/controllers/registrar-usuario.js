import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    registrar: function() {

      const tip = document.getElementsByName('tipo');
      const nombre = document.getElementById('nombre').value;
      const grupoSanguineo = document.getElementById('gs').value;
      const ced = document.getElementById('cc').value;
      const rh = document.getElementById('rh').value;
      const contrasena = document.getElementById('pass').value;
      const numeroContacto = document.getElementById('nc').value;
      const fechaNacimiento = document.getElementById('fn').value;
      const fotografia = document.getElementById('foto').value;
      const direccion = document.getElementById('dire').value;
      const telefono = document.getElementById('tel').value;

      alert(fechaNacimiento);

      if (nombre == 'Nombre completo' || grupoSanguineo == 'Grupo Sanguíneo (A,B,O,AB)' || ced == 'Cédula' || rh == 'Rh (+ , -)' ||
        contrasena == 'Contraseña' || numeroContacto == 'Número de contacto' || fechaNacimiento == 'Fecha de nacimiento' ||
        direccion == 'Dirección' || telefono == 'Teléfono') {

        alert("Es necesario que llene todos los campos del formulario");
      }
      else if (isNaN(ced) || isNaN(numeroContacto) || isNaN(telefono)) {

        alert("Datos no válidos, verifique la información registrada");
        location.href = "/registrar-usuario";
      }
      else {
        if (tip[0].checked) {
          const cedulas = this.store.query('operador', {
            orderBy: 'cedula',
            equalTo: parseInt(ced)
          }).then((cedulas) => {
            if (!cedulas || cedulas.content.length === 0) {
              const cedulas1 = this.store.query('conductor', {
                orderBy: 'cedula',
                equalTo: parseInt(ced)
              }).then((cedulas1) => {
                if (!cedulas1 || cedulas1.content.length === 0) {
                  var newOp = this.store.createRecord('operador', {
                    nombre: nombre,
                    cedula: ced,
                    contrasena: contrasena,
                    fecnac: fechaNacimiento,
                    dir: direccion,
                    telefono: telefono,
                    grupsan: grupoSanguineo,
                    rh: rh,
                    numcont: numeroContacto,
                    foto: fotografia,
                  });
                  newOp.save();
                  alert("Operador guardado con éxito");
                  location.href = "/registrar-usuario";
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
        else {
          const cedulas = this.store.query('conductor', {
            orderBy: 'cedula',
            equalTo: parseInt(ced)
          }).then((cedulas) => {
            if (!cedulas || cedulas.content.length === 0) {
              const cedulas1 = this.store.query('operador', {
                orderBy: 'cedula',
                equalTo: parseInt(ced)
              }).then((cedulas1) => {
                if (!cedulas1 || cedulas1.content.length === 0) {
                  var newOp = this.store.createRecord('conductor', {
                    nombre: nombre,
                    cedula: ced,
                    contrasena: contrasena,
                    fecnac: fechaNacimiento,
                    dir: direccion,
                    telefono: telefono,
                    grupsan: grupoSanguineo,
                    rh: rh,
                    numcont: numeroContacto,
                    foto: fotografia,
                  });
                  newOp.save();
                  alert("Conductor guardado con éxito");
                  location.href = "/registrar-usuario";
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
          });
        }
      }
    }
  }
});
