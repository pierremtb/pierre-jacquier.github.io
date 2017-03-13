/** Translations handling scripts */

var i18n;
(function () {
  'use strict';

  // var i18n;
  var languages = ['en-US', 'fr', 'de'];

  i18n = domI18n({
    languages: languages,
  });

  var languagesButtons = {};
  for (var i = 0; i < languages.length; i++) {
    languagesButtons[languages[i]] = $('#' + languages[i]);
    languagesButtons[languages[i]].on('click', function (event) {
      changeLanguage(event.target.id);
    })
  }

  var automaticLanguage = navigator.languages && navigator.languages[0] ||
    navigator.language ||
    navigator.userLanguage;
  changeLanguage(languages.indexOf(automaticLanguage) > -1 ? automaticLanguage : 'en-US');

  $('html').css('opacity', 1);

  function changeLanguage(code) {
    // $('html').css('opacity', 0);
    $('#expandable-circle').addClass('expanded');
    $('#expandable-circle').css('opacity', 1);
    $('#name').addClass('expanded');
    $('#languages').addClass('txt-on-accent');
    setTimeout(function() {
      i18n.changeLanguage(code);
      for(var i in languagesButtons) {
        languagesButtons[i].removeClass('language-active');
      }
      languagesButtons[code].addClass('language-active');
      // $('html').css('opacity', 1);
      setTimeout(function () {
        $('#expandable-circle').css('opacity', 0);
        $('#expandable-circle').removeClass('expanded');
        $('#languages').removeClass('txt-on-accent');
        $('#name').removeClass('expanded');
      }, 200);
    }, 600);
  }

})();
