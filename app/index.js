'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = yeoman.generators.Base.extend({
  initializing: function () {
    this.pkg = require('../package.json');
  },

  prompting: function () {
    var done = this.async();

    // Have Yeoman greet the user.
    this.log(yosay(
      chalk.red('WdevbaseTheme') + ' generator!'
    ));

    var prompts = [{
        name: 'themeName',
        message: 'What is your theme\'s name ?'
    },{
        type: 'confirm',
        name: 'addDemoSection',
        message: 'Would you like to create a demo section?',
        default: true
    }];

    this.prompt(prompts, function (props) {
        this.themeName = props.appName;
        this.addDemoSection = props.addDemoSection;

      done();
    }.bind(this));
  },

    scaffoldFolders: function(){
        this.mkdir("app");
        this.mkdir("app/css");
        this.mkdir("app/js");
        this.mkdir("app/phtml");
        this.mkdir("app/sections");
        //this.mkdir("app/fonts");
        this.mkdir("build");
        this.mkdir("build/css");
        this.mkdir("build/js");
        this.mkdir("build/sections");
        this.mkdir("build/images");
        this.mkdir("build/images/wireframe");
    },
    
    copyMainFiles: function(){
        this.copy("css/_main.css", "app/css/main.css");
        this.copy("css/_semantic_cdn_overrides.css", "app/css/cdn_overrides.css");
        this.copy("js/_index.js", "app/js/index.js");
        this.copy("php/_config.php", "config.php");
        this.copy("phtml/_footer.phtml", "app/phtml/footer.phtml");
        this.copy("phtml/_head.phtml", "app/phtml/head.phtml");
        this.copy("phtml/_header.phtml", "app/phtml/header.phtml");
    },
    
    
    
    copyProjectFiles: function(){
        this.copy("_gruntfile.js", "Gruntfile.js");
        this.copy("_bower.json", "bower.json");
        this.copy("_package.json", "package.json");
    },
    
    generateDemoSection: function() {
      if (this.addDemoSection) {
          var done = this.async();
          this.invoke("wdevbase-theme:demo", {args: ["Demo Section"]}, function(){
              done();
          });
      } //else {
          //this.write( "app/menu.html", "");
      //}
},

  install: function () {
    this.installDependencies({
      skipInstall: this.options['install']
    });
    this.spawnCommand('grunt', ['concat']);
  }
});
