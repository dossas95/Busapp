import Controller from '@ember/controller';

export default Controller.extend({
	actions:{
		wrongField() {
			var code=this.get('code');
			var a=typeof code;
			if (code==null||code=="") {
				alert("Es necesario que especifique la cédula del usuario que desea editar");
				this.set("prueba",a);
           	}
           	else if ( isNaN(code)){
           		alert("Datos no válidos, verifique la información registrada");
           		this.set("prueba",a);
           	}
           	else {
           		var cedulas=this.store.query('operador', {
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
		    alert("Usuario editado correctamente");
		    location.href="/editar-usuario";
      }
	}
});
