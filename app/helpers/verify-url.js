import Ember from 'ember';

export function verifyUrl(params) {
  //do something to clean up CSS?
  return new Ember.Handlebars.SafeString("background: url(" + params + ") no-repeat center;background-size:fill;");
}

export default Ember.Helper.helper(verifyUrl);
