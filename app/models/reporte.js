import DS from 'ember-data';

export default DS.Model.extend({
    descripcion: DS.attr('String'),
    estado: DS.attr('String')
});
