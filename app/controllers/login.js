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
                controller.transitionToRoute('administrador');
                
            },(error) => {
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
        },
        logout: function () {
            this.get('session').close();
        }
    }

});
