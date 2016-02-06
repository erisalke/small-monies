import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  category: DS.attr(),
  date: DS.attr(),
  amount: DS.attr(),
  direction: DS.attr()
});
