import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('project');
  },
  actions: {
    saveProject(params){
      var newProject = this.store.createRecord('project', params);
      newProject.save();
      this.transitionTo('admin');
    }
  }
});
