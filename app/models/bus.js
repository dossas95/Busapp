import DS from 'ember-data';

export default DS.Model.extend({
  placa: DS.attr('string'),
  marca: DS.attr('string'),
  modelo: DS.attr('number'),
  fechaRevision: DS.attr('string')
});
