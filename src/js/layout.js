/** Layout handling scripts */

(function () {
  'use strict';

  var navigationItems = $('.navigation-item');
  var sectionsNames = ['projects', 'skills', 'education', 'mtb', 'resume'];
  var sections = [];
  for (var i = 0; i < sectionsNames.length; i++) {
    var el = $('#' + sectionsNames[i]);
    sections.push({
      name: sectionsNames[i],
      offset: el.offset().top,
    })
  }

  var contentEl = $('#content');
  contentEl.on('scroll', function () {
    var scrollTop = contentEl.scrollTop();
    if (scrollTop === 0) {
      setNavItemActive(sectionsNames[0]);
      return;
    }
    for (var i = sections.length - 1; i >= 0; i--) {
      if (scrollTop > sections[i].offset) {
        setNavItemActive(sections[i + 1].name);
        break;
      }
    }
  });

  function setNavItemActive(name) {
    navigationItems.removeClass('active');
    $('#nav-' + name).addClass('active');
  }
})();
