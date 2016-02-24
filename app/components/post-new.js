import Ember from 'ember';

export default Ember.Component.extend({
  currentContent: "Press enter when adding content to update preview.",

  actions: {
    updateCurrentContent() {
      this.set('currentContent', this.get('content'));
    },

    savePost() {
      var params = {
        author: this.get('author'),
        timestamp: Date.now(),
        title: this.get('title'),
        content: this.get('content')
      };
      this.sendAction('savePost', params);
    }
  }
});
