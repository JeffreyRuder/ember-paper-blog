import DS from 'ember-data';

export default DS.Model.extend({
  author: DS.attr(),
  timestamp: DS.attr(),
  title: DS.attr(),
  content: DS.attr()  
});
