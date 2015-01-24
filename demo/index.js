'use strict';
var yeoman = require('yeoman-generator');

module.exports = yeoman.generators.Base.extend({
  initializing: function () {
    this.log('You called demo generator of wdevBase generator');

    this.argument('name', {
      required: false,
      type: String,
      desc: 'The subgenerator name'
    });
  },
  
  copyDemoFiles: function(){
      this.copy("_demo.css", "app/css/demo.css");
      this.copy("_demo.phtml", "app/sections/demo.phtml");
  },
  
  copyImageFiles: function(){
        this.copy("images/bg.jpg", "build/images/bg.jpg");
        this.copy("images/cat.png", "build/images/cat.png");
        this.copy("images/wireframe/centered-paragraph.png", "build/images/wireframe/centered-paragraph.png");
        this.copy("images/wireframe/image-square.png", "build/images/wireframe/image-square.png");
        this.copy("images/wireframe/image-text.png", "build/images/wireframe/image-text.png");
        this.copy("images/wireframe/image.png", "build/images/wireframe/image.png");
        this.copy("images/wireframe/media-paragraph-alt.png", "build/images/wireframe/media-paragraph-alt.png");
        this.copy("images/wireframe/media-paragraph.png", "build/images/wireframe/media-paragraph.png");
        this.copy("images/wireframe/paragraph.png", "build/images/wireframe/paragraph.png");
        this.copy("images/wireframe/short-paragraph.png", "build/images/wireframe/short-paragraph.png");
        this.copy("images/wireframe/square-image.png", "build/images/wireframe/square-image.png");
        this.copy("images/wireframe/text-image.png", "build/images/wireframe/text-image.png");
        this.copy("images/wireframe/white-image.png", "build/images/wireframe/white-image.png");
    }
});
