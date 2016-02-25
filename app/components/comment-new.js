import Ember from 'ember';

export default Ember.Component.extend({
  addNewComment: false,
  currentContent: "Press enter when adding content to update preview.",

  actions: {
    showNewCommentForm() {
      this.set('addNewComment', true);
    },

    updateCurrentContent() {
      this.set('currentContent', this.get('content'));
    },

    saveComment() {
      var params = {
        author: this.get('author'),
        content: this.get('content'),
        timestamp: Date.now(),
        post: this.get('post')
      };
      this.set('addNewComment', false),
      this.sendAction('saveComment', params);
    }
  }
});
