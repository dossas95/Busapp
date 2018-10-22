import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | conductor', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:conductor');
    assert.ok(route);
  });
});
