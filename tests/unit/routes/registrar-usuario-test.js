import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | registrar-usuario', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:registrar-usuario');
    assert.ok(route);
  });
});
