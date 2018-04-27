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
           				if (!cedulas || cedulas.content.length === 0){
           				  const cedulas1 = this.store.query('conductor', {
           				    orderBy: 'cedula',
                      equalTo: parseInt(code)
                    }).then((cedulas1) => {
                      if (!cedulas1 || cedulas1.content.length === 0){
                        alert("Usuario no registrado");
                        location.href="/editar-usuario";
                      }
                      else{
                        document.getElementById("editar").hidden = false;
                        document.getElementById("inicio").hidden = true;
                        alert("Vas a editar a un conductor");
                        this.set('cedulas',cedulas1);
                      }
                    });
           				}
           				else {
           					document.getElementById("editar").hidden=false;
           					document.getElementById("inicio").hidden=true;
                    alert("Vas a editar a un operador");
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

        const cedulas = this.store.query('operador', {
          orderBy: 'cedula',
          equalTo: parseInt(ced)
        }).then((cedulas) => {
          if (cedulas.content.length !== 0) {
            let u = cedulas.objectAt(0);
            u.set('nombre', nombre);
            u.set('contrasena', contrasena);
            u.set('dir', direccion);
            u.set('fecnac', fechaNacimiento);
            u.set('foto', fotografia);
            u.set('grupsan', grupoSanguineo);
            u.set('numcont', numeroContacto);
            u.set('rh', rh);
            u.set('telefono', telefono);
            cedulas.save();
            alert("Operador guardado con éxito");
            location.href = "/editar-usuario";
          }
        });

      const cedulas1 = this.store.query('conductor', {
        orderBy: 'cedula',
        equalTo: parseInt(ced)
      }).then((cedulas1) => {
        if (cedulas1.content.length !== 0) {
          let u = cedulas1.objectAt(0);
          u.set('nombre', nombre);
          u.set('contrasena', contrasena);
          u.set('dir', direccion);
          u.set('fecnac', fechaNacimiento);
          u.set('foto', fotografia);
          u.set('grupsan', grupoSanguineo);
          u.set('numcont', numeroContacto);
          u.set('rh', rh);
          u.set('telefono', telefono);
          cedulas1.save();
          alert("Operador guardado con éxito");
          location.href = "/editar-usuario";
        }
      });

     	}
	}
});
