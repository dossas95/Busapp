import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('login');
  this.route('registrar-usuario');
  this.route('editar-usuario');
  this.route('eliminar-usuario');
  this.route('registrar-bus');
  this.route('editar-bus');
  this.route('eliminar-bus');
  this.route('generar-reporte');
  this.route('administrador');
  this.route('operador');
  this.route('conductor');
  this.route('revisar-ruta');
<<<<<<< HEAD
  this.route('registrar-ruta');
=======
  this.route('revisar-reporte');
>>>>>>> 1e0dc8425bb77a80fc91b4093093c0256d1a5af4
});

export default Router;
