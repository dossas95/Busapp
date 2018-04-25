import DS from 'ember-data';

export default DS.Model.extend({
  nombre: DS.attr('string'),
  cedula: DS.attr('number'),
  contraseña: DS.attr('string'),
  fecnac: DS.attr('string'),
  dir: DS.attr('string'),
  telefono: DS.attr('number'),
  grupsan: DS.attr('string'),
  rh: DS.attr('string'),
  numcont: DS.attr('number'),
  foto: DS.attr('string')
});
