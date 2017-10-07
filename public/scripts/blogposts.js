(function (window) {
  'use strict';

  var App = window.App || {};
  var $ = window.jQuery;

  function BlogPost(selector) {
    if (!selector) {
      throw new Error('No selector provided');
    }

    this.$element = $(selector);
    if (this.$element.length === 0) {
      throw new Error('Could not find element with selector: ' + selector);
    }
  }

  CheckList.prototype.addRow = function (blogpost) {
    //var rowElement = new Row(blogpost);

    //this.$element.append(rowElement.$element);
  };

  function Row(blogpost) {
    //create media object row https://www.w3schools.com/bootstrap/bootstrap_media_objects.asp
    //create element
    //before() to element
  }

  App.CheckList = CheckList;
  window.App = App;
})(window);
