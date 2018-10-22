import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | generar-reporte', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:generar-reporte');
    assert.ok(route);
  });
});
