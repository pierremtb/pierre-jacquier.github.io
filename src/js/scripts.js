/** Project scripts */

(function () {
    'use strict';

    var navigationItems = $('.navigation-item');
    var sectionsNames = ['projects', 'skills', 'education', 'mtb', 'resume'];
    var sections = [];
    _.forEach(sectionsNames, function (sectionName) {
      var el = $('#' + sectionName);
      sections.push({
        name: sectionName,
        offset: el.offset().top,
      })
    });

    var contentEl = $('#content');
    contentEl.on('scroll', function () {
      var scrollTop = contentEl.scrollTop();
      if (scrollTop === 0) {
        setNavItemActive(sectionsNames[0]);
        return;
      }
      for (var i=sections.length - 1; i>=0; i--) {
        if (scrollTop > sections[i].offset) {
          setNavItemActive(sections[i+1].name);
          break;
        }
      }
    });

    function setNavItemActive(name) {
      navigationItems.removeClass('active');
      $('#nav-' + name).addClass('active');
    }
})();
