import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('post').then(function(posts) {
      return posts.sortBy('timestamp').reverse();
    });
  },

  actions: {
    transitionTo(route) {
      this.transitionTo(route);
    },
  }
});
