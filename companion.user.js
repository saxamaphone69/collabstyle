// ==UserScript==
// @name          4chan s
// @author        saxamaphone69
// @version       0.2
// @grant         none
// @include       *://boards.4chan.org/*
// @homepageURL   https://github.com/saxamaphone69/4chan-s
// @updateURL     https://github.com/saxamaphone69/4chan-s/raw/master/4chan-s.user.js
// @downloadURL   https://github.com/saxamaphone69/4chan-s/raw/master/4chan-s.user.js
// ==/UserScript==

(function() {
	var d = document;//, stylin = d.querySelectorAll('.summary');
	function bigBad() {
	var rmStyleButton = d.createElement("button");
	rmStyleButton.id = "removestyle";
	rmStyleButton.innerHTML = 'remove styles';
	d.body.appendChild(rmStyleButton);
	d.getElementById("removestyle").onclick = function() {
	
	var rmStyles = d.querySelectorAll('style');
	for (var i = 0; i < rmStyles.length; i++) {
    	rmStyles[i].parentNode.removeChild(rmStyles[i]);
	}
	
	};
	//d.getElementById('full-board-list').innerHTML = 'top lel <span class="hide-board-list-button brackets-wrap"><a href="javascript:;"> - </a></span>';
	var stylin = d.querySelectorAll('.summary');
	for (var i = 0; i < stylin.length; i++) {
    	var styleContent = stylin[i].textContent;
    	//var newContent = styleContent.replace(/([0-9]+)/g, '<b>$1</b>');/(\d+)/g
    	var newContent = styleContent.replace(/(\d+)/g, '<span>$1</span>');
    	stylin[i].innerHTML = newContent;
	}
	if (location.pathname.split("/")[2] != 'res') {
d.documentElement.classList.add('on-index');
} else {
d.documentElement.classList.add('in-thread');
}
var parentalMode = d.createElement("div");
parentalMode.id = "parental-mode";
d.body.appendChild(parentalMode);
document.getElementById('parental-mode').onclick = function(){d.documentElement.classList.toggle('parental-mode');};

var dams = d.createElement("div");
dams.id = "dams";
d.body.appendChild(dams);
document.getElementById('dams').onclick = function(){d.documentElement.classList.toggle('dams');};

/*
document.dispatchEvent(new CustomEvent("AddSettingsSection", {
  detail: {
    title: "MAXIMUM SCRIPT",
    open: function(section, g) {
      section.textContent = "MY SCRIPT IS SO COOL! Thank you 4chan X v" + g.VERSION;
    }
  }
}));
*/

var chanxsettings = d.createElement("div");
chanxsettings.id = "chanxsettings";
d.body.appendChild(chanxsettings);
document.getElementById('chanxsettings').onclick = function(){
//d.documentElement.classList.add('settings-open');
d.dispatchEvent(new CustomEvent("OpenSettings"));
};

/*var replytoview = d.querySelectorAll('.postNum > span');
	for (var i = 0; i < replytoview.length; i++) {
	   var replytoviewlink = replytoview[i].querySelector('a').href;
        replytoview[i].innerHTML = '<a class="view-thread" href="' + replytoviewlink + '">View</a>';
	}
*/
	/*var durp = d.querySelectorAll('style');
	for (var i = 0; i < durp.length; i++) {
    	durp[i].parentNode.removeChild(durp[i]);
	}*/
	//<link rel="stylesheet" href="http://fonts.googleapis.com/css?family=Open+Sans:400,800|PT+Serif">
//var fileref = d.createElement("link");
//fileref.setAttribute("href", "http://fonts.googleapis.com/css?family=Open+Sans:400,800");
//fileref.setAttribute("rel", "stylesheet");
//d.getElementsByTagName("head")[0].appendChild(fileref);
	/*var textareas = d.getElementsByTagName('textarea');
    
    for (i=0;i<textareas.length;i++){
        if (textareas[i].parentNode.parentNode.parentNode.tagName.toString().toLowerCase() == 'div') {
            textareas[i].onfocus = function(){
                this.parentNode.parentNode.parentNode.classList.toggle('qr-focused');
            }
            textareas[i].onblur = function(){
                this.parentNode.parentNode.parentNode.classList.toggle('qr-focused');
            }
        }
    }*/
    var sidebarToggle = d.createElement('div');
    sidebarToggle.id = 'sidebar-toggle';
    d.body.appendChild(sidebarToggle);
    d.documentElement.classList.add('sidebar-inactive');
    var sidebar = d.createElement('div');
    sidebar.id = 'sidebar';
    d.body.appendChild(sidebar);
    d.getElementById('sidebar-toggle').onclick = function() {
    if (d.documentElement.classList.contains('sidebar-inactive')) {
      d.documentElement.classList.remove('sidebar-inactive');
      d.documentElement.classList.add('sidebar-active');
      } else {
      d.documentElement.classList.remove('sidebar-active');
      d.documentElement.classList.add('sidebar-inactive');
      }
    }

  d.getElementById('sidebar').appendChild( d.getElementById('header') );
  //d.getElementById('sidebar').appendChild( d.getElementById('qr') );
  //d.getElementById('sidebar').appendChild( d.getElementById('updater') );
  //d.getElementById('sidebar').appendChild( d.getElementById('thread-stats') );
	}
	d.addEventListener('DOMContentLoaded', bigBad, false);
})();
