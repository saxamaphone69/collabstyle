// ==UserScript==
// @name          4chan s
// @author        saxamaphone69
// @version       0.3
// @grant         none
// @include       *://boards.4chan.org/*
// ==/UserScript==

(function () {
    var d = document;
    function bigBad() {
        /*
        function scrollHeaderCheck() {
            var lst = 0, st, direction;
			function detectDirection() {
				st = window.pageYOffset;
				if (st > lst) {
					direction = 'down';
					document.documentElement.classList.remove('up');
					document.documentElement.classList.add('down');
				} else {
					direction = 'up';
					document.documentElement.classList.remove('down');
					document.documentElement.classList.add('up');
				}

				lst = st;

				return direction;

				}

				window.onscroll = function scroll() {
					var dir = detectDirection();
					console.log(dir);
					//document.documentElement.classList.add(dir);
				}
        };
        scrollHeaderCheck();
        */
        // create a button to remove all the <style> elements
        var rmStyleButton = d.createElement('button');
        rmStyleButton.id = 'removestyle';
        rmStyleButton.innerHTML = 'remove styles';
        d.body.appendChild(rmStyleButton);
        d.getElementById('removestyle').onclick = function () {
            var rmStyles = d.querySelectorAll('style');
            for (var i = 0, j = rmStyles.length; i < j; i++) {
                rmStyles[i].parentNode.removeChild(rmStyles[i]);
            }
        };
        // ensure the first navlink stays so i can style the catalog button
        d.querySelector('.navLinks a[href$="catalog"]').classList.add('catalog-link');
        d.querySelector('.navLinks a[href$="catalog"]').innerHTML = '';
        // wrap the numbers in the .summary with a span
        // TODO: if the thread is expanded, it needs to rewrap
        var stylin = d.querySelectorAll('.summary');
        for (var i = 0, j = stylin.length; i < j; i++) {
            var styleContent = stylin[i].textContent;
            var newContent = styleContent.replace(/(\d+)/g, '<span>$1</span>');
            stylin[i].innerHTML = newContent;
        }
        // add a class to <html> depending if we're on the index or in a thread
        if (location.pathname.split('/')[2] != 'res') {
            d.documentElement.classList.add('on-index');
        } else {
            d.documentElement.classList.add('in-thread');
        }
        // add an image opacity toggler
        var parentalMode = d.createElement('div');
        parentalMode.id = 'parental-mode';
        d.body.appendChild(parentalMode);
        document.getElementById('parental-mode').onclick = function () {
            d.documentElement.classList.toggle('parental-mode');
        };
        // add a dark as my soul toggler
        var dams = d.createElement('div');
        dams.id = 'dams';
        d.body.appendChild(dams);
        document.getElementById('dams').onclick = function () {
            d.documentElement.classList.toggle('dams');
        };
        // add a 4chan X settings button
        var chanxsettings = d.createElement('div');
        chanxsettings.id = 'chanxsettings';
        d.body.appendChild(chanxsettings);
        document.getElementById('chanxsettings').onclick = function () {
            d.dispatchEvent(new CustomEvent('OpenSettings'));
        };
        // change [Reply] to View for styling
        var replytoview = d.querySelectorAll('.postNum > span');
        for (var i = 0, j =  replytoview.length; i < j; i++) {
            var replytoviewlink = replytoview[i].querySelector('a').href;
            replytoview[i].innerHTML = '<a class="view-thread" href="' + replytoviewlink + '">View</a>';
        }
        // this creates a <style> element to edit instead of using stylish
        /*
        var head = d.getElementsByTagName('head')[0];
        var s = d.createElement('style');
        s.setAttribute('type', 'text/css');
        s.setAttribute('contenteditable', 'true');
        s.setAttribute('id', 'editme');
        head.appendChild(s);
        $.addStyle = function(css) {
    var style;
    style = $.el('style', {
      textContent: css
    });
    $.asap((function() {
      return d.head;
    }), function() {
      return $.add(d.head, style);
    });
    return style;
  };
        */
        /*
        function addStyle() {
           var head = d.getElementsByTagName('head')[0];
           var s = d.createElement('style');
           var css = "";
           s.textContent = css;
           head.appendChild(s);
        };
        var addStyleButton = d.createElement('button');
        addStyleButton.id = 'addstyle';
        addStyleButton.innerHTML = 'add styles';
        d.body.appendChild(addStyleButton);
        d.getElementById('addstyle').onclick = function () {
            addStyle();
        };*/
        // add a sidebar toggler
        var sidebarToggle = d.createElement('div');
        sidebarToggle.id = 'sidebar-toggle';
        d.body.appendChild(sidebarToggle);
        d.documentElement.classList.add('sidebar-inactive');
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
        var Ssidebar = d.getElementById('sidebar');
        function checkNadd(el) {
            if (el) {
                Ssidebar.appendChild(el);
            }
        }
        checkNadd(d.getElementById('header'));
        checkNadd(d.getElementById('qr'));
        checkNadd(d.getElementById('updater'));
        checkNadd(d.getElementById('thread-stats'));
        checkNadd(d.getElementById('thread-watcher'));
        checkNadd(d.getElementById('thread-watcher'));
        checkNadd(d.querySelector('.navLinks a[href$="catalog"]'));
        checkNadd(d.getElementById('dams'));
        checkNadd(d.getElementById('chanxsettings'));
        checkNadd(d.getElementById('parental-mode'));
    }
    d.addEventListener('DOMContentLoaded', bigBad, false);
}())