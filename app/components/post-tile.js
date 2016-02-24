import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    transitionTo(route) {
      this.sendAction("transitionTo", route);
    },
  }
});
