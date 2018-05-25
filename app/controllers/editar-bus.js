import Controller from '@ember/controller';

export default Controller.extend({
  actions:{
	  wrongField() {
		  var code=this.get('code');
		  var a=typeof code;
			if (code==null||code=="") {
			  alert("Es necesario que especifique la placa del bus que desea editar");
            }
             else{
                const placas=this.store.query('bus', {
                orderBy:'placa',
                equalTo: code
                }).then((placas) => {
                if (!placas || placas.content.length === 0){
           		    
                      alert("El bus no se encuentra en la base de datos");
                      location.href="/editar-bus";
                    
           		}else {
           		  document.getElementById("editarBus").hidden=false;
           			document.getElementById("inicio").hidden=true;
                
           			this.set('placas',placas);
           		}
        });
		  }
		},
		finaled() {
        const pla = document.getElementById('placa').value;
		const mar = document.getElementById('marca').value;
        const mod  = document.getElementById('modelo').value;
        const rev  = document.getElementById('fr').value;
        const placas = this.store.query('bus', {
                          orderBy: 'placa',
                          equalTo: pla
                      }).then((placas) => {
                          if (placas.content.length !== 0) {
                            let u = placas.objectAt(0);
                            u.set('marca', mar);
                            u.set('modelo', mod);
                            u.set('fechaRevision', rev);
                            
                            
                            placas.save();
                            alert("Bus guardado con éxito");
                            location.href = "/editar-bus";
                          }
                      });

    
    }
	}
});
