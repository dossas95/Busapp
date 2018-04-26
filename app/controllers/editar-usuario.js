import Controller from '@ember/controller';

export default Controller.extend({
	actions:{
		wrongField() {
			var code=this.get('code');
			var a=typeof code;
			if (code==null||code=="") {
				alert("Es necesario que especifique la cédula del usuario que desea editar");
				
           	}
           	else if ( isNaN(code)){
           		alert("Datos no válidos, verifique la información registrada");
           		
           	}
           	else {
           		const cedulas=this.store.query('operador', {
           			orderBy:'cedula',
           			equalTo: parseInt(code)
           		}).then((cedulas) => {
           				if (!cedulas || cedulas.content.length === 0) {
           				alert("Usuario no registrado");
           				}
           				else {
           					document.getElementById("editar").hidden=false;
           					document.getElementById("inicio").hidden=true;
           					this.set('cedulas',cedulas);
           				}
           			});
			}


		},

		finaled() {
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
			const cedulas=this.store.push('operador',{
				cedula: ced,
				nombre: nombre,
               	contrasena: contrasena,
              	fecnac: fechaNacimiento,
              	dir: direccion,
              	telefono: telefono,
              	grupsan: grupoSanguineo,
              	rh: rh,
              	numcont: numeroContacto,
              	foto: "foto",});
			
		    alert("Usuario editado correctamente");
		    location.href="/editar-usuario";
     	}
	}
});
