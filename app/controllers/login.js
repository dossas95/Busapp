import Controller from '@ember/controller';

export default Controller.extend({
    // firebase: Ember.inject.service(),

    /*actions: {
        logout: function () {
            this.get('session').close();
            //controller.set('email', null);
            //controller.set('password', null);

        },
        login(provider) {
            //$('spinner').show();
            let controller = this;
            this.get('session').open('firebase', {
                provider: provider,
                email: this.get('email') || '',
                password: this.get('password') || '',

            }).then((data) => {
                controller.transitionToRoute('home');
                // console.log(data.currentUser.email);
                this.set('isOk', true);
                setTimeout(() => {
                    this.set('isOk', false);
                }, 1000);
                controller.set('email', null);
                controller.set('password', null);


            }, (error) => {
                const email = this.get('email');
                const password = this.get('password');
                //Validaciones de campos vacios
                if (!email || !password) {
                    this.set('isEmpty', true);
                    setTimeout(() => {
                        this.set('isEmpty', false);
                    }, 1000);
                } else {
                    this.set('isError', true);
                    setTimeout(() => {
                        this.set('isError', false);
                    }, 1000);
                }
            });
           // $('spinner').hide();
           }
        
    }*/
    actions: {
        login: function (provider) {
            //$('spinner').show();
            let controller = this;
            this.get('session').open('firebase', {
                provider: provider,
                email: this.get('email') || '',
                password: this.get('password') || '',

            }).then((data) => {
                this.set('email', '');
                this.set('password', '');
                /*const cedulas = this.store.query('operador',{
                    orderBy: 'cedula',
                    equalTo: parseInt(cedula)
                  }).then((cedulas) => {
                    if (cedulas){

                    }else{
                      const cedulas1 = this.store.query('administrador',{
                        orderBy: 'cedula',
                        equalTo: parseInt(cedula)
                      }).then((cedulas1) =>{
                          if(!cedulas1 || cedulas1.content.length === 0){
                              const cedulas2 = this.store.query('conductor', {
                                orderBy: 'cedula',
                                equalTo: parseInt(cedula)
                              }).then((cedulas2) =>{
                                  if(!cedulas2 || cedulas2.content.lenght === 0){
                                      alert("no se encuentra el uduario en la bd");
                                  }
                              })
                          }
                      })                      
                    }
                  });
                */
               controller.transitionToRoute('administrador');
                
            },(error) => {
                const email = this.get('email');
                const password = this.get('password');
                //Validaciones de campos vacios
                if (!email || !password) {
                    /*this.set('isEmpty', true);
                    setTimeout(() => {
                        this.set('isEmpty', false);
                    }, 1000);*/
                    alert("por favor ingrese ambos campos");
                }else if(email){
                    alert("pendiente por buscar");
                    /*codigo para identificar que el usuario ingresado este registrado*/
                    /*const cedulas = this.store.query('operador', {
                        orderBy: 'cedula',
                        equalTo: parseInt(cedula)
                      }).then((cedulas) => {
                        if (!cedulas || cedulas.content.length === 0){
                          const cedulas1 = this.store.query('administrador',{
                            orderBy: 'cedula',
                            equalTo: parseInt(cedula)
                          }).then((cedulas1) =>{
                              if(!cedulas1 || cedulas1.content.length === 0){
                                  const cedulas2 = this.store.query('conductor', {
                                    orderBy: 'cedula',
                                    equalTo: parseInt(cedula)
                                  }).then((cedulas2) =>{
                                      if(!cedulas2 || cedulas2.content.lenght === 0){
                                          alert("no se encuentra el uduario en la bd");
                                      }
                                  })
                              }
                          })                      
                        }
                      });*/
                }
            });
        },
        logout: function () {
            this.get('session').close();
        }
    }

});
