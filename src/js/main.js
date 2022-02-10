
'use strict';

jQuery(function($) {
    $(document).ready(function () {
        initObjectFitImagesPolyfill();
    })

    function initObjectFitImagesPolyfill() {
        let $ofi = $('img.js-ofi');
        objectFitImages($ofi);
    }

});