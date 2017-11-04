// ==UserScript==
// @name         Trello coloured lists
// @version      4.1.0
// @description  Add coloured backgrounds to Trello lists.
// @author       Gareth J M Saunders
// @homepageURL  https://github.com/garethjmsaunders/trello-coloured-lists/
// @supportURL   https://github.com/garethjmsaunders/trello-coloured-lists/issues
// @updateURL    https://github.com/garethjmsaunders/trello-coloured-lists/blob/master/trello-coloured-lists.js
// @include      https://trello.com/*
// @require      https://code.jquery.com/jquery-3.2.1.min.js
// @grant        none
// ==/UserScript==

$(document).ready(function() {

    console.log('GJMS: Hey! Trello colour columns Tampermonkey script is running...');
    console.log('GJMS: Loading colours...');

    var red       = '#e06666', // indianred
        orange    = '#f6b26b', // sandybrown
        yellow    = '#ffd966', // khaki
        green     = '#93c47d', // darkseagreen
        blue      = '#6fa8dc', // cornflowerblue
        violet    = '#674ea7', // slateblue
        magenta   = '#a64d79', // royalheath

        black     = '#333333', // nightrider
        dark      = '#666666', // dimgray
        white     = '#ffffff'; // white


    /** Make jQuery :contains() selector case insensitive
     *
     * @version 1.0.0 2017-11-03
     * @see https://css-tricks.com/snippets/jquery/make-jquery-contains-case-insensitive/
     * @since 3.9.0
     */

    $.expr[":"].contains = $.expr.createPseudo(function(arg) {
        return function( elem ) {
            return $(elem).text().toUpperCase().indexOf(arg.toUpperCase()) >= 0;
        };
    });




    /** Change colour of Trello columns
     *  Triggered by hover on the page
     *
     * @version 4.0.0 2017-11-03
     * @author Gareth J M Saunders <gareth@garethjmsaunders.co.uk>
     * @license http://opensource.org/licenses/gpl-license.php, GNU Public License
     * @since 3.9.0
     */

    $('body').hover(function() {

        console.log('GJMS: Changing column colours...');

        // Red - danger
        $("textarea:contains('Bugs'), textarea:contains('Issues'), textarea:contains('Fix')")
        .parents('.list').css('background', red);

        // Orange - warning
        $("textarea:contains('On hold'), textarea:contains('Scheduled')")
        .parents('.list').css('background', orange);

        // Yellow - nearly ready
        $("textarea:contains('QA'), textarea:contains('Testing')")
        .parents('.list').css('background', yellow);

        // Green - in progress
        $("textarea:contains('In progress'), textarea:contains('Doing')")
        .parents('.list').css('background', green);

        // Blue - planning
        $("textarea:contains('Ideas'), textarea:contains('Inbox'), textarea:contains('Planning')")
        .parents('.list').css('background', blue);

        // Violet, white text
        $("textarea:contains('Waiting for')")
        .css('color', white)
        .parents('.list').css('background', violet);

        // Magenta, white text
        $("textarea:contains('Archive')")
        .css('color', white)
        .parents('.list').css('background', magenta);

        // Dark Grey, white text - complete
        $("textarea:contains('Reference'), textarea:contains('Done')")
        .css('color', white)
        .parents('.list').css('background', dark);

    });

});
