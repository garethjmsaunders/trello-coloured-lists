// ==UserScript==
// @name Trello boards (generic)
// @description Highlight columns
// @include /^https?://trello\.com/?.*$/
// @require https://code.jquery.com/jquery-3.2.1.min.js
// @version 3.0.0
// @copyleft 2014–2017, Gareth J M Saunders
// ==/UserScript==

// TODO Create JSON array of columns: See http://www.w3schools.com/js/js_json.asp

$(document).ready(function() {

    console.log('Hey! Trello boards Tampermonkey script is running...');

    var black  = '#333333',
        yellow = '#FFFA99',
        purple = '#A98CC1',
        green  = '#76C76D',
        amber  = '#F9AD4A',
        red    = '#B5355D',
        white  = '#fff',
        dark   = '#a9a9a9';

    $('body').hover(function() {
        $("h2:contains('@')").css('color', black).parents('.list').css('background', purple);
        $("h2:contains('THIS')").css('color', black).parents('.list').css('background', yellow);
        $("h2:contains('In progress')").css('color', black).parents('.list').css('background', yellow);
        $("h2:contains('IN PROGRESS')").css('color', black).parents('.list').css('background', yellow);
        $("h2:contains('Sprint')").css('color', black).parents('.list').css('background', green);
        $("h2:contains('Inbox')").css('color', black).parents('.list').css('background', green);
        $("h2:contains('GOALS')").css('color', black).parents('.list').css('background', green);
        $("h2:contains('WEEKLY')").css('color', black).parents('.list').css('background', green);
        $("h2:contains('MONTHLY')").css('color', black).parents('.list').css('background', green);
        $("h2:contains('Backlog')").css('color', black).parents('.list').css('background', amber);
        $("h2:contains('QA')").css('color', black).parents('.list').css('background', amber);
        $("h2:contains('Bugs / issues')").css('color', black).parents('.list').css('background', red);
        $("h2:contains('Meetings')").css('color', black).parents('.list').css('background', purple);
        $("h2:contains('Consultancy')").css('color', black).parents('.list').css('background', purple);
        $("h2:contains('Waiting for')").css('color', black).parents('.list').css('background', purple);
        $("h2:contains('Project management')").css('color', black).parents('.list').css('background', purple);
        $("h2:contains('DONE')").css('color', black).parents('.list').css('background', dark);
        $("h2:contains('THE BOUNDARY OF CERTAINTY')").css('color', black).parents('.list').css('background', black);
        $(".points").css('background', white);
    });
});