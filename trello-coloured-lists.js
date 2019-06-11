// ==UserScript==
// @name         Trello coloured lists
// @version      5.0.0
// @description  Add coloured backgrounds to Trello lists.
// @author       Gareth J M Saunders
// @license      GNU General Public License v3.0
// @homepageURL  https://github.com/garethjmsaunders/trello-coloured-lists/
// @supportURL   https://github.com/garethjmsaunders/trello-coloured-lists/issues
// @updateURL    https://github.com/garethjmsaunders/trello-coloured-lists/blob/master/trello-coloured-lists.js
// @include      https://trello.com/*
// @require      https://code.jquery.com/jquery-3.4.1.min.js
// @grant        none
// ==/UserScript==

$(document).ready(function() {

    console.log('GJMS: Hey! Trello colour columns Tampermonkey script is running...');
    console.log('GJMS: Loading colours...');

    var darkred   = '#a61c00', // firebrick
        red       = '#e06666', // indianred
        orange    = '#f6b26b', // sandybrown
        yellow    = '#ffd966', // khaki
        green     = '#93c47d', // darkseagreen
        cyan      = '#45818e', // steelblue
        blue      = '#6fa8dc', // cornflowerblue
        darkblue  = '#3d85c6', // steelblue
        violet    = '#674ea7', // slateblue
        magenta   = '#a64d79', // royalheath


        black     = '#333333', // nightrider
        dark      = '#666666', // dimgray
        white     = '#ffffff'; // white


    /** Ensure colour of labels while editing is consistent regardless of background colour
     *
     * @version 1.0.0 2017-11-04
     * @since   4.3.0
     */

    $("<style type='text/css'>textarea.js-list-name-input.is-editing { background-color: #e8e8e8 !important; color: black !important; }</style>").appendTo("head");


    /** Scrum for Trello - Ensure list totals are visible on dark lists
     *
     * @version 1.0.0 2017-11-04
     * @see     http://scrumfortrello.com/
     * @since   4.3.0
     */

    $("<style type='text/css'>.js-dark-list .points, .js-dark-list .js-open-card-composer { color: white ; } .js-dark-list a.js-open-card-composer:hover { color: black ; text-decoration: underline;} .js-dark-list .cpoints { color: #e8e8e8 ; } }</style>").appendTo("head");


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
     *  Triggered by setTimeout
     *
     * @version 5.0.0 2019-06-11
     * @author  Gareth J M Saunders <gareth@garethjmsaunders.co.uk>
     * @license http://opensource.org/licenses/gpl-license.php, GNU Public License
     * @since   5.0.0
     */

    function changeColours() {

        console.log('GJMS: Changing column colours...');

        // Dark red, white text
        $("textarea:contains('DarkRed')")
        .css('color', white)
        .parents('.list').css('background', darkred)
        .addClass('js-dark-list');

        // Red - danger
        $("textarea:contains('Bugs'), textarea:contains('Fix'), textarea:contains('Issues')")
        .parents('.list').css('background', red);

        // Orange - warning
        $("textarea:contains('CSA'), textarea:contains('On hold'), textarea:contains('Scheduled')")
        .parents('.list').css('background', orange);

        // Yellow - nearly ready
        $("textarea:contains('F.U.N.'), textarea:contains('QA'), textarea:contains('Testing')")
        .parents('.list').css('background', yellow);

        // Green - in progress
        $("textarea:contains('Doing'), textarea:contains('In progress')")
        .parents('.list').css('background', green);

        // Cyan, white text
        $("textarea:contains('PM')")
        .css('color', white)
        .parents('.list').css('background', cyan)
        .addClass('js-dark-list');

        // Blue - planning
        $("textarea:contains('Ideas'), textarea:contains('Inbox'), textarea:contains('Planning')")
        .parents('.list').css('background', blue);

        // Dark blue, white text
        $("textarea:contains('DarkBlue')")
        .css('color', white)
        .parents('.list').css('background', darkblue)
        .addClass('js-dark-list');

        // Violet, white text
        $("textarea:contains('Waiting for')")
        .css('color', white)
        .parents('.list').css('background', violet)
        .addClass('js-dark-list');

        // Magenta, white text
        $("textarea:contains('Archive'), textarea:contains('Backlog'), textarea:contains('PRL')")
        .css('color', white)
        .parents('.list').css('background', magenta)
        .addClass('js-dark-list');

        // Dark Grey, white text - complete
        $("textarea:contains('Done'), textarea:contains('Reference')")
        .css('color', white)
        .parents('.list').css('background', dark)
        .addClass('js-dark-list');
    }

    // Run function after 5 seconds and then again every  5 minutes (300 seconds)
    setTimeout(changeColours, 5000);
    setInterval(changeColours, 300000);
});