import Ember from 'ember';

export default Ember.Component.extend({

  actions: {
    destroyComment(comment) {
      this.sendAction('destroyComment', comment);
    },

    editComment(comment, params) {
      this.set('showEditCommentForm', false);
      this.sendAction('editComment', comment, params);
    }
  }
});
