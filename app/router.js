import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('admin');
  this.route('project', {path: '/project/:project_id'});
  this.route('portfolio');
});

export default Router;
