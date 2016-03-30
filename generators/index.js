'use strict';

var yeoman = require('yeoman-generator');

module.exports = yeoman.Base.extend({
  prompting: function () {
    var done = this.async();

    this.prompt({
      default: this.appname,
      message: 'Your project name',
      name: 'nameProject',
      type: 'input'
    }, function (answers) {
      this.log(answers.name);
      this.props = answers;

      done();
    }.bind(this));
  },

  writing: {
    config: function () {
      this.fs.copyTpl(
        this.templatePath('app/index.html'),
        this.destinationPath('app/index.html'), {
          bodyTxt: 'Nombre del proyecto: ' + this.props.nameProject
        }
      );
    },

    install: function () {
      // this.installDependencies();
    }
  }
});
