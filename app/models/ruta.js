import DS from 'ember-data';

export default DS.Model.extend({
  identificacion: DS.attr('number'),
  nombre: DS.attr('string')
});
