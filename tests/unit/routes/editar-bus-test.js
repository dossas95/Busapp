import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | editar-bus', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:editar-bus');
    assert.ok(route);
  });
});
