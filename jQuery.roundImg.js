/*
 * jQuery roundImg Plugin
 * Example at: http://jsfiddle.net/JJenZz/3gYqj/
 * Copyright (c) 2010 J. Smith (@jjenzz)
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 *
 * $('img.rounded').roundImg(10);
 */
(function($) {
    $.fn.roundImg = function(radius) {
        var img, roundedCss;
        
        return this.each(function() {
            img = $(this);
            
            roundedCss = [
                'display: inline-block;',
                'background: url(' + this.src + ') no-repeat center;',
                '-webkit-border-radius: ' + radius + 'px;',
                '-moz-border-radius: ' + radius + 'px;',
                'border-radius: ' + radius + 'px;'
            ];
            
            img.wrap('<span class="' + this.className + '" style="' + roundedCss.join(' ') + '" />');
            img.removeClass(this.className).css({'visibility': 'hidden', 'vertical-align': 'bottom'});
        });
    }
})(jQuery);
