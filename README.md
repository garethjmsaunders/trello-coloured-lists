# Trello coloured lists

## Easily add colour backgrounds to Trello lists using Tampermonkey by [Gareth J M Saunders](https://www.garethjmsaunders.co.uk/)


**Trello coloured lists** as a simple JavaScript script for [Tampermonkey](https://tampermonkey.net/). It enables you to easily customise the colours of each list in Trello, based on the list name.

[Trello](https://trello.com/) is an online organisation and productivity tool that helps you keep on top of everything you need to do in a versatile and visual way. Trello follows the [kanban](https://en.wikipedia.org/wiki/Kanban_(development)) method of visualising the flow of work, using cards organised in lists, so that work-in-progress may be balanced and bottlenecks easily spotted.

One problem that I had with Trello out-of-the-box is that all the lists have the same visual weight: it is often hard to quickly distinguish one column from another. Which is why I wrote this simple script.


### How to install

#### 1. Download Tampermonkey

You will need Tampermonkey (or any other browser add-on that supports [user scripts](https://tampermonkey.net/scripts.php)).

* [Tampermonkey for Google Chrome](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo?hl=en)
* [Tampermonkey for Mozilla Firefox](https://addons.mozilla.org/en-GB/firefox/addon/tampermonkey/)
* [Tampermonkey for Opera](https://addons.opera.com/en/extensions/details/tampermonkey-beta/)
* [Tampermonkey for Microsoft Edge](https://www.microsoft.com/store/apps/9NBLGGH5162S)
* [Tampermonkey for Apple Safari](https://safari.tampermonkey.net/tampermonkey.safariextz)


#### 2. Install the script

1. Open the Tampermonkey dashboard and create a new script.
2. Copy the Trello coloured lists script and paste it into your new script.
3. Save the script.
4. Ensure it is enabled on the "Installed userscripts" tab.
5. Now open a board in [Trello](https://trello.com/).
6. Move your mouse off the Trello board page and then return it to trigger the script.


---

### Customise the script


#### Add new colours

To add a new colour, simply add it to the `var` declaration.

Let's say you want to add dark blue, add it after the blue variable. You will notice that I have arranged these in order of the colour spectrum.

```
    var red       = '#e06666', // indianred
        orange    = '#f6b26b', // sandybrown
        yellow    = '#ffd966', // khaki
        green     = '#93c47d', // darkseagreen
        blue      = '#6fa8dc', // cornflowerblue
        darkblue  = '#3d85c6', // steel blue <-- ADDED
        ...
```


#### Add new list titles

To add a colour background to a list on one of your Trello boards, first choose which colour you want the list to be, then update the appropriate colour.

For example, let's make all your columns entitled 'Incidents' red. This is what the default script looks like for red:

```
// Red - danger
        $("textarea:contains('Bugs'), textarea:contains('Fix'), textarea:contains('Issues')")
        .parents('.list').css('background', red);
```

Now add a new `textarea:contains('Incidents')` selector. I always try to ensure the lists are organised alphabetically to help find them, like so:

```
// Red - danger
        $("textarea:contains('Bugs'), textarea:contains('Fix'), textarea:contains('Incidents') textarea:contains('Issues')")
        .parents('.list').css('background', red);
```

Now save your changes.

#### Dark colours

If your list background colour is dark you will need to make sure the text of your list title is white. Simply add `.css('color', white)`, like this:

```
// Dark blue
        $("textarea:contains('Things')")
        .css('color', white)
        .parents('.list').css('background', darkblue);
```


---

### License

Trello coloured lists is released under a GNU General Public License v3.0.

Please feel free to customise the script to your own requirements. Update the colours, change the list titles to check, add to the script, improve it, whatever you like, feel free to hack away!

Permissions of this strong copyleft license are conditioned on making available complete source code of licensed works and modifications, which include larger works using a licensed work, under the same license. Copyright and license notices must be preserved. Contributors provide an express grant of patent rights.

See [LICENSE] for more details.