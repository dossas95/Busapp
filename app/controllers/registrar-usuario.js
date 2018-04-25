import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    registrar: function() {

      const nombre = document.getElementById('nombre').value;
      const grupoSanguineo = document.getElementById('gs').value;
      const cedula = document.getElementById('cc').value;
      const rh = document.getElementById('rh').value;
      const contrasena = document.getElementById('pass').value;
      const numeroContacto = document.getElementById('nc').value;
      const fechaNacimiento = document.getElementById('fn').value;
      const fotografia = document.getElementById('foto').value;
      const direccion = document.getElementById('dire').value;
      const telefono = document.getElementById('tel').value;


      if (nombre == 'Nombre completo' || grupoSanguineo == 'Grupo Sanguíneo (A,B,O,AB)' || cedula == 'Cédula' || rh == 'Rh (+ , -)' ||
          contrasena == 'Contraseña' || numeroContacto == 'Número de contacto' || fechaNacimiento == 'Fecha de nacimiento' ||
          direccion == 'Dirección' || telefono == 'Teléfono'){

            alert("Es necesario que llene todos los campos del formulario");
      }
      else if(isNaN(cedula) || isNaN(numeroContacto) || isNaN(telefono)){

            alert("Datos no válidos, verifique la información registrada");
            location.href="/registrar-usuario";
      }
      else{
        var newOp = this.store.createRecord('operador', {
          nombre: nombre,
          cedula: cedula,
          contrasena: contrasena,
          fecnac: fechaNacimiento,
          dir: direccion,
          telefono: telefono,
          grupsan: grupoSanguineo,
          rh: rh,
          numcont: numeroContacto,
          foto: "foto",
        });
        newOp.save();
        alert("Usuario guardado con éxito");
        location.ref="/registrar-usuario";
      }






    }

}});
