/**
 * Created by cbrownroberts on 11/18/16.
 */

require('../libs/locCallClass.js');

var UmlFloorMapModule = (function () {
    var richterStacks = [

        { "id": "4.A1.e", "start": "A",       "end": "BE9999 .Z9" },
        { "id": "9.A1.e", "start": "BF",      "end": "BF311.0" },
        { "id": "7.A1.e", "start": "BF311.P", "end": "BZ9999 .Z9" },
        { "id": "7.A1.e", "start": "C",       "end": "CZ9999 .Z9" },
        { "id": "7.A1.e", "start": "D",       "end": "DZ9999 .Z9" },
        { "id": "7.A1.e", "start": "E",       "end": "EZ9999 .Z9" },
        { "id": "7.A1.e", "start": "F",       "end": "F2199" },
        { "id": "6.A1.e", "start": "F2200",   "end": "FZ" },
        { "id": "6.A1.e", "start": "G",       "end": "GZ9999 .Z9" },
        { "id": "6.A1.e", "start": "H",       "end": "HZ9999 .Z9" },
        { "id": "6.A1.e", "start": "J",       "end": "JV9999 .Z9" },
        { "id": "5.A1.e", "start": "JW",      "end": "JZ9999 .Z9" },
        { "id": "5.A1.e", "start": "K",       "end": "KZ9999 .Z9" },
        { "id": "5.A1.e", "start": "L",       "end": "MZ9999 .Z9" },
        { "id": "5.A1.e", "start": "N",       "end": "OZ9999 .Z9" },
        { "id": "5.A1.e", "start": "P0000",   "end": "PQ7297 .Z9" },
        { "id": "4.A1.e", "start": "PQ7928",  "end": "PZ9999 .Z9" },
        { "id": "4.A1.e", "start": "Q",       "end": "QG9999 .Z9" },
        { "id": "9.A1.e", "start": "QH",      "end": "QZ9999 .Z9" },
        { "id": "9.A1.e", "start": "R",       "end": "RZ9999 .Z9" },
        { "id": "9.A1.e", "start": "S",       "end": "SZ9999 .Z9" },
        { "id": "9.A1.e", "start": "T",       "end": "TZ9999 .Z9" },
        { "id": "9.A1.e", "start": "U",       "end": "UZ9999 .Z9" },
        { "id": "9.A1.e", "start": "V",       "end": "YZ9999 .Z9" },
        { "id": "7.A1.e", "start": "Z",       "end": "ZZ9999 .Z9" }

    ];


    var init = function() {
        console.log('UmlFloorMap Module Loaded');

        loc = new locCallClass();



    };

    return {
        init: init,
        richterStacks: richterStacks
    }

})();


module.exports = UmlFloorMapModule;