import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return Ember.RSVP.hash({
      post: this.store.findRecord('post', params.post_id),
      comments: this.store.query('comment', {filter: {post: params}})
        .then(function(comments) {
          return comments.sortBy('timestamp').reverse()
        })
    });
  },

  actions: {

    transitionTo(route) {
      this.transitionTo(route);
    },

    saveComment(params) {
      var route = this;
      var newComment = this.store.createRecord('comment', params);
      var post = params.post;
      newComment.save().then(function() {
        return post.save().then(function() {
          route.refresh();
        });
      });
    },

    destroyComment(comment) {
      var route = this;
      comment.destroyRecord().then(function() {
        route.refresh();
      });
    }
  }
});
