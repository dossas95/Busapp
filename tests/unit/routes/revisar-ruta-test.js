import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | revisar-ruta', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:revisar-ruta');
    assert.ok(route);
  });
});
