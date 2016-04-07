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
    },
    updateProject(project, params) {
      Object.keys(params).forEach(function(key) {
        if(params[key]!==undefined) {
          project.set(key,params[key]);
        }
      });
      project.save();
      this.transitionTo('admin');
    },
    delete(project) {
      if(confirm('Are you sure you want to delete this project?')) {
        project.destroyRecord();
        this.transitionTo('admin');
      }
    }
  }
});
