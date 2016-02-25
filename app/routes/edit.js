import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('post', params.post_id);
  },

  actions: {
    transitionTo(route) {
      this.transitionTo(route);
    },

    editPost(model, params) {
      Object.keys(params).forEach(function(key) {
        if (params[key] !== undefined) {
          model.set(key, params[key]);
        }
      });
      model.save();
      this.transitionTo('index');
    },
  }
});
