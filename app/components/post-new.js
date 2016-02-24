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
        content: this.get('content'),
        preview_content: this.get('content').split(/\n|\r|\n\r|\r\n/)[0],
        image_url: this.get('image_url')
      };
      console.log(params.preview_content);
      this.sendAction('savePost', params);
    }
  }
});
