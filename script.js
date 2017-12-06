(function(){
  'use strict'

  document.addEventListener('DOMContentLoaded', function(){


    setTimeout(stylesheetChange, 1);
    setInterval(stylesheetChange, 3600000);

    function stylesheetChange() {
      var d = new Date(),
        hours = d.getHours(),
        csslight = document.getElementById('css_light'),
        cssdark = document.getElementById('css_dark');

      if (hours < 7 || hours >= 19) {
        csslight.disabled = true;
        cssdark.disabled = false;
      } else {
        csslight.disabled = false;
        cssdark.disabled = true;
      }
    }

  });

})();
