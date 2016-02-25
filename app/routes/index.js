import Ember from 'ember';

export default Ember.Route.extend({
  breadCrumb: 'Home',
  
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

    goToPost(postID) {
      this.transitionTo('post', postID);
    },

    goToEdit(postID) {
      this.transitionTo('edit', postID);
    },

    deletePost(post) {
      var route = this;
      var comment_deletions = post.get('comments').map(function(comment) {
        return comment.destroyRecord();
      });
      Ember.RSVP.all(comment_deletions).then(function() {
        return post.destroyRecord().then(function() {
          route.refresh();
        });
      });
    }
  }
});
