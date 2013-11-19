collabstyle
===========

__cool, so what is this?__

this is an attempt at creating a *super sexy* 4chan userstyle with [@offlineric](https://github.com/offlineric)!

atm this is __SUPER ALPHA VERSION 0.000002__, where it's more just eric and i experimenting with ideas [(some on his own fork)](https://github.com/offlineric/collabstyle).

__cool, gimme gimme gimme!!!__

for this style to work as intended, i recommend blocking the default stylesheets. how? through adblock plus, add this custom filter:

(add-ons > adblock > options > filter preferences > custom filters tab)

```
*//static.4chan.org/image/title/*
$stylesheet,domain=boards.4chan.org [snail]
*//pixel.quantserve.com/*
```

you will also need [mayhem's LATEST 4chan X version](https://github.com/MayhemYDG/4chan-x/wiki/4chan-X-LATEST).

here is a quick preview:

![4chan on steroids](http://i.imgur.com/Z4UR4dR.png)

__cool, so what will this be?__

in the end, we both want a fresh and exiting new way to browse 4chan using hip web design trends and whatever

this style is intended to be used off a style-less 4chan. that means getting rid of yostuba and even any 4chan X styling (which we will show how to do at some point)

there will also be a sidedish userscript (or, the entire thing will be a sidedish, more on that in a bit) that will add all the extra JS fluff and rice we need to make some things happen

__cool, tell me more__

what we hope might happen is, that in the end this will be a userscript, almost similar to oneechan or appchan i guess now that i think about it, that offers the users the ability to choose their rice quantities

a userscript allows an easy to way to push updates, over a userstyle which needs to be uploaded to userstyles.org and has its own limitations. userscript also means the stuff that adds JS is all in the one file, so its easier to manage.

__cool, what sort of rice?__

rice includes:
- mobile support
  - pull to refresh
  - all device friendly css
- settings edited via 4chan X settings API
- either a sticky header, or an off-canvas sidebar for anything that isn't content
- animtations and transitions!
  - posts animate when scrolled into view
  - sidebar
  - quote previews
  - whatever else we can grab our hands on

__cool, and in the future?__

as i said, a userscript. possibly written in stylus then all built and compiled or whatever the terminology is. for now - with what we know (CSS)
