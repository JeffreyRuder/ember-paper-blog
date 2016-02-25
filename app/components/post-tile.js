import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    transitionTo(route) {
      this.sendAction("transitionTo", route);
    },

    goToPost(post) {
      this.sendAction("goToPost", post.id);
    },

    goToEdit(post) {
      this.sendAction("goToEdit", post.id);
    },

    deletePost(post){
      this.sendAction('deletePost', post);
    }
  }
});
