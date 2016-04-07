import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    toggleDetail(){
      this.toggleProperty('addNewProject');
    },
    saveProject(){
      var params = {
        title: this.get('title') ? this.get('title') : " ",
        details: this.get('details') ? this.get('details') : " ",
        technologies: this.get('technologies') ? this.get('technologies') : " ",
        image: this.get('image') ? this.get('image') : " ",
      };
      this.toggleProperty('addNewProject');
      this.sendAction('saveProject', params);
    }
  }
});
