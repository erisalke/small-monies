/*jshint node:true*/
/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    lessOptions: {
      paths: [
        'bower_components/bootstrap/less',
        'bower_components/startbootstrap-sb-admin-2/less',
      ]
    }
  });

  app.import('bower_components/morrisjs/morris.css');
  app.import('bower_components/morrisjs/morris.js');

  // font-awesome fonts
  app.import('bower_components/font-awesome/css/font-awesome.min.css');
  app.import('bower_components/font-awesome/fonts/fontawesome-webfont.eot', {destDir: 'fonts'});
  app.import('bower_components/font-awesome/fonts/fontawesome-webfont.svg', {destDir: 'fonts'});
  app.import('bower_components/font-awesome/fonts/fontawesome-webfont.ttf', {destDir: 'fonts'});
  app.import('bower_components/font-awesome/fonts/fontawesome-webfont.woff', {destDir: 'fonts'});
  app.import('bower_components/font-awesome/fonts/FontAwesome.otf', {destDir: 'fonts'});

  app.import('bower_components/bootstrap/dist/js/bootstrap.js');
  app.import('bower_components/metisMenu/dist/metisMenu.css');
  app.import('bower_components/metisMenu/dist/metisMenu.js');
  app.import('bower_components/startbootstrap-sb-admin-2/dist/js/sb-admin-2.js');

  return app.toTree();
};
