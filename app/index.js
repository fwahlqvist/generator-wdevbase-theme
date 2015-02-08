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
        type: 'checkbox',
        name: 'features',
        message: 'What more would you like?',
        choices: [{
          name: 'Would you like to create a Breadcrumb section?',
          value: 'addBreadcrumbSection',
          checked: true
        }, {
          name: 'Would you like to create a main section?',
          value: 'addMainSection',
          checked: false
        }, {
          name: 'Would you like to create a demo section?',
          value: 'addDemoSection',
          checked: false
        }]
      }];
    
    
    this.prompt(prompts, function (answers) {
        this.themeName = answers.themeName;
        
        var features = answers.features;
        this.addBreadcrumbSection = features.indexOf('addBreadcrumbSection') !== -1;
        this.addMainSection = features.indexOf('addMainSection') !== -1;
        this.addDemoSection = features.indexOf('addDemoSection') !== -1;
        
        //this.addBreadcrumbSection = props.addBreadcrumbSection;
        //this.addMainSection = props.addMainSection;
        //this.addDemoSection = props.addDemoSection;

      done();
    }.bind(this));
  },


    scaffoldFolders: function(){
        this.mkdir("app");
        this.mkdir("app/css");
        this.mkdir("app/js");
        this.mkdir("app/phtml");
        
        //this.mkdir("app/fonts");
        this.mkdir("build");
        this.mkdir("build/css");
        this.mkdir("build/js");
        this.mkdir("build/images");
        this.mkdir("build/images/wireframe");
    },
    
    copyMainFiles: function(){
        this.copy("css/_app.css", "app/css/app.css");
        this.copy("css/_semantic_cdn_overrides.css", "app/css/1semantic_cdn_overrides.css");//Making sure this is first file to merge
        this.copy("js/_angular-semantic-ui.js", "app/js/angular-semantic-ui.js");
        this.copy("js/_scriptsHead.js", "app/js/scriptsHead.js");
        this.copy("js/_scriptsFooter.js", "app/js/scriptsFooter.js");
        this.copy("php/_config.php", "config.php");
        this.copy("phtml/_footer.phtml", "app/phtml/footer.phtml");
        this.copy("phtml/_header.phtml", "app/phtml/header.phtml");
        
        var context = { 
            theme_name: this.themeName 
        };
 
        this.template("phtml/_head.phtml", "app/phtml/head.phtml", context);
    },
    
    copySubGeneratorFiles: function(){
        this.mkdir("app/sections");
        this.mkdir("build/sections");
    },
    
    copyImageFiles: function(){
        this.copy("images/header.jpg", "build/images/header.jpg");
        this.copy("images/statue.jpg", "build/images/statue.jpg");

    },
    
    
    copyProjectFiles: function(){
        this.copy("_gruntfile.js", "Gruntfile.js");
        this.copy("_bower.json", "bower.json");
        this.copy("_package.json", "package.json");
    },
    
    generateBreadcrumbSection: function() {
      if (this.addBreadcrumbSection) {
          var done = this.async();
          this.invoke("wdevbase-theme:breadcrumb", {args: ["Breadcrumb Section"]}, function(){
              done();
          });
        }
    },
    
    generateDemoSection: function() {
      if (this.addDemoSection) {
          var done = this.async();
          this.invoke("wdevbase-theme:demo", {args: ["Demo Section"]}, function(){
              done();
          });
        }
    },

    generateMainSection: function() {
      if (this.addMainSection) {
          var done = this.async();
          this.invoke("wdevbase-theme:main", {args: ["Main Section"]}, function(){
              done();
          });
        }       
    },
    
    
   
  install: function () {
    this.installDependencies({
      skipInstall: this.options['install']
    });
    this.spawnCommand('grunt', ['concat']);
  }
});
