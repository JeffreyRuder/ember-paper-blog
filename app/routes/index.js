import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('post', {reload: true})
      .then(function(posts) {
        return posts.sortBy('timestamp').reverse();
      });
  },

  actions: {
    transitionTo(route) {
      this.transitionTo(route);
    },

    goToEdit(postID) {
      this.transitionTo('edit', postID);
    },

    deletePost(post) {
      var route = this;
      post.destroyRecord().then(function() {
        route.refresh();
      });
    }
  }
});
