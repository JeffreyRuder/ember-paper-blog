import Ember from 'ember';

export default Ember.Component.extend({
  currentContent: "Press enter when adding or changing content to update preview.",

  actions: {
    updateCurrentContent() {
      this.set('currentContent', this.get('model.content'));
    },

    editPost(model) {
      var params = {
        author: this.get('model.author'),
        // timestamp: Date.now(),
        title: this.get('model.title'),
        content: this.get('model.content'),
        preview_content: this.get('model.content').split(/\n|\r|\n\r|\r\n/)[0],
        image_url: this.get('model.image_url')
      };
      this.sendAction('editPost', model, params);
    }
  }
});
