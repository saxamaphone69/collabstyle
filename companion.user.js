// ==UserScript==
// @name          4chan sidedish
// @author        saxamaphone69
// @version       0.5
// @grant         none
// @include       *://boards.4chan.org/*
// ==/UserScript==

(function () {
    'use strict';
    var d = document;
    function init() {
        /*
        function scrollHeaderCheck() {
		var lst = 0, st, direction;
		function detectDirection() {
		st = window.pageYOffset;
		if (st > lst) {
		direction = 'down';
		d.documentElement.classList.remove('up');
		d.documentElement.classList.add('down');
		} else {
		direction = 'up';
		d.documentElement.classList.remove('down');
		d.documentElement.classList.add('up');
		}
		lst = st;
		return direction;
		}
		window.onscroll = function scroll() {
		var dir = detectDirection();
		console.log(dir);
		d.documentElement.classList.add(dir);
		}
		};
		scrollHeaderCheck();
		*/
        // Remove all the <style> elements from the document.
        var rmStyles = d.querySelectorAll('style');
        for (var i = 0, j = rmStyles.length; i < j; i++) {
            rmStyles[i].remove();
        }
        // Ensure the first .navLink stays so I can style the Catalog link.
        d.querySelector('.navLinks a[href$="catalog"]').classList.add('catalog-link');
        d.querySelector('.navLinks a[href$="catalog"]').innerHTML = '';
        // Wrap the numbers in the .summary with a <span> tag.
        var stylin = d.querySelectorAll('.summary');
        for (var i = 0, j = stylin.length; i < j; i++) {
            var styleContent = stylin[i].textContent;
            var newContent = styleContent.replace(/(\d+)/g, '<span>$1</span>');
            stylin[i].innerHTML = newContent;
        }
        // Add a class to <html>, depending if we're on the index or not.
        if (location.pathname.split('/')[2] != 'res') {
            d.documentElement.classList.add('on-index');
        } else {
            d.documentElement.classList.add('in-thread');
        }
        // Add an image opacity toggler.
        var parentalMode = d.createElement('div');
        parentalMode.id = 'parental-mode';
        d.body.appendChild(parentalMode);
        document.getElementById('parental-mode').onclick = function () {
            d.documentElement.classList.toggle('parental-mode');
        };
        // Add a 'Dark As My Soul' toggler.
        var dams = d.createElement('div');
        dams.id = 'dams';
        d.body.appendChild(dams);
        document.getElementById('dams').onclick = function () {
            d.documentElement.classList.toggle('dams');
        };
        // Add a button to open the 4chan X settings.
        var chanxsettings = d.createElement('div');
        chanxsettings.id = 'chanxsettings';
        d.body.appendChild(chanxsettings);
        document.getElementById('chanxsettings').onclick = function () {
            d.dispatchEvent(new CustomEvent('OpenSettings'));
        };
        // Change [Reply] to View for styling purposes.
        var replytoview = d.querySelectorAll('.postNum > span');
        for (var i = 0, j = replytoview.length; i < j; i++) {
            var replytoviewlink = replytoview[i].querySelector('a').href;
            replytoview[i].innerHTML = '<a class="view-thread" href="' + replytoviewlink + '">View</a>';
        }
        // Upon pressing '.', the sidebar will activate and automatically focus the QR.
        d.onkeyup = function (e) {
            var tag = e.target.tagName.toLowerCase();
            if (e.which === 190 && tag != 'input' && tag != 'textarea') {
                if (d.documentElement.classList.contains('sidebar-inactive')) {
                    d.documentElement.classList.remove('sidebar-inactive');
                    d.documentElement.classList.add('sidebar-active');
                } else {
                    d.documentElement.classList.remove('sidebar-active');
                    d.documentElement.classList.add('sidebar-inactive');
                }
                var leQR = d.querySelector('html.sidebar-active #qr');
                leQR.querySelector('textarea').focus();
            }
        };
        // Add a sidebar toggler.
        var sidebarToggle = d.createElement('div');
        sidebarToggle.id = 'sidebar-toggle';
        d.body.appendChild(sidebarToggle);
        d.documentElement.classList.add('sidebar-inactive');
        // Create a sidebar.
        var sidebar = d.createElement('div');
        sidebar.id = 'sidebar';
        d.body.appendChild(sidebar);
        d.getElementById('sidebar-toggle').onclick = function () {
            if (d.documentElement.classList.contains('sidebar-inactive')) {
                d.documentElement.classList.remove('sidebar-inactive');
                d.documentElement.classList.add('sidebar-active');
            } else {
                d.documentElement.classList.remove('sidebar-active');
                d.documentElement.classList.add('sidebar-inactive');
            }
        };
        // Get that newly created sidebar...
        var Ssidebar = d.getElementById('sidebar');
        function checkNadd(el) {
            if (el) {
                Ssidebar.appendChild(el);
            } /*else {
		        setTimeout(function() {
		        Ssidebar.appendChild(el);
		    }, 100);
		};*/
        }
        // then add everything to it. There must be a better way to do this....
        checkNadd(d.getElementById('qr'));
        checkNadd(d.getElementById('updater'));
        checkNadd(d.getElementById('thread-stats'));
        checkNadd(d.getElementById('thread-watcher'));
        checkNadd(d.getElementById('thread-watcher'));
        checkNadd(d.querySelector('.navLinks a[href$="catalog"]'));
        checkNadd(d.getElementById('dams'));
        checkNadd(d.getElementById('chanxsettings'));
        checkNadd(d.getElementById('parental-mode'));
        checkNadd(d.getElementById('header'));
        // Seriously that's fucking gross.
    }
    d.addEventListener('DOMContentLoaded', init, false);
}());
// document.addEventListener('4chanXInitFinished', function(){ alert('we loaded, now') }, false);