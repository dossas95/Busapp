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
  this.route('registrar-ruta');
});

export default Router;
