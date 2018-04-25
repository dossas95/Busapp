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
           		code=parseInt(code);
           		var get=this.store.query('operador', {
           			orderBy:'cedula',
           			equalTo: code}).then((get) => {

           				
           				if (!get || get.content.length === 0) {
           				alert("Usuario no registrado");
           				}
           				else {
           					document.getElementById("cc").value=code;
           					document.getElementById("editar").hidden=false;
           					document.getElementById("inicio").hidden=true;
           				}
           			});
	}
			}
	}
});
