import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | eliminar-usuario', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:eliminar-usuario');
    assert.ok(route);
  });
});
