module.exports = function(grunt) {
    grunt.initConfig({
    //task config
      concat: {
        layout: {
          src: ["app/phtml/head.phtml", "app/phtml/header.phtml", "app/sections/*.phtml", "app/phtml/footer.phtml"],
          dest: "build/layout/layout.phtml",
        },
        application: {
          src: ["app/sections/*.phtml"],
          dest: "/build/sections/index.phtml",
        },
        js: {
          src: ["app/js/angular-semantic-ui.js", "app/js/scriptsHead.js", "app/sections/js/*.js", "app/js/scriptsFooter.js"],
          dest: "build/js/scripts.js",
        },
        css: {
          src: ["app/css/*.css"],
          dest: "build/css/app.css",
        },
      },
      
      copy: {
        //fonts: {
        //  expand: true,
        //  cwd: 'app/fonts/',
        //  src: "*.*",
        //  dest: "build/css/themes/default/assets/fonts/"
        //},
        js: {
            expand: true,
            cwd: 'app/js/',
            src: "*.*",
            dest: "build/js",
        }
      },
      
      watch: {
        configFiles: {
            files: ["app/phtml/head.phtml", "app/phtml/meta.phtml", "app/js/index.js", "app/css/main.css", "app/phtml/header.phtml", "app/phtml/sections/*.phtml", "app/phtml/footer.phtml", "app/css/*.css"],
            tasks: ['concat'],
            options: {
            livereload: true,
            nospawn: true
            }
        }
    }
    
    });
    
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.registerTask('default', ['concat']);
};