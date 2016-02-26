import Ember from 'ember';

export default Ember.Component.extend({

  sortProperties: ['timestamp:desc'],
  sortedComments: Ember.computed.sort('post.comments', 'sortProperties'),

  actions: {
    destroyComment(comment) {
      this.sendAction('destroyComment', comment);
    },

    editComment(comment, params) {
      this.sendAction('editComment', comment, params);
    }
  }
});
