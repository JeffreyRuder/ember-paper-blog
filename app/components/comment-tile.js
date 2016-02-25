import Ember from 'ember';

export default Ember.Component.extend({
  showEditCommentForm: false,

  actions: {
    destroyComment(comment) {
      this.sendAction('destroyComment', comment);
    },

    displayEditCommentForm()  {
      this.set('showEditCommentForm', true);
    },

    hideEditCommentForm()  {
      this.set('showEditCommentForm', false);
    },

    editComment(comment) {
      var params = {
        author: this.get('author'),
        content: this.get('content'),
        edit_timestamp: Date.now(),
        post: this.get('post')
      };
      this.set('showEditCommentForm', false);
      this.sendAction('editComment', comment, params);
    }
  }
});
