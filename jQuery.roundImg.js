/*!------------------------------------------------------
 * jQuery roundImg
 * http://github.com/jjenzz/jQuery.roundImg
 * ------------------------------------------------------
 * Copyright (c) 2012 J. Smith (@jjenzz)
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 *
 * $('img.rounded').roundImg('10px')
 *
 * or:
 *
 * $('img.rounded').roundImg('10px 50px 10px 50px');
 */
(function($, undefined) {
  $.fn.roundImg = function(value) {
    var roundedCss,
        hasBorderRadius,
        props = 'borderRadius WebkitBorderRadius MozBorderRadius BorderRadius';

    $.each(props.split(' '), function() {
      hasBorderRadius = (document.body.style[this] !== undefined);
      return !hasBorderRadius;
    });

    return this.each(function() {
      // do nothing if border
      // radius is not supported
      if (!hasBorderRadius) {
        return false;
      }

      roundedCss = [
        'display: inline-block;',
        'background: url(' + this.src + ') no-repeat center;',
        '-webkit-border-radius: ' + value + ';',
        '-moz-border-radius: ' + value + ';',
        'border-radius: ' + value + ';'
      ];

      $(this)
        .wrap('<span class="' + this.className + '" style="' + roundedCss.join(' ') + '"/>')
        .css({'visibility': 'hidden', 'vertical-align': 'bottom'})
        .removeClass(this.className);
    });
  };
}(jQuery));
