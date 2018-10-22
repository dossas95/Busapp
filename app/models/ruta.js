import DS from 'ember-data';

export default DS.Model.extend({
  tiempo: DS.attr('string'),
  nombre: DS.attr('string')
});
