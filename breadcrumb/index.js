'use strict';
var yeoman = require('yeoman-generator');

module.exports = yeoman.generators.Base.extend({
  initializing: function () {
    this.log('You called breadcrumb generator of wdevBase generator');

    this.argument('name', {
      required: false,
      type: String,
      desc: 'The subgenerator name'
    });
  },

  copyMainFiles: function(){
      this.copy("css/_breadcrumb.css", "app/css/breadcrumb.css");
      this.copy("phtml/_breadcrumb.phtml", "app/sections/breadcrumb.phtml");
  },
});
