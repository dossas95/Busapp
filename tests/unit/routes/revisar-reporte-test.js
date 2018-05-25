import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | revisar-reporte', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:revisar-reporte');
    assert.ok(route);
  });
});
