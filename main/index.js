'use strict';
var yeoman = require('yeoman-generator');

module.exports = yeoman.generators.Base.extend({
  initializing: function () {
    this.log('You called main generator of wdevBase generator');

    this.argument('name', {
      required: false,
      type: String,
      desc: 'The subgenerator name'
    });
  },

  copyMainFiles: function(){
      this.copy("css/_main.css", "app/css/main.css");
      this.copy("phtml/_main.phtml", "app/sections/main.phtml");
      this.copy("js/_main.js", "app/sections/js/main.js");
      this.copy("images/mainimage.jpg", "build/images/mainimage.jpg");
      this.copy("images/reveal.png", "build/images/reveal.png");
  },
});
